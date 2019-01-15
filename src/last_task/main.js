(function() {
  var filterValue = document.querySelector('.filter__input');
  var pagerPage = document.querySelectorAll('.pager__page');
  var tableElements = document.querySelectorAll('.country');
  var rowsValue = document.querySelector('.show__input');
  var show = document.querySelector('.show-number');
  var to = document.querySelector('.to-number');
  var of = document.querySelector('.of-number');
  var page = 0;
  var arrOfVisibleElements = [];  
  var all = document.querySelectorAll('.position');

  all.forEach = [].forEach;
  all.forEach(function(item, i) {    
    item.innerHTML = i + 1;
  });

  of.innerHTML = tableElements.length;

  filterValue.addEventListener('keyup', filter);
  filterValue.addEventListener('keyup', doArrOfVisibleElements);
  filterValue.addEventListener('keyup', function() {
    showCurrentArrOfRows(arrOfVisibleElements, 0);
  });

  rowsValue.addEventListener('input', doArrOfVisibleElements);
  rowsValue.addEventListener('input', function() {
    showCurrentArrOfRows(arrOfVisibleElements, 0);
    var pagerPageAll = document.querySelectorAll('.pager__page--current');

    for (var i = 0; i < pagerPage.length; i++) {
      if (pagerPageAll[i]) {
        pagerPageAll[i].classList.remove('pager__page--current');
      }
    }
    pagerPage[0].classList.add('pager__page--current');    
  });
  rowsValue.addEventListener('input', makeAvailableNextPrevButtons);

  var controls = document.querySelector('.pager__controls');
  controls.addEventListener('click', function() {
    event.preventDefault();
  });

  controls.addEventListener('click', makeAvailableNextPrevButtons
  );

  doArrOfVisibleElements();
  showCurrentArrOfRows(arrOfVisibleElements, 0);

  function arrIndexListStart() {
    var arr = [];

    for (var i = 0; i < tableElements.length; i++) {
      if (!tableElements[i].parentNode.hidden) {
        arr.push(i);
      }
    }

    return arr;
  }

  function filter() {
    var filterValue = document.querySelector('.filter__input');
    var visibleTableElementsArrIndex = [];

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

  function doArrOfVisibleElements() {
    page = 0;
    var counter = 0;
    var pagerPageAll = document.querySelectorAll('.pager__page--current');
    arrOfVisibleElements = [];
    visibleTableElementsArrIndex = arrIndexListStart();

    for (var i = 0; i < visibleTableElementsArrIndex.length; i++) {
      if (i % +rowsValue.value === 0) {
        arrOfVisibleElements.push([]);
        counter++;
      }
      arrOfVisibleElements[counter - 1].push(visibleTableElementsArrIndex[i]);
    }    
  }

  function showCurrentArrOfRows(arr, x) {
    var controls = document.querySelector('.pager__controls');
    var firstDots = document.querySelector('.pager__list-item-first');
    var secondDots = document.querySelector('.pager__list-item--second');

    var calcElementsVisible = 0;
    newArr = [];

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        calcElementsVisible++;
        if (x < arr.length) {
          if (i !== x) {
            tableElements[arr[i][j]].parentNode.style.display = 'none';
          } else {
            tableElements[arr[i][j]].parentNode.style.display = '';
            newArr.push(calcElementsVisible);
          }
        }
      }
    }

    show.innerHTML = newArr[0];
    to.innerHTML = newArr[newArr.length - 1];

    var lastPage = pagerPage[pagerPage.length - 1].innerHTML = arrOfVisibleElements.length;

    if (x === 0) {
      var seconPage = (pagerPage[1].innerHTML = 2);
      var thirdCurrentPage = (pagerPage[2].innerHTML = 3);
      var fourthPage = (pagerPage[3].innerHTML = 4);
    }

    if (x > 2) {
      firstDots.style.display = '';
    } else {
      firstDots.style.display = 'none';
    }

    if (arrOfVisibleElements.length < 5) {
      pagerPage[1].style.display = 'none';
    } else {
      pagerPage[1].style.display = '';
    }

    if (arrOfVisibleElements.length < 4) {
      pagerPage[3].style.display = 'none';
    } else {
      pagerPage[3].style.display = '';
    }

    if (arrOfVisibleElements.length < 3) {
      pagerPage[2].style.display = 'none';
    } else {
      pagerPage[2].style.display = '';
    }

    if (arrOfVisibleElements.length < 2) {
      controls.style.display = 'none';
    } else {
      controls.style.display = '';
    }

    if (x < arrOfVisibleElements.length - 3) {
      secondDots.style.display = '';
    } else {
      secondDots.style.display = 'none';
    }

    if (arrOfVisibleElements.length < 6) {
      firstDots.style.display = 'none';
      secondDots.style.display = 'none';
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
    changeCurrentPageNumber();
  }

  function changeCurrentPageNumber() {
    var pagerPageAll = document.querySelectorAll('.pager__page--current');

    for (var i = 0; i < pagerPageAll.length; i++) {
      if (pagerPageAll[i]) {
        pagerPageAll[i].classList.remove('pager__page--current');
      }
    }

    for (var i = 0; i < pagerPage.length; i++) {
      if (pagerPageAll[i]) {
        pagerPageAll[i].classList.remove('pager__page--current');
      }

      if (+pagerPage[i].innerHTML === page + 1) {
        pagerPage[i].classList.add('pager__page--current');
      }
    }
  }

  function makeAvailableNextPrevButtons() {
    var prev = document.querySelector('.pager__prev');
    var next = document.querySelector('.pager__next');
    var evTarget = event.target;

    if (evTarget === prev && page > 0) {
      showCurrentArrOfRows(arrOfVisibleElements, --page);
    } else if (evTarget === next) {
      if (page + 1 < arrOfVisibleElements.length) {
        showCurrentArrOfRows(arrOfVisibleElements, ++page);
      }
    } else if (
      evTarget.tagName === 'A' && !(evTarget === prev && !(evTarget === next))) {
      page = +evTarget.innerHTML - 1;
      showCurrentArrOfRows(arrOfVisibleElements, page);
    }
  
    if (page + 1 === arrOfVisibleElements.length) {
      next.classList.remove('pager__next--available');
    } else {
      next.classList.add('pager__next--available');
    }

    if (page === 0) {
      prev.classList.remove('pager__prev--available');
    } else {
      prev.classList.add('pager__prev--available');
    }
  }
})();