$(document).ready(function() {
        if ($('.mindmap').length > 0){
          var markdownText = $('.mindmap').text().trim();
          $('.mindmap').text('')
          var minder = window.km = new kityminder.Minder({
              renderTo: '.mindmap'
          });
          minder.useTemplate('right');

          minder.importData('text', markdownText);
          minder.execCommand('Zoom', 90);

          minder.disable();
          minder.execCommand('hand');
          minder.execCommand('ExpandToLevel', 2);
          setTimeout(function() {
                  minder.useTemplate('right');
                  minder._viewDragger.move(new kity.Point(-minder._lastClientSize.width / 2.2, 0), 200);
                  minder.execCommand('ExpandToLevel', 2);
              },
              1000
          )
        }
    }
)
