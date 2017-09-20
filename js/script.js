var steps = {
  header : `<div class="popup-header">
            <h3 class='header title'> License Management </h3> <span></span>
            </div>`,
  subheader : {
    one : '<h3>1. Cluster info</h3>',
    two : '<h3>2. Licenses</h3>',
    three : '<h3>3. Add-on & Review</h3>',
    html: `<div class="popup-subheader"></div>`
  }
};
var keys = Object.keys(steps);

const pop = function(){
  $('.popup-background').toggle();
};

$(document).ready(function(){
  $('.popup').prepend(steps.header);
  $('.popup-header').after(steps.subheader.html);
  $('.popup-subheader').append(steps.subheader.one);
  $('.popup-subheader').append(steps.subheader.two);
  $('.popup-subheader').append(steps.subheader.three);
});
