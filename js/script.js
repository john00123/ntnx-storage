var table = {
  headers: {
    method:  '<td>METHOD</td>',
    ratio:   '<td>RATIO</td>',
    savings: '<td>SAVINGS</td>'
  },
  compression: {
    method:  '<td>Compression</td>',
    ratio:   '<td>1.5 : 1</td>',
    savings: '<td>202.03 TB</td>',
    class:   '.compress'
  },
  dedup: {
    method:  '<td>Deduplication</td>',
    ratio:   '<td>1.9 : 1</td>',
    savings: '<td>504.60 GB</td>',
    class:   '.dedup'
  },
  erasure: {
    method:  '<td>Erasure Coding</td>',
    ratio:   '<td>1.2 : 1</td>',
    savings: '<td>903.73 GB</td>',
    class:   '.erasure'
  }
}
const pop = function(){
  $('.popup-background').toggle();
};

$(document).ready(pop);

function newTableRow(){
  for( var i=0; i<Object.keys(table).length; i++){
    var objKey = Object.keys(table)[i];
    $('.values').append(
      `<tr>
           ${table[objKey].method}
           ${table[objKey].ratio}
           ${table[objKey].savings}
      </tr>`
    );
  }
}

function cellHighlight(){
  for(i=1; i<Object.keys(table).length; i++){
    var objKey = Object.keys(table)[i];
    $("tr:eq("+i+")").hover(function(){
       $(table[objKey].class).addClass('hover');
     },
     function(){
       $(table[objKey].class).removeClass('hover');
      }
    );
  }
}
$('.close, .popup-header span').click(pop);
$('.secondary').click(pop);

newTableRow();
cellHighlight();
