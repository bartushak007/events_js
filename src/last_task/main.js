var filterValue = document.querySelector('.filter__input');
var rowsValue = document.querySelector('.show__input');
var tableElements = document.querySelectorAll('.country');
var rowsValue = document.querySelector('.show__input');
var show = document.querySelector('.show-number');
  var to = document.querySelector('.to-number');
  var of = document.querySelector('.of-number');
var page = 0;
var arrOfVisibleElements = [];
x();
doArrOfVisibleElements();

function arrIndexListStart() {
  var arr = [];

  for (var i = 0; i < tableElements.length; i++) {
    if (!tableElements[i].parentNode.hidden) {
      arr.push(i);
    }
  }

  return arr;
}

filterValue.addEventListener('keyup', filter);
filterValue.addEventListener('keyup', doArrOfVisibleElements);
filterValue.addEventListener('keyup', function() {
  showCurrentArrOfRows(arrOfVisibleElements, 0);
});

function filter() {
  var filterValue = document.querySelector('.filter__input');
  visibleTableElementsArrIndex = [];

  if (filterValue.tagName === 'INPUT') {
    tableElements.forEach = [].forEach;
    tableElements.forEach(function(item, i) {
      var regExp = new RegExp('^(' + filterValue.value + ')', 'i');

      if (item.innerHTML.search(regExp) == -1) {
        item.parentNode.hidden = true;
      } else {
        item.parentNode.hidden = false;
        visibleTableElementsArrIndex.push(i);
      }
    });
  }
}

rowsValue.addEventListener('click', doArrOfVisibleElements);
rowsValue.addEventListener('click', function() {
  showCurrentArrOfRows(arrOfVisibleElements, 0);
});
rowsValue.addEventListener('keyup', doArrOfVisibleElements);
rowsValue.addEventListener('keyup', function() {
  showCurrentArrOfRows(arrOfVisibleElements, 0);
});

function doArrOfVisibleElements() {  
  var counter = 0;
  arrOfVisibleElements = [];
  visibleTableElementsArrIndex = arrIndexListStart();

  for (var i = 0; i < visibleTableElementsArrIndex.length; i++) {
    if (i % +rowsValue.value === 0) {
      arrOfVisibleElements.push([]);
      counter++;
    }
    arrOfVisibleElements[counter - 1].push(visibleTableElementsArrIndex[i]);
  }
  console.log('counter' + counter);
}

function showCurrentArrOfRows(arr, x) {
  
  show.innerHTML = 1;
  to.innerHTML = rowsValue.value;
  

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (i !== x) {
        tableElements[arr[i][j]].parentNode.style.display = 'none';
      } else {
        tableElements[arr[i][j]].parentNode.style.display = '';
      }
    }
  }
  var pagerPage = document.querySelectorAll('.pager__page');
  var lastPage = (pagerPage[pagerPage.length - 1].innerHTML =
    arrOfVisibleElements.length);

  if (x === 0) {
    var seconPage = (pagerPage[1].innerHTML = 2);
    var thirdCurrentPage = (pagerPage[2].innerHTML = 3);
    var fourthPage = (pagerPage[3].innerHTML = 4);
  }

  if (x === arr.length - 1) {
    seconPage = pagerPage[1].innerHTML = arr.length - 3;
    thirdCurrentPage = pagerPage[2].innerHTML = arr.length - 2;
    fourthPage = pagerPage[3].innerHTML = arr.length - 1;
  }

  if (x > 1 && x < arr.length - 2) {
    seconPage = pagerPage[1].innerHTML = x;
    thirdCurrentPage = pagerPage[2].innerHTML = x + 1;
    fourthPage = pagerPage[3].innerHTML = x + 2;
  }

  if (arr.length <= 4) {
    seconPage = pagerPage[1].innerHTML = 1;
    thirdCurrentPage = pagerPage[2].innerHTML = 2;
    fourthPage = pagerPage[3].innerHTML = 3;
  }

  if (arr.length <= 3) {
    seconPage = pagerPage[1].innerHTML = 2;
    thirdCurrentPage = pagerPage[2].innerHTML = 2;
    fourthPage = pagerPage[3].innerHTML = 2;
  }

  if (arr.length <= 2) {
    seconPage = pagerPage[1].innerHTML = 1;
    thirdCurrentPage = pagerPage[2].innerHTML = 1;
    fourthPage = pagerPage[3].innerHTML = 1;
  }

}

var controls = document.querySelector('.pager__controls');
controls.addEventListener('click', function() {
  event.preventDefault();
});

controls.addEventListener('click', function() {
  var prev = document.querySelector('.pager__prev');
  var next = document.querySelector('.pager__next');  
  var pagerPage = document.querySelectorAll('.pager__page');

  if (event.target == prev && page > 0) {
    showCurrentArrOfRows(arrOfVisibleElements, --page);
  } else if (event.target == next && page < arrOfVisibleElements.length) {
    showCurrentArrOfRows(arrOfVisibleElements, ++page);
  } else if (
    event.target.tagName === 'A' &&
    !(event.target === prev && !(event.target === next))
  ) {
    page = +event.target.innerHTML - 1;

    showCurrentArrOfRows(arrOfVisibleElements, page);
  }

  // console.log(page);
  // controls.addEventListener('click', x);
});

controls.addEventListener('click', x);
showCurrentArrOfRows(arrOfVisibleElements, 0);

function x() {
  var pagerPage = document.querySelectorAll('.pager__page');
  var count = 0;
  for (var i = 0; i < pagerPage.length; i++) {
    for (var j = 0; j < pagerPage.length; j++) {
      // if (!(document.querySelector('.pager__page--current') != null)) {
      //   // pagerPage[page].classList.remove('pager__page--current');
      // } else console.log(document.querySelector('.pager__page--current'));
      count++;
      // if (pagerPage[count].classList.contains('pager__page--current')) {
      //   console.log('good')
      //   pagerPage[count].classList.remove('pager__page--current');
      // }
    }

    if (+pagerPage[i].innerHTML === page + 1) {
      pagerPage[i].classList.add('pager__page--current');      
    }
  }
  
  show.innerHTML = (page*10+1);
  to.innerHTML = (page*10) + +rowsValue.value;
  of.innerHTML = tableElements.length;
}