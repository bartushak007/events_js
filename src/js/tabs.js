(function() {
  document.querySelector('.tabs').addEventListener('click', function(event) {
    var blockCollection = document.getElementsByClassName('tabs__block');
    var current;
    if (event.target.tagName === 'LI') {
      var list = document.querySelectorAll('.tabs__list-elem');
      for (var i = 0; i < list.length; i++) {
        blockCollection[i].style.display = 'none';
        list[i].classList.remove('tabs__list-elem--addline');

        if (event.target == list[i]) {
          current = i;
        }
      }
      blockCollection[current].style.display = 'block';
      list[current].classList.add('tabs__list-elem--addline');
    }
  });
  var list = document.querySelectorAll('.tabs__list-elem');
  var blockCollection = document.getElementsByClassName('tabs__block');
  for (var i = 0; i < list.length; i++) {
    blockCollection[i].style.display = 'none';
  }
  blockCollection[0].style.display = 'block';
  list[0].classList.add('tabs__list-elem--addline');
})();