
// JavaScript Document




//----------Movimiento fotos----------------


function slideShow() { 

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    
    }
    
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
    
    
    function responsiveTopnav() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    
    function cajaModal() {
    
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        stopVideo(modal);
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            stopVideo(modal);
        }
    }
    
    function stopVideo(modal) {
      var currentIframe = modal.querySelector(".modal-content > iframe");
      currentIframe.src = currentIframe.src;
    }
    
    }

    // BLACK PANTHER

    function cajaModal2() {
    
        // Get the modal
        var modal = document.getElementById('myModal2');
        
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn2");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close2")[0];
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            stopVideo(modal);
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                stopVideo(modal);
            }
        }
        
        function stopVideo(modal) {
          var currentIframe = modal.querySelector(".modal-content > iframe");
          currentIframe.src = currentIframe.src;
        }
        
        }
        function cajaModal3() {
    
            // Get the modal
            var modal = document.getElementById('myModal3');
            
            // Get the button that opens the modal
            var btn = document.getElementById("myBtn3");
            
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close3")[0];
            
            // When the user clicks the button, open the modal 
            btn.onclick = function() {
                modal.style.display = "block";
            
            }
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
                stopVideo(modal);
            }
            
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    stopVideo(modal);
                }
            }
            
            function stopVideo(modal) {
              var currentIframe = modal.querySelector(".modal-content > iframe");
              currentIframe.src = currentIframe.src;
            }
            
            }
            function cajaModal4() {
    
                // Get the modal
                var modal = document.getElementById('myModal4');
                
                // Get the button that opens the modal
                var btn = document.getElementById("myBtn4");
                
                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close4")[0];
                
                // When the user clicks the button, open the modal 
                btn.onclick = function() {
                    modal.style.display = "block";
                
                }
                
                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                    stopVideo(modal);
                }
                
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        stopVideo(modal);
                    }
                }
                
                function stopVideo(modal) {
                  var currentIframe = modal.querySelector(".modal-content > iframe");
                  currentIframe.src = currentIframe.src;
                }
                
                }
                function cajaModal5() {
    
                    // Get the modal
                    var modal = document.getElementById('myModal5');
                    
                    // Get the button that opens the modal
                    var btn = document.getElementById("myBtn5");
                    
                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close5")[0];
                    
                    // When the user clicks the button, open the modal 
                    btn.onclick = function() {
                        modal.style.display = "block";
                    
                    }
                    
                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function() {
                        modal.style.display = "none";
                        stopVideo(modal);
                    }
                    
                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                            stopVideo(modal);
                        }
                    }
                    
                    function stopVideo(modal) {
                      var currentIframe = modal.querySelector(".modal-content > iframe");
                      currentIframe.src = currentIframe.src;
                    }
                    
                    }
                    function cajaModal6() {
    
                        // Get the modal
                        var modal = document.getElementById('myModal6');
                        
                        // Get the button that opens the modal
                        var btn = document.getElementById("myBtn6");
                        
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close6")[0];
                        
                        // When the user clicks the button, open the modal 
                        btn.onclick = function() {
                            modal.style.display = "block";
                        
                        }
                        
                        // When the user clicks on <span> (x), close the modal
                        span.onclick = function() {
                            modal.style.display = "none";
                            stopVideo(modal);
                        }
                        
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                                stopVideo(modal);
                            }
                        }
                        
                        function stopVideo(modal) {
                          var currentIframe = modal.querySelector(".modal-content > iframe");
                          currentIframe.src = currentIframe.src;
                        }
                        
                        }
                        function cajaModal7() {
    
                            // Get the modal
                            var modal = document.getElementById('myModal7');
                            
                            // Get the button that opens the modal
                            var btn = document.getElementById("myBtn7");
                            
                            // Get the <span> element that closes the modal
                            var span = document.getElementsByClassName("close7")[0];
                            
                            // When the user clicks the button, open the modal 
                            btn.onclick = function() {
                                modal.style.display = "block";
                            
                            }
                            
                            // When the user clicks on <span> (x), close the modal
                            span.onclick = function() {
                                modal.style.display = "none";
                                stopVideo(modal);
                            }
                            
                            // When the user clicks anywhere outside of the modal, close it
                            window.onclick = function(event) {
                                if (event.target == modal) {
                                    modal.style.display = "none";
                                    stopVideo(modal);
                                }
                            }
                            
                            function stopVideo(modal) {
                              var currentIframe = modal.querySelector(".modal-content > iframe");
                              currentIframe.src = currentIframe.src;
                            }
                            
                            }
                            function cajaModal8() {
    
                                // Get the modal
                                var modal = document.getElementById('myModal8');
                                
                                // Get the button that opens the modal
                                var btn = document.getElementById("myBtn8");
                                
                                // Get the <span> element that closes the modal
                                var span = document.getElementsByClassName("close8")[0];
                                
                                // When the user clicks the button, open the modal 
                                btn.onclick = function() {
                                    modal.style.display = "block";
                                
                                }
                                
                                // When the user clicks on <span> (x), close the modal
                                span.onclick = function() {
                                    modal.style.display = "none";
                                    stopVideo(modal);
                                }
                                
                                // When the user clicks anywhere outside of the modal, close it
                                window.onclick = function(event) {
                                    if (event.target == modal) {
                                        modal.style.display = "none";
                                        stopVideo(modal);
                                    }
                                }
                                
                                function stopVideo(modal) {
                                  var currentIframe = modal.querySelector(".modal-content > iframe");
                                  currentIframe.src = currentIframe.src;
                                }
                                
                                }