;(function() {
  document.querySelector('.open-menu').addEventListener('click', function() {
    if (parseInt(document.querySelector('.fixed-menu').style.left) !== 0) {
      document.querySelector('.fixed-menu').style.left = '0%';
    } else {
      document.querySelector('.fixed-menu').style.left = '-100%';
    }
  });
})();

(function() {
  document.querySelector('.pop-up-btn').addEventListener('click', function(event) {
      document.querySelector('.pop-up').classList.remove('pop-up--hidden');
    });

  document.querySelector('.pop-up').addEventListener('click', function(event) {
    if (
      event.target.className === 'pop-up' || event.target.className === 'pop-up__close-btn') {
      document.querySelector('.pop-up').classList += ' pop-up--hidden';
    }
  });
})();