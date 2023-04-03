var currentPosition = 0;
var totalSlides = document.querySelectorAll('.item1box').length;

document.querySelector('.rightarrow').addEventListener('click', function() {
  if (currentPosition < totalSlides - 1) {
    currentPosition++;
    document.querySelector('.entradasmenucontainer').style.transform = 'translateX(-' + currentPosition * 100 + '%)';
  }
});

document.querySelector('.leftarrow').addEventListener('click', function() {
  if (currentPosition > 0) {
    currentPosition--;
    document.querySelector('.entradasmenucontainer').style.transform = 'translateX(-' + currentPosition * 100 + '%)';
  }
});