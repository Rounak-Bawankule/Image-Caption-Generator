from flask import Flask, render_template,request
from working_code import predict_caption, encode_image
import numpy
from gtts import gTTS
import os

app = Flask(__name__)

def generate(path):
    try:
        os.remove('./static/sounds/sound.mp3')
    except:
        pass
    photo = encode_image(path)
    photo = photo.reshape(1,2048)
    caption = predict_caption(photo)
    return caption

def generate_sound(caption, fname):
    try:
        os.remove('./static/sounds/sound.mp3')
    except:
        pass
    language = 'en'
    myobj = gTTS(text=caption, lang=language, slow=False)
    myobj.save(f"./static/sounds/sound.mp3")


@app.route("/", methods=['GET', 'POST'])
def homepage():

    if request.method == "POST":
        f = request.files['image']
        path = f'./static/user_images/{f.filename}'
        f.save(path)
        caption = generate(path)
        generate_sound(caption, f.filename)
        return render_template('index.html', caption=caption, path=path)
    else:
        return render_template('index.html')

@app.route("/contact")
def contact():
    return render_template("contact.html")


if '__name__' == '__main__':
    app.run(debug=True, port=8000)