function scrollToTop(event){  // bad hotfix footer needs to be removed from ajaxed cont
             /*   Barba.Pjax.goTo('index.html');*/
                TweenLite.to(window, 0.5, {scrollTo:{y:0}});
              }


 $( document ).ready(function() {


        
            

            var menuExpanded = false;



              $("#MENU").on("mousedown tap", Menu_Expand_click);
              $("#mainPandaLogo").on("mousedown tap", scrollToTop);
              $("#logoFooter").on("mousedown tap", scrollToTop);

               $(".navCircleMob").on("mousedown tap", Menu_click);

                function Menu_click(event){

                    TweenLite.to($(event.target), 0.3, {delay:0,scale:0.73,backgroundColor:"#a7afff", ease: Back.easeOut}); 
                    TweenLite.to($(event.target), 0.2, {delay:0.3,scale:1,backgroundColor:"#ef3e42", ease: Back.easeOut}); 
                    hideMenu();

                }


               function hideMenu(){
                      TweenLite.to("#NavigacijaMobCont", 0.3, {delay:0.55,opacity:0 ,ease: Power2.easeOut}); 

                      $('#MENU').text('MENU');
                        TweenLite.to("#MENU", 0.2, {delay:0.4,scale:0.8,backgroundColor:"#ef3e42",scale:1, ease: Back.easeIn}); 
                        
                        menuExpanded = false;       
                        
              }

           


              function Menu_Expand_click(event){


                      if(!menuExpanded){

                        TweenLite.to("#MENU", 0.2, {delay:0,scale:0.8,backgroundColor:"#a7afff", ease: Back.easeOut}); 
                        TweenLite.set("#NavigacijaMobCont", {opacity:1}); 
                        $('#MENU').text('X');
                        menuExpanded = true;
                        showMobileMenu();
                      }
                      else{
                        $('#MENU').text('MENU');
                        TweenLite.to("#MENU", 0.2, {delay:0,scale:0.8,backgroundColor:"#ef3e42",scale:1, ease: Back.easeIn}); 
                        
                        menuExpanded = false;
                        TweenLite.set("#NavigacijaMobCont", {display:"none"}); 
                      }
                }


              function showMobileMenu(){
                  
                  TweenLite.set("#NavigacijaMobCont", {display:"inline-block"}); 
                  TweenLite.set("#NavigacijaMobExpanded", {display:"inline-block"}); 


                  TweenLite.from("#HomeMobBtt", 0.3, {delay:0,scale:0.1, ease: Back.easeOut}); 
                  TweenLite.from("#AboutMobBtt", 0.3, {delay:0.1,scale:0.1, ease: Back.easeOut}); 
                  TweenLite.from("#WorkMobBtt", 0.3, {delay:0.2,scale:0.1, ease: Back.easeOut});                   
                  TweenLite.from("#ContactMobBtt", 0.3, {delay:0.3,scale:0.1, ease: Back.easeOut}); 
              }





              $(".sviThumbovi").on("mouseover", worksOver);
              $(".sviThumbovi").on("mouseout", worksOut);
                        


              function worksOver(event)
              {                
              TweenLite.to($(this), 0.2, {opacity:"1", borderRadius:"0%", width:"100%", height:"220px", marginTop:"0px",ease: Power2.easeOut});
           /*   TweenMax.to($(this).find("#smallDetails"), 0.5, {top:"5px",color:"#fea545"});
              TweenMax.to($(this).find("#CaptionBox"), 0.5, {color:"#FFFFFF", top:"10px"});*/

              }


              function worksOut(event)
              {
              TweenLite.to($(this), 0.2, {opacity:"0.8",borderRadius:"50%", width:"170px", height:"170px", marginTop:"18px",ease: Power2.easeOut});
           /*   TweenMax.to($(this).find("#smallDetails"), 0.5, {top:"20px",color:"#899fff"});
              TweenMax.to($(this).find("#CaptionBox"), 0.5, {color:"#e8e7db", top:"20px"});*/
              }

 });