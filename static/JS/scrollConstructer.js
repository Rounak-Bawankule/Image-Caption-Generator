            var controller = new ScrollMagic.Controller();
            /*var WorkController = new ScrollMagic.Controller();*/
            var HomeScene = null;
            var BMWScene = null;

                       /*

                                function checkIframeLoaded() {
                                      // Get a handle to the iframe element
                                      var iframe = document.getElementById('BMW_ANIM_FRAME');
                                      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

                                      // Check if loading is complete
                                      if (  iframeDoc.readyState  == 'complete' ) {
                                          //iframe.contentWindow.alert("Hello");
                                          iframe.contentWindow.onload = function(){
                                             // alert("I am loaded");
                                          };
                                          // The loading is complete, call the function we want executed once the iframe is loaded
                                          PlayBMWGraphic();
                                          return;
                                      } 

                                      window.setTimeout(checkIframeLoaded, 100);
                                }

                                function PlayBMWGraphic()
                                {                
                                  window.frames['BMW_ANIM_FRAME'].customCall();
                                }


                                
                  */


           function constructPersistentScroller(){


              $('.videoClick').on("mousedown tap", GAVideoEvent);

             function GAVideoEvent(event){                            
                   gtag('event', event.target.id, {
                    'event_label': event.target.id,
                    'event_category': 'video__play'
                  });
             }

              $("#logoFooter").on("mousedown tap", scrollToTop); // bad patch reset - needs rework

              controller = new ScrollMagic.Controller();
              var HomeScene = null;
              var BMWScene = null;

              var HomeTimeLine  = new TimelineLite();
              HomeTimeLine.add( TweenLite.to(".emptyNavBTT", 0.3, {marginTop:0, maxWidth:'500px',ease:Power1.easeInOut }) );
              HomeTimeLine.add( TweenLite.to("#HomeBtt", 0.3, {marginTop:0, maxWidth:'500px',ease:Power1.easeInOut }) ,"-=0.3" );
              HomeTimeLine.add( TweenLite.to("#AboutBtt", 0.3, {marginTop:0,maxWidth:'500px',ease:Power1.easeInOut }) ,"-=0.2" );
              HomeTimeLine.add( TweenLite.to("#WorkBtt", 0.3, {marginTop:0,maxWidth:'500px',ease:Power1.easeInOut }) ,"-=0.25" );              
              HomeTimeLine.add( TweenLite.to("#ContactBtt", 0.3, {marginTop:0,maxWidth:'500px',ease:Power1.easeInOut }),"-=0.25" );
              

              var HomeScene = new ScrollMagic.Scene({
                  triggerElement: "#HomeTrigger",  triggerHook: 'onLeave'
                })
                .setTween(HomeTimeLine)
            //    .addIndicators({name: "BMNW VIDEO (duration: 1000)"})
                .addTo(controller);

           }

           function constructPandaFooterScroller(){

                var LastCallTimeline = new TimelineLite();
              LastCallTimeline.add(TweenLite.to("#leftBlockLastCall", 0.7, {marginLeft: "-280px",ease:Power1.easeInOut }) );
              LastCallTimeline.add(TweenLite.to("#rightBlockLastCall", 0.7, {marginRight: "-280px",ease:Power1.easeInOut}), "-=0.69"  );
              LastCallTimeline.add(TweenLite.to("#headlineBlackBlock", 0.7, {opacity: 0.3,ease:Power1.easeInOut }), "-=0.7" );
              LastCallTimeline.add(TweenLite.to("#headlineBlackBlockRight", 0.7, {opacity: 0.3,ease:Power1.easeInOut }), "-=0.7" );
              LastCallTimeline.add(TweenLite.to("#getInTouch", 0.7, {marginTop: "100px",ease:Power1.easeInOut }), "-=0.5"  );

              LastCallTimeline.add(TweenLite.from("#TouchUnderline", 0.7, {width: "0px", ease:Power1.easeInOut }), "-=0.2" ); 
              LastCallTimeline.add(TweenLite.from("#MoreAbout", 0.4, {scale:0.5,opacity:0, ease:Power1.easeInOut }),"-=0.5" );          
              LastCallTimeline.add(TweenLite.from("#MoreWorks", 0.4, {scale:0.5,opacity:0, ease:Power1.easeInOut }),"-=0.4" ); 
              LastCallTimeline.add(TweenLite.from("#one", 0.4, {scale:0.5,opacity:0, ease:Power1.easeInOut }),"-=0.4" ); 
              LastCallTimeline.add(TweenLite.from("#two", 0.4, {scale:0.5,opacity:0, ease:Power1.easeInOut }),"-=0.4" ); 
              

              LastCallTimeline.add(TweenLite.to("#pandaHeadTip", 1, {bottom:'-60px', ease:Back.easeInOut }),"-=1.4" ); 


              var LastCallScene = new ScrollMagic.Scene({
                  triggerElement: "#lastCallTrigger",    triggerHook: 'onEnter',
                })
                .setTween(LastCallTimeline)
                .addTo(controller);

           }

           function constructContact(){

              $("#Name").on( "focusin", FocusMSG );
              $("#Email").on( "focusin", FocusMSG );
              $("#MsgField").on( "focusin", FocusMSG );


              function FocusMSG(event)
              {
                var pusherMSG = $(this).attr('data-pusherMSG');
                var addedName = '';

                if(event.currentTarget.id ==='Email' && $("#Name").val().length === 0 ){
                  pusherMSG = 'DONT FORGET THE NAME';  
                             
                }
                if (event.currentTarget.id ==='Email' &&  $("#Name").val().length !== 0 ) { 

                  addedName =  $("#Name").val().split(' ')[0];;   
                }
                else { addedName = ''; }

                if(event.currentTarget.id === 'MsgField' && $("#Email").val().length === 0 ){
                  pusherMSG = 'DONT FORGET THE EMAIL';                  
                }
                
              /* TweenLite.killTweensOf($(this), false); */

               TweenLite.to('#ContactPusher', 0.15, { y:-20,opacity:0, onComplete:setText, ease:Power1.easeIn ,overwrite:'all'});               
               TweenLite.to('#ContactPusher', 0.15, { y:0,opacity:1,delay:0.15, ease:Power1.easeOut});

               TweenLite.to('#ContactPusher', 0.15, {delay:2.5 , y:-20,opacity:0, onComplete:resetText, ease:Power1.easeIn});
               TweenLite.to('#ContactPusher', 0.15, {delay:2.7 , y:0,opacity:1, ease:Power1.easeOut });


               function setText(){

                $("#ContactPusher").html(pusherMSG +" " +addedName);
                 
               }
               function resetText(){
                TweenLite.set("#ContactPusher", {y:20});
                $("#ContactPusher").html('GOT A INTERESTING PROJECT? LET US KNOW');
               }
              
              }

              $("#newMSG").on("mousedown tap", newMSG);

              function newMSG(event){



                  $('#MsgField').val('');

                  TweenLite.set("#ContactSuccesCont",{top:"0"});
                  TweenLite.to('#rightBlockLastCall',0.3, {delay:0 , marginTop:'-90px',  ease:Back.easeIn });
                  TweenLite.to('#rightBlockLastCall',0.3, {delay:0.3 , marginTop:'0px',  ease:Back.easeOut });
                  TweenLite.to('#ContactSuccesCont',0.3, {delay:0.2 , height:'0%',  ease:Power1.easeOut });
                  TweenLite.to('#kontaktForma',0.2, {delay:0.5 , autoAlpha:1 ,  ease:Power1.easeOut });
              }

              $( "#kontaktForma" ).submit(function( event ) {

                   window.dataLayer = window.dataLayer || [];
                   window.dataLayer.push({
                   'event': 'Kontakt Submission'
                   });
                  event.preventDefault();
/*                  $("#MSG").html("THANK YOU, MESSAGE SENT");*/
             /*     TweenLite.to("#contact-area", 0.4, {delay:0, height:"0px",ease:Power1.easeOut });*/
                  $.ajax({
                          type: 'POST',
                          url: 'contactengine.php',
                          data: { Name:  $("#Name").val(), 
                                  Email: $("#Email").val(),
                                  Message: $("#Message").val()
                                   }
                      });
                                  TweenLite.set("#ContactSuccesCont",{bottom:0, top:'auto'});
                                  TweenLite.to('#rightBlockLastCall',0.3, {delay:0 , marginTop:'-90px',  ease:Back.easeIn });
                                  TweenLite.to('#rightBlockLastCall',0.3, {delay:0.3 , marginTop:'0px',  ease:Back.easeOut });
                                  TweenLite.to('#kontaktForma',0.2, {delay:0.2 , autoAlpha:0 ,  ease:Power1.easeOut });
                                  TweenLite.to('#ContactSuccesCont',0.7, {delay:0.2 , height:'100%',  ease:Bounce.easeOut });
                      return false;
                  
                });



           }

           function contructAboutScroller(){

                $(".ScrollBTT").on("mousedown tap", scrollToDestination);

                function scrollToDestination(event){ 
                
                TweenLite.to(window, 0.5, {scrollTo:'#'+$(this).attr('data-whereto')});
                }


                var AboutHeaderTimeline = new TimelineLite();
                AboutHeaderTimeline.add(TweenLite.to("#leftBlockAboutCall", 0.5, {marginLeft: "-115px",rotation:-6,ease:Back.easeIn }) );
                AboutHeaderTimeline.add(TweenLite.to("#leftBlockAboutCall", 0.3, {marginLeft: "91px",rotation:0,ease:Bounce.easeOut }) );

             


              var AboutHeaderScene = new ScrollMagic.Scene({
                  triggerElement: "#AboutHeadlineTrigger",   triggerHook: 'onLeave'
                })
                .setTween(AboutHeaderTimeline)
                .addTo(controller);   

              var AboutHeaderTimeline2 = new TimelineLite();
               AboutHeaderTimeline2.add(TweenLite.to("#rightBlockAboutCall", 0.3, {top: "-20px",ease:Power1.easeOut})  );
               AboutHeaderTimeline2.add(TweenLite.to("#rightBlockAboutCall", 0.4, {top: "0px",ease:Back.easeOut}));
               AboutHeaderTimeline2.add(TweenLite.to("#AboutHeadlineBlackBlockRight", 0.4, {delay:0,opacity: "1",ease:Elastic.easeIn }), "-=0.3"  );
               AboutHeaderTimeline.add(TweenLite.to("#rightBlockAboutCall", 0.2, {marginRight: "-100px",ease:Back.easeOut}), "-=0.25"  );
               AboutHeaderTimeline.add(TweenLite.to("#rightBlockAboutCall", 0.2, {marginRight: "-91px",ease:Power1.easeOut})  );
               AboutHeaderTimeline.add(TweenLite.to("#AboutLinijeCont", 0.5, {delay:0.2,height: "100%",opacity:1,ease:Power1.easeOut}), "-=0.2"   );
              
              /*AboutHeaderTimeline.add(TweenLite.to("#rightBlockAboutCall", 0.7, {marginRight: "-280px",ease:Power1.easeInOut}), "-=0.69"  );*/


              var AboutHeaderScene2 = new ScrollMagic.Scene({
                  triggerElement: "#AboutHeadlineTrigger",   triggerHook: 'onLeave'
                })
                .setTween(AboutHeaderTimeline2)
                .addTo(controller);   

                

                 $("#dataRuka").on("mousedown tap", shakeIt);

                function shakeIt(event){ 
                
                    /*TweenLite.killTweensOf($("#dataRuka"), false); */
                    TweenLite.to("#dataRuka", 0.1, {delay:0 ,y: -20,rotation:2,ease:Power1.easeInOut });
                    TweenLite.to("#dataRuka", 0.2, {delay:0.1, y: 10,rotation:-2,ease:Power2.easeInOut });
                    TweenLite.to("#dataRuka", 0.1, {delay:0.3,y: -10,rotation:2,ease:Power1.easeInOut });
                    TweenLite.to("#dataRuka", 0.1, {delay:0.4,y: 10,rotation:-2,ease:Power1.easeInOut });
                    TweenLite.to("#dataRuka", 0.15, {delay:0.5,y: 0,rotation:0,ease:Power1.easeInOut });
                }

              var CreativeCrewTimeline = new TimelineLite();

              CreativeCrewTimeline.add(TweenLite.to("#CrewCreative", 1.5, {y: -520,ease:Back.easeInOut }));
              CreativeCrewTimeline.add(TweenLite.to("#CrewCreativeHead", 1.57, {y: -520,ease:Back.easeInOut }),'-=1.5');

              CreativeCrewTimeline.add(TweenLite.to("#dataRuka", 0.1, {delay:0.15 ,y: -20,rotation:2,ease:Power1.easeInOut }));
              CreativeCrewTimeline.add(TweenLite.to("#dataRuka", 0.2, {y: 10,rotation:-2,ease:Power2.easeInOut }));
              CreativeCrewTimeline.add(TweenLite.to("#dataRuka", 0.1, {y: -10,rotation:2,ease:Power1.easeInOut }));
              CreativeCrewTimeline.add(TweenLite.to("#dataRuka", 0.1, {y: 10,rotation:-2,ease:Power1.easeInOut }));
              CreativeCrewTimeline.add(TweenLite.to("#dataRuka", 0.15, {y: 0,rotation:0,ease:Power1.easeInOut }));
             
              var CreativeCrewScene = new ScrollMagic.Scene({
                  triggerElement: "#CrewTrigger", offset: 280
                })
                .setTween(CreativeCrewTimeline)
                .addTo(controller);   



              var ApproachTimeline = new TimelineLite();

              ApproachTimeline.add(TweenLite.from("#ApproachRukaNaslovWrapper", 1, {top: "55px",left:'-15px',rotation:-15,ease:Back.easeInOut }));
              ApproachTimeline.add(TweenLite.to("#ApproachRukaNaslovWrapper", 0.7, {delay:2,top: "-20px",rotation:5,left:'0px',ease:Back.easeInOut }));
              ApproachTimeline.add(TweenLite.to("#ApproachRukaNaslovWrapper", 0.7, {delay:1,top: "0",rotation:0, left:'0px',ease:Back.easeInOut }));


              var AboutApproachScene = new ScrollMagic.Scene({
                  triggerElement: "#ApproachTrigger",  
                })
                .setTween(ApproachTimeline)
                .addTo(controller);          


              var ServicesTimeline = new TimelineLite();
              ServicesTimeline.add(TweenLite.from("#ServicesNaslov", 0.5, {top: "100px",opacity:0.2,ease:Power1.easeOut }));
              

              var ServicesScene = new ScrollMagic.Scene({
                  triggerElement: "#ServicesTrigger", triggerHook: 'onEnter', offset:240
                })
                .setTween(ServicesTimeline)
                .addTo(controller);      


              var ServicesTimeline2 = new TimelineLite();
              ServicesTimeline2.add(TweenLite.from("#service1", 0.5, {delay:0.1,y: 100,opacity:0,ease:Power1.easeOut }));
              ServicesTimeline2.add(TweenLite.from("#service2", 0.5, {y: 100,opacity:0.25,ease:Power1.easeInOut }), '-=0.4');
              ServicesTimeline2.add(TweenLite.from("#service3", 0.5, {y: 100,opacity:0.25,ease:Power1.easeInOut }), '-=0.4');
              ServicesTimeline2.add(TweenLite.from("#service4", 0.5, {y: 100,opacity:0.25,ease:Power1.easeInOut }), '-=0.4');


              var ServicesScene2 = new ScrollMagic.Scene({
                  triggerElement: "#ServicesTrigger2", triggerHook: 'onEnter', offset:150
                })
                .setTween(ServicesTimeline2)
                .addTo(controller);      


             var ApproachTimeline2 = new TimelineLite();
              ApproachTimeline2.add(TweenLite.from("#approach1", 0.5, {delay:0.1,top: "100px",opacity:0.25,ease:Power1.easeInOut }));
              ApproachTimeline2.add(TweenLite.from("#approach2", 0.5, {top: "100px",opacity:0.25,ease:Power1.easeInOut }), '-=0.4');
              ApproachTimeline2.add(TweenLite.from("#approach3", 0.5, {top: "100px",opacity:0.25,ease:Power1.easeInOut }), '-=0.4');
              ApproachTimeline2.add(TweenLite.from("#approach4", 0.5, {top: "100px",opacity:0.25,ease:Power1.easeInOut }), '-=0.4');


              var AboutApproachScene2 = new ScrollMagic.Scene({
                  triggerElement: "#ApproachTrigger2", triggerHook: 'onEnter', offset:150
                })
                .setTween(ApproachTimeline2)
                .addTo(controller);     


             var ApproachTimeline3 = new TimelineLite();
              ApproachTimeline3.add(TweenLite.from("#basics1", 0.6, {delay:0.2,y: 100,opacity:0.4,ease:Power1.easeOut }));
              ApproachTimeline3.add(TweenLite.from("#basics2", 0.6, {y: 100,opacity:0.4,ease:Power1.easeOut }), '-=0.2');
              ApproachTimeline3.add(TweenLite.from("#basics3", 0.6, {y: 100,opacity:0.4,ease:Power1.easeOut }), '-=0.2');
              


              var AboutApproachScene3 = new ScrollMagic.Scene({
                  triggerElement: "#ApproachTrigger3", triggerHook: 'onEnter', offset:200
                })
                .setTween(ApproachTimeline3)
                .addTo(controller);    



              var LastCallTimeline = new TimelineLite();

              LastCallTimeline.add(TweenLite.to("#rightBlockLastCall", 0.7, {marginRight: "-200px",ease:Power1.easeInOut}));
              LastCallTimeline.add(TweenLite.to("#leftBlockLastCall", 1, {marginLeft: "-200px",ease:Power1.easeInOut }), "-=0.5" );
              
            /*  LastCallTimeline.add(TweenLite.to("#BlueBottle", 1, {x: -200,ease:Power1.easeInOut }), "-=0.99" );
              LastCallTimeline.add(TweenLite.to("#RedBottle", 1.05, {x: -200,ease:Power1.easeInOut }), "-=0.98" );
*/
              LastCallTimeline.add(TweenLite.to("#headlineBlackBlock", 0.7, {opacity: 0.3,ease:Power1.easeInOut }), "-=0.7" );
              LastCallTimeline.add(TweenLite.to("#headlineBlackBlockRight", 0.7, {opacity: 0.3,ease:Power1.easeInOut }), "-=0.7" );



              LastCallTimeline.add(TweenLite.to("#pandaHeadTip", 1, {bottom:'-60px', ease:Back.easeInOut }),"-=0.4" ); 


              var LastCallScene = new ScrollMagic.Scene({
                  triggerElement: "#lastCallTrigger",    triggerHook: 'onEnter',
                })
                .setTween(LastCallTimeline)
                .addTo(controller);



           }


           function constructWorkNavigaton()
           {


              $("#WorkCrewCreative").on("mouseenter", WorkCrewOver);
              $("#WorkCrewCreative").on("mouseleave", WorkCrewOut);

              function WorkCrewOver(){
                  TweenLite.to("#WorkCrewCreativeHead", 2, {x: 70,ease:Power1.easeInOut });
                  TweenLite.to("#WorkCrewCreative", 0.6, {marginBottom: '-20px',ease:Back.easeInOut })

              }

              function WorkCrewOut(){
                  TweenLite.to("#WorkCrewCreativeHead", 0.3, {x: 0,ease:Back.easeInOut });
                  TweenLite.to("#WorkCrewCreative", 0.3, {marginBottom: '0px',ease:Back.easeInOut })
              }





              var WorkCreativeCrewTimeline = new TimelineLite();



              WorkCreativeCrewTimeline.add(TweenLite.to("#WorkCrewCreative", 1.6, {y: -520,ease:Back.easeInOut }));
              WorkCreativeCrewTimeline.add(TweenLite.to("#WorkCrewCreativeHead", 1.67, {y: -421,ease:Back.easeInOut }),'-=1.57');


             
              var WorkCreativeCrewScene = new ScrollMagic.Scene({
                  triggerElement: "#WorkCrewTrigger",   triggerHook: 'onEnter', offset: 680
                })
                .setTween(WorkCreativeCrewTimeline)
                .addTo(controller);   

              var WorkStartTimeline = new TimelineLite();
              WorkStartTimeline.add(TweenLite.to("#WorkColInner", 0.5, {marginLeft:'-25px', ease:Power1.easeOut }));
              WorkStartTimeline.add(TweenLite.to("#WorkColInner", 0.5, {marginLeft:'0px', ease:Power1.easeInOut }));
              WorkStartTimeline.add(TweenLite.to("#WorkColRuka", 0.5, {marginTop:'10px', ease:Power1.easeInOut }),"-=0.3");
              WorkStartTimeline.add(TweenLite.to("#WorkColRuka", 0.5, {marginTop:'0px', ease:Power1.easeInOut }));


              var WorkStartScene = new ScrollMagic.Scene({
                  triggerElement: "#WorkStartTrigger", triggerHook: 'onLeave'
                })
                .setTween(WorkStartTimeline)
                .addTo(controller);    

 


              $(".workCont").on("mouseenter", WorkOver);
              $(".workCont").on("mouseleave", WorkOut);

              $(".workCont").on("mousedown tap", WorkClick);              

              function WorkClick(event){
                  var whatWork =  $(this).attr("id");
                  

                  window.dataLayer = window.dataLayer || [];
                   window.dataLayer.push({
                   'event': 'WorkClicked',
                   'WhatWorkClicked' : whatWork
                   });
              }

              function WorkOver(event){
                  TweenLite.to($(this).find(".innerRedCont"), 0.25, {opacity:"0.8",  height:"100%", ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".iconRow"), 0.25, {opacity:"1",  ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".viewProject"), 0.25, {opacity:"1",  ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".workThumbTekst"), 0.25, {opacity:"1",  ease: Power1.easeInOut});

         

              }

              function WorkOut(event){
                  TweenLite.to($(this).find(".innerRedCont"), 0.3, {  height:"0%", ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".iconRow"), 0.3, {opacity:"0", ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".viewProject"), 0.3, {opacity:"0",  ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".workThumbTekst"), 0.25, {opacity:"0.5",  ease: Power1.easeInOut});
              }
           }

           function constructHomeScroller(){ 




              $(".scrollTolink").on("mousedown tap", scrollToContent);

              function scrollToContent(event)
              {
              
                if(event.target.id == 'scrollToBMW') TweenLite.to(window, 1, {scrollTo:{y:"#BMWCaseStart"},ease:Power1.easeOut});
                if(event.target.id == 'scrollToTcom') TweenLite.to(window, 1.5, {scrollTo:{y:"#TcomCaseStart"},ease:Power1.easeOut});
                if(event.target.id == 'scrollToBanner') TweenLite.to(window, 2, {scrollTo:{y:"#BannerCaseStart"},ease:Power1.easeOut});
              }




            
              var BMWIntro  = new TimelineLite();
         //     BMWIntro.add( TweenLite.from("#case1", 0.6, {scale: "0",opacity:0,ease:Back.easeOut }) );
          /*    BMWIntro.add( TweenLite.from("#bmw_naslov0", 0.3, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }) );
              BMWIntro.add( TweenLite.from("#bmw_naslov1", 0.6, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }),"-=0.2" );
              BMWIntro.add( TweenLite.from("#bmw_naslov2", 0.6, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }),"-=0.5" );
              BMWIntro.add( TweenLite.from("#BMWSecondRow", 0.6, {marginTop: "0",opacity:0,ease:Power1.easeOut }),"-=0.5" );*/



              var BMWScene = new ScrollMagic.Scene({
                  triggerElement: "#trigger3",  triggerHook: 'onEnter',
                })
                .setTween(BMWIntro)
   //            .addIndicators({name: "BMNW (duration: 0)"})
                .addTo(controller);
//                .on('enter', function(e){ checkIframeLoaded(); });

           

              var BajkaIntro  = new TimelineLite();
           //  BajkaIntro.add( TweenLite.from("#case2", 0.6, {delay:0.3,scale: "0",opacity:0,ease:Back.easeOut }) );
          /*    BajkaIntro.add( TweenLite.from("#bajka_naslov0", 0.3, { marginLeft: "-300px",opacity:0,ease:Power1.easeOut }) );
              BajkaIntro.add( TweenLite.from("#bajka_naslov1", 0.6, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }),"-=0.2" );
              BajkaIntro.add( TweenLite.from("#bajka_naslov2", 0.6, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }),"-=0.5" );*/



               var BajkaScene = new ScrollMagic.Scene({
                  triggerElement: "#BajkaNaslovTrigger",  triggerHook: 'onEnter',
                })
                .setTween(BajkaIntro) 
     //           .addIndicators({name: "bajka (duration: 0)"})             
                .addTo(controller);                



              var BannerIntro  = new TimelineLite();
              BannerIntro.add( TweenLite.from("#case3", 0.6, {scale: "0",opacity:0,ease:Back.easeOut }) );
              BannerIntro.add( TweenLite.from("#banner_naslov0", 0.3, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }) );
              BannerIntro.add( TweenLite.from("#banner_naslov1", 0.6, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }),"-=0.2" );
              BannerIntro.add( TweenLite.from("#banner_naslov2", 0.6, {marginLeft: "-300px",opacity:0,ease:Power1.easeOut }),"-=0.5" );

              var BannerScene = new ScrollMagic.Scene({
                  triggerElement: "#BannerTrigger"
                })
                .setTween(BannerIntro) 
     //           .addIndicators({name: "banner (duration: 0)"})             
                .addTo(controller);  



              var RecentCaseTimeline = new TimelineLite();

               RecentCaseTimeline.add(TweenLite.to('#RecentCasesBlackCont', 1, {rotation:'-4',scale:1.2,  ease:Back.easeInOut }) );
               
               RecentCaseTimeline.add(  TweenLite.to('#RecentCasesBlackCont', 1.3, {delay:0.5,rotation:'4',scale:1.1,  ease:Back.easeInOut}) );
               RecentCaseTimeline.add(  TweenLite.to('#RecentCasesBlackCont', 1.3, {delay:0.5,rotation:'-4',scale:1,  ease:Back.easeInOut}) );


              var RecentCaseScene = new ScrollMagic.Scene({
                  triggerElement: "#recentCase", 
                })
                .setTween(RecentCaseTimeline) // trigger a TweenMax.to tween
                
             //  .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);

          


              var BMWVideoTimeline = new TimelineLite();

               BMWVideoTimeline.add(TweenLite.to("#BMWLarge", 0.6, {height:'420px' ,ease:Power1.easeInOut }));
               BMWVideoTimeline.add(TweenLite.to("#redOverlay01", 0.5, {delay:0.15,width:'0%' ,ease:Power2.easeInOut }), '-=0.57');
               
              //var BMWVideoTween = new ;

              var BMWImageScene = new ScrollMagic.Scene({
                  triggerElement: "#trigger2",  triggerHook: 'onEnter' ,offset:300
                })
                .setTween(BMWVideoTimeline)
             //   .addIndicators({name: "BMNW VIDEO (duration: 1000)"})
                .addTo(controller);


               var BajkaVideoTimeline = new TimelineLite();

               BajkaVideoTimeline.add(TweenLite.to("#BajkaLarge", 0.6, {delay:0.2,height:'420px' ,ease:Power1.easeInOut }));
               BajkaVideoTimeline.add(TweenLite.to("#redOverlay02", 0.5, {delay:0.15,width:'0%' ,ease:Power2.easeInOut }), '-=0.6');

      

              var BajkaVidScene = new ScrollMagic.Scene({
                  triggerElement: "#BajkaTrigger", triggerHook: 'onEnter',offset:300
                })
                .setTween(BajkaVideoTimeline)
                //.addIndicators({name: "bajka VIDEO (duration: 1000)"})
                .addTo(controller);


               
              var BannerVideoTween = new TweenLite.from("#BannerLarge", 1, {backgroundPosition: "bottom center", ease:Linear.easeNone });

                    var BannerVidScene = new ScrollMagic.Scene({
                        triggerElement: "#BannerTrigger", duration:750,triggerHook: 'onEnter',
                      })
                      .setTween(BannerVideoTween)
                      //.addIndicators({name: "bajka VIDEO (duration: 1000)"})
                      .addTo(controller);


              $(".caseContFrontpage").on("mouseenter", WorkOver);
              $(".caseContFrontpage").on("mouseleave", WorkOut);

              function WorkOver(event){
                  TweenLite.set($(this).find(".iconRow"),{y:-30});
                  TweenLite.set($(this).find(".viewProject"),{y:30});
                  TweenLite.to($(this).find(".innerRedContBig"), 0.25, {opacity:"0.4",  height:"100%", ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".iconRow"), 0.4, {y:10,opacity:"1",  ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".viewProject"), 0.35, {y:0,opacity:"1",  ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".workThumbTekst"), 0.25, {opacity:"1",  ease: Power1.easeInOut});

         

              }

              function WorkOut(event){
                  TweenLite.to($(this).find(".innerRedContBig"), 0.3, {  height:"0%", ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".iconRow"), 0.4, {y:-30,opacity:"0", ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".viewProject"), 0.35, {y:30,opacity:"0",  ease: Power1.easeInOut});
                  TweenLite.to($(this).find(".workThumbTekst"), 0.25, {opacity:"0.5",  ease: Power1.easeInOut});
              }         


 }  