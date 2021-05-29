 

function MainInitAllPagesInit(){

      window.addEventListener("load", function(){
      window.cookieconsent.initialise({
        "palette": {
          "popup": {
            "background": "#000"
          },
          "button": {
            "background": "#e31d65", "font-size": "12px"
          }
        },
        "position": "bottom-left",
        "content": {
          "message": "We use cookies to track usage and preferences.",
          "href": "pandamonk.studio/cookiePolicy.html"
        }
      })});  

      //      console.log('cookie consent passed');
}



 function FadeInLoader(){
                  TweenLite.set("#LoadingScreen", {display:'inline-block'}); 
                  TweenLite.to("#LoaderBlack1", 0.6, {height:"100%",delay:0, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack2", 0.6, {height:"100%",delay:0.1, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack3", 0.6, {height:"100%",delay:0.2, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack4", 0.6, {height:"100%",delay:0.3, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack5", 0.6, {height:"100%",delay:0.4, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack6", 0.6, {height:"100%",delay:0.5, ease:Power2.easeInOut,onComplete:fadeOutLoader });                  
                  TweenLite.to("#pandaLoadGif", 0.6, {opacity:1,delay:0.5, ease:Power2.easeInOut });          

              }

            function fadeOutLoader(){

                  TweenLite.to("#pandaLoadGif", 0.8, {opacity:0,delay:0, ease:Power2.easeInOut,onComplete:disableLoader });          
                  TweenLite.set("#MainCont", {display:'block'});  
                /*  TweenLite.set("#DesktopNavigacijaCont", {display:'block'});  */
                  

                  TweenLite.to("#HomeBtt", 0.4, {marginLeft:0,delay:0.2, ease:Power1.easeInOut });
                  TweenLite.to("#WorkBtt", 0.4, {marginLeft:0,delay:0.3, ease:Power1.easeInOut });
                  TweenLite.to("#AboutBtt", 0.4, {marginLeft:0,delay:0.4, ease:Power1.easeInOut });
                  TweenLite.to("#ContactBtt", 0.4, {marginLeft:0,delay:0.6, ease:Power1.easeInOut });

                  TweenLite.set("#LoaderBlack1", {bottom:0}); 
                  TweenLite.set("#LoaderBlack2", {bottom:0}); 
                  TweenLite.set("#LoaderBlack3", {bottom:0}); 
                  TweenLite.set("#LoaderBlack4", {bottom:0}); 
                  TweenLite.set("#LoaderBlack5", {bottom:0}); 
                  TweenLite.set("#LoaderBlack6", {bottom:0}); 
                  TweenLite.to("#LoaderBlack1", 0.6, {height:"0%",delay:0, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack2", 0.6, {height:"0%",delay:0.1, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack3", 0.6, {height:"0%",delay:0.2, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack4", 0.6, {height:"0%",delay:0.3, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack5", 0.6, {height:"0%",delay:0.4, ease:Power2.easeInOut });
                  TweenLite.to("#LoaderBlack6", 0.6, {height:"0%",delay:0.5, ease:Power2.easeInOut });
            }


          function disableLoader(){
              TweenLite.set("#LoadingScreen", {display:'none'}); 
            
          } 


var LastPage;
var CurrentPage;
            


function PageLoader(){


                    
          Barba.Dispatcher.on('linkClicked', function(HTMLElement, MouseEvent) {

              

              if (HTMLElement.id == 'ServicesCall'){ scrollToDiv = 'Services'; }
              if (HTMLElement.id == 'ApproachCall'){ scrollToDiv = 'Approach'; }

              if(Barba.HistoryManager.prevStatus() !== null){
              LastPage =  Barba.HistoryManager.prevStatus().url.replace(/#.*/, '').toString();
              console.log('Barba url' + Barba.HistoryManager.prevStatus().url.replace(/#.*/, '').toString());
              }
              else{
                LastPage = 'Unavailable';
              }

              CurrentPage = Barba.HistoryManager.currentStatus().url.replace(/#.*/, '').toString();

              console.log('Barba url' + Barba.HistoryManager.currentStatus().url.replace(/#.*/, '').toString());
              
                
              
              /*var path = window.location.pathname;
              var page = path.split("/").pop();
              console.log( page );*/
          });
          


            Barba.Pjax.start();         

            var FadeTransition = Barba.BaseTransition.extend({
                    start: function() {

                                      
                      FadeInLoader();

                      Promise
                        .all([this.newContainerLoading, this.fadeOut()])
                        .then(this.fadeIn.bind(this));


                    },

                    finish: function() {

                     
                      this.done();
                    },

                    fadeOut: function() {
  
                       scrollToTop(); 
                      return $(this.oldContainer).animate({ opacity: 1 }).promise();
                    },

                    fadeIn: function() {

                        
                      //controller.enabled(false);

                      
                      
                      var _this = this;
                      var $el = $(this.newContainer);

                   //   $(this.oldContainer).hide();
                                          

                      $el.css({
                        visibility : 'visible',
                        opacity : 0
                      });

                      $el.animate({ opacity: 1 }, 400, function() {


                        _this.done(); 


                      });
                    }
                  });


                  Barba.Pjax.getTransition = function() {

                    return FadeTransition;
                  };

            /* all scene names > LastCallScene RecentCaseScene BannerScene BajkaScene BMWScene HomeScene  */


            Barba.Dispatcher.on('transitionCompleted', function(currentStatus) {
               /* console.log('scroll depth: ' + jQuery.scrollDepth);
                console.log('riveted : ' + riveted);*/
                if(typeof $.scrollDepth.reset !== "undefined") { 
                        
                        jQuery.scrollDepth.reset();
                      //  console.log('ScrollDepth plugin found');
                    }
                else{
                      console.log('ScrollDepth plugin not found');
                    }

                if(typeof riveted !== "undefined"){
                        riveted.reset();
                      //  console.log('Riveted plugin found');
                    }
                else{
                      console.log('Riveted plugin not found');
                    }    
                 
                
            });

            var Homepage = Barba.BaseView.extend({

                      namespace: 'homepage',
                      onEnter: function() {


   
                      },
                      onEnterCompleted: function() {
                          gtag('config', 'UA-114303539-1', {'page_path': '/index.html'});
                  
                            
                            constructPersistentScroller();
                            constructPandaFooterScroller();
                            constructHomeScroller();
                            controller.enabled(true);
                            controller.update(true);

                      },
                      onLeave: function() {
                          console.log('leaving index.html');
                           controller = controller.destroy(true);
                          


                      },
                      onLeaveCompleted: function() {
                      }
                    });
            Homepage.init();

            var Workpage = Barba.BaseView.extend({
                      namespace: 'workpage',
                      onEnter: function() {

                      },
                      onEnterCompleted: function() {
                          
                          gtag('config', 'UA-114303539-1', {'page_path': '/work.html'});
      
                          TweenLite.from("#WorkColInner", 0.8, {delay:1.2,marginLeft:'20px', ease:Back.easeOut });
                          TweenLite.from("#WorkSun", 1.6, {delay:1.2,backgroundPosition:'50% 800%', ease:Back.easeOut });
                          TweenLite.to("#WorkColRuka", 0.5, {marginTop:'10px', delay:2, ease:Power1.easeInOut });
                          TweenLite.to("#WorkColRuka", 0.5, {marginTop:'0px', delay:2.5, ease:Power1.easeInOut });
                        /*  TweenLite.to("#WorkColRuka", 0.7, {delay:3,top:'140px', ease:Power1.easeInOut });
                          TweenLite.to("#WorkColRuka", 1, {delay:3.7,top:'120px', ease:Power1.easeInOut });*/
                          
                          constructPersistentScroller();
                          constructWorkNavigaton();
                          //constructPandaFooterScroller();
                          console.log('entered work.html');
                          /*  controller.addScene(HomeScene);
                            HomeScene.triggerElement("#HomeTrigger");
                            HomeScene.refresh();
                            HomeScene.update();*/
                      },
                      onLeave: function() {
                          controller = controller.destroy(true);
                          console.log('leaving work.html');
                         // controller.removeScene(HomeScene);
                         // controller.removeScene(HomeScene);
                      },
                      onLeaveCompleted: function() {
                          
                      }
                    });
            Workpage.init();


            var scrollToDiv = 'none';            

            var Aboutpage = Barba.BaseView.extend({
             
                      namespace: 'aboutpage',
                      onEnter: function() {
    

                          
                      },
                      onEnterCompleted: function() {
                            
                           
                           gtag('config', 'UA-114303539-1', {'page_path': '/about.html'});
        
                          if(scrollToDiv == 'Services'){                            
                            TweenLite.to(window, 1, {scrollTo:{y:"#ServicesRow", offsetY:220},delay:1});
                            }

                          if(scrollToDiv == 'Approach'){   
                             TweenLite.to(window, 1.3, {scrollTo:{y:"#ApproachRow", offsetY:0},delay:1});
                          }

                           constructPersistentScroller();
                           contructAboutScroller();
                           
                          controller.enabled(true);
                          controller.update(true);
                          scrollToDiv = 'none'; 

                          /*  controller.addScene(HomeScene);
                            HomeScene.triggerElement("#HomeTrigger");
                            HomeScene.refresh();
                            HomeScene.update();*/
                      },
                      onLeave: function() {
                          controller = controller.destroy(true);

                      },
                      onLeaveCompleted: function() {
                          // The Container has just been removed from the DOM.
                      }
                    });
            Aboutpage.init();



              var Contactpage = Barba.BaseView.extend({
                      namespace: 'contactpage',
                      onEnter: function() {
                          
                          // The new Container is ready and attached to the DOM.
                      },
                      onEnterCompleted: function() {
                         constructContact();
                         gtag('config', 'UA-114303539-1', {'page_path': '/contact.html'});


                          $("#ReadyContact").html('READY?');
                          TweenLite.to('#ReadyContact', 0.25, {delay:1.2 , rotation:0, onComplete: switchContact });
                          function switchContact(){
                            $("#ReadyContact").html('CONTACT');
                          }


                          TweenLite.from('#leftBlockLastCall', 0.6, {delay:1.2 , left:"-150px",rotation:'-15px',  ease:Bounce.easeOut });
                          TweenLite.from('#rightBlockLastCall',0.6, {delay:1.2 , right:'-200px',Margintop:'150px',rotation:'15px',  ease:Bounce.easeOut });
                        
                          constructPersistentScroller();                           
                          controller.enabled(true);
                          controller.update(true);
                          scrollToDiv = 'none'; 
                          

                      },
                      onLeave: function() {
                          controller = controller.destroy(true);
                          
                         // controller.removeScene(HomeScene);
                         // controller.removeScene(HomeScene);
                      },
                      onLeaveCompleted: function() {
                          // The Container has just been removed from the DOM.
                      }
                    });
            Contactpage.init();


            var Casepage = Barba.BaseView.extend({
                      namespace: 'casepage',
                      onEnter: function() {
                        
                          // The new Container is ready and attached to the DOM.
                      },
                      onEnterCompleted: function() {

                        var path = window.location.pathname;
                        var page = path.split("/").pop();
                        
                            gtag('config', 'UA-114303539-1', {'page_path': page});



                          TweenLite.set('.backToWorkBtt', {display:'inline-block'});
                          TweenLite.from('.backToWorkBtt',0.6, {delay:1 ,marginTop:'-50px',opacity:0,  ease: Power2.easeOut});

                           constructPersistentScroller();
                                                      
                          controller.enabled(true);
                          controller.update(true);
                          scrollToDiv = 'none'; 

                          /*  controller.addScene(HomeScene);
                            HomeScene.triggerElement("#HomeTrigger");
                            HomeScene.refresh();
                            HomeScene.update();*/
                      },
                      onLeave: function() {

                          controller = controller.destroy(true);
                          TweenLite.set('.backToWorkBtt', {display:'none'});

                      },
                      onLeaveCompleted: function() {
                            
                          // The Container has just been removed from the DOM.
                      }
                    });
            Casepage.init();


/*
            var links = document.querySelectorAll('a[href]');
            var cbk = function(e) {
             if(e.currentTarget.href === window.location.href) {
               e.preventDefault();
               e.stopPropagation();
             }
            };

            for(var i = 0; i < links.length; i++) {
              links[i].addEventListener('click', cbk);
            }*/

            

}