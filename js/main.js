document.addEventListener("DOMContentLoaded", function(event) { 

   var textCar = document.querySelector('.text-carousel');
   var flkty = new Flickity( textCar, {
   // options
   cellAlign: 'left',
   contain: true,
   wrapAround: true,
   adaptiveHeight: true,
   pageDots: false,
   hash: true,
   prevNextButtons: false,
   selectedAttraction: 0.2,
   friction: 0.8
   });

   var quoCar = document.querySelector('.quotes-carousel');
   var flkty = new Flickity( quoCar, {
   // options
   cellAlign: 'left',
   contain: true,
   wrapAround: true,
   //   adaptiveHeight: true,
   pageDots: false,
   arrowShape: 'M14 50L86 99L86 0.999997L14 50Z',
   selectedAttraction: 0.2,
   friction: 0.8
   });

   var photosCar = document.querySelector('.photos-carousel');
   var flkty = new Flickity( photosCar, {
   // options
   cellAlign: 'left',
   contain: true,
   wrapAround: true,
   imagesLoaded: true,
   pageDots: false,
   arrowShape: 'M14 50L86 99L86 0.999997L14 50Z',
   adaptiveHeight: true,
   selectedAttraction: 0.2,
   friction: 0.8
   });

   ///
   ///
   ///
   /// NEWSLETTER
   let newsButton = document.querySelector('#newsletter-action');
   let newsForm = document.querySelector('#mc_embed_signup');

   newsButton.addEventListener('click', () => {
      newsButton.classList.add('d-none');
      newsForm.classList.remove('d-none');
   })


   ///
   ///
   /// DATES

      // Set the date we're counting down to
   var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

   // Update the count down every 1 second
   var x = setInterval(function() {

   // Get today's date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with id="demo"
   let countdownEls = document.querySelectorAll(".countdown");

   countdownEls.forEach(el => {
      el.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      if (distance < 0) {
         clearInterval(x);
         el.innerHTML = "EXPIRED";
      }
      }, 1000);
   });

   
   ///
   ///
   /// Video Fade
   const main = document.querySelector("main")
   const section = document.querySelector(".main-container")

   const pos = function () {
   const pixels = window.pageYOffset
  
   const maxScroll = window.innerHeight
  
   section.style.position = "fixed"
   section.style.top = Math.min(maxScroll - pixels, 0) + "px"
   section.style.zIndex = "0"
  
   main.style.height = (section.offsetHeight) + "px"
}

pos()

window.addEventListener("scroll", function () {
  pos()
})


   ///
   ///
   ///
   /// Close CTA

   let closeButton = document.querySelector('#the-other-cta .close')

   closeButton.addEventListener('click', () => {
      let cta = document.querySelector('#the-other-cta');
      cta.classList.toggle('mini');

      if (cta.classList.contains('mini')) {
         closeButton.innerHTML = '+'
      } else {
         closeButton.innerHTML = 'x'
      }
   })





   
 });



