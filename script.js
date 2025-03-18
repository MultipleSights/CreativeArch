document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');
    const hiddenDivs = document.getElementById('overlay');
  
    video.addEventListener('ended', function () {
      // Show the hidden divs when the video ends
      hiddenDivs.style.display = 'block';
    });
  });