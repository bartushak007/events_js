;(function() {
  document.querySelector('.slider').onselectstart = function() {
    return false
  };    
  var arr = document.querySelectorAll('.slider__img');
  var slide = 0;
  arr[slide].style.display = 'block';
  var nextSlide = document.querySelectorAll('.slider__side-button')[0];
  nextSlide.addEventListener('click', previous);
  nextSlide.onmousedown = function(){
    this.style.backgroundColor = '#93d691';
  }
  nextSlide.onmouseup = function(){  
  var self = this; 
  var x = function() {self.style.backgroundColor = ''};
    setTimeout(x, 180);    
  }
  var previousSlide = document.querySelectorAll('.slider__side-button')[1];
  previousSlide.addEventListener("click", next);
  previousSlide.onmousedown = function(){
    this.style.backgroundColor = '#93d691';
  }
  previousSlide.onmouseup = function(){  
  var self = this; 
  var x = function() {self.style.backgroundColor = ''};
    setTimeout(x, 180);    
  }
  document.querySelectorAll('.slider__side-button')[1].addEventListener("click", showInformation);
  

  function previous() {   
    arr[slide].style.display = 'none';
    if (slide === 0) {
      slide = arr.length - 1;
    } else {
      slide--;
    }

    return arr[slide].style.display = 'block';
  }

  function next() {
    arr[slide].style.display = 'none';
    if (slide === arr.length - 1) {
      slide = 0;
    } else {
      slide++;
    }

    return arr[slide].style.display = 'block';
  }

  function remove() {
    slide = switchTo(1);
    var a = arr.splice(slide, 1);
    console.log('element ' + slide + ' was deleted');
    if (slide > arr.length - 1) {
      slide = arr.length - 1;
    }

    return arr[slide];
  }

  function showInformation() {
    console.log('This is ' + arr[slide].src + ' with alt ' + arr[slide].alt);
  }

  function AddObj(a, b) {
    function Obj(a, b) {
      this.image = a;
      this.alt = b;
    }
    slide = switchTo(2);
    arr.splice(slide, 0, new Obj(a, b));
  }

  function switchTo(check) {
    do {
      if(check === 1) {
        slide = +prompt('Which one do you want to remove?', 0);
      } else if(check === 2) {
        slide = +prompt('Which place do you want to add a slide to?', 0);
      } else {
        slide = +prompt('Enter number of slide', 0);
      }
      
    } while (slide && (slide > arr.length - 1 || !(!isNaN(parseFloat(slide)) && isFinite(slide))))
    console.log(slide);

    return slide;
  }
  
})();