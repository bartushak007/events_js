(function() {
  function verticalScroll(navigation) {
    document.getElementById(navigation).addEventListener('click', function(event) {      
      event.preventDefault();
    });

    function doScroll(anchor) {
      var anchorHref = '' + anchor.href,
        newAnchor = '';

      for (var i = 0; i < anchorHref.length; i++) {
        if (anchorHref[i] === '#') {
          newAnchor = anchorHref.slice(i + 1);
        }
      }

      var newAnchor = document.getElementById(newAnchor);
      newAnchor = newAnchor.getBoundingClientRect().top;

      function scrollInterval() {
        var i = 0;
        var splitAnchor = newAnchor / 100;     
        splitAnchor = (splitAnchor / 10) * 9.87;

        var timer = setInterval(function() {
          if (i === 100) clearInterval(timer);
          i++;
          window.scrollBy(0, splitAnchor);
        }, 5);
      }
      scrollInterval();
    }

    var makeScroll = document.getElementById(navigation);

    makeScroll.onclick = function(event) {
      if (event.target.tagName === 'A') {
        doScroll(event.target);
      }
    };
  }
  verticalScroll('navigation');
  verticalScroll('navigationOne');
})();