// document.addEventListener("DOMContentLoaded", function() {
//   let smallImages = document.querySelectorAll('.small-image');
//   let mainImage = document.querySelector('.main-image');
//   let currentIndex = 0;

//   function toggleImage(event) {
//     let clickedImageSrc = event.target.src;
//     let clickedImageIndex = Array.from(smallImages).findIndex(img => img.src === clickedImageSrc);
//     if (clickedImageIndex !== -1) {
//       mainImage.src = clickedImageSrc;
//       currentIndex = clickedImageIndex;
//     }
//   }

//   function cycleImages() {
//     currentIndex = (currentIndex + 1) % smallImages.length;
//     mainImage.src = smallImages[currentIndex].src;
//   }

//   smallImages.forEach(smallImage => {
//     smallImage.addEventListener('click', toggleImage);
//   });

//   setInterval(cycleImages, 20000); // Change images every 2 seconds (for demonstration purposes)
// });

