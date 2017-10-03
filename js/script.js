var table = {
  headers: {
    method:  '<td>METHOD</td>',
    ratio:   '<td>RATIO</td>',
    savings: '<td>SAVINGS</td>'
  },
  compression: {
    method:  '<td>Data Reduction</td>',
    ratio:   '<td>1.5 : 1</td>',
    savings: '<td>80.20 GB</td>',
    class:   '.compress'
  },
  dedup: {
    method:  '<td>Cloning</td>',
    ratio:   '<td>1.9 : 1</td>',
    savings: '<td>80.00 GB</td>',
    class:   '.dedup'
  },
  erasure: {
    method:  '<td>Thin Provisioning</td>',
    ratio:   '<td>1.2 : 1</td>',
    savings: '<td>170.10 GB</td>',
    class:   '.erasure'
  }
}

const pop = function(){
  $('.popup-background').toggle();
};

function initPop(){
  $('.popup-background').toggle();
};


function newTableRow(){
  for(var i=0; i<Object.keys(table).length; i++){
    const objKey = Object.keys(table)[i];
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
  for(let i=1; i<Object.keys(table).length; i++){
    let objKey = Object.keys(table)[i];

    $("tr:eq("+i+")," + table[objKey].class + "").hover(function(){
       $(table[objKey].class).addClass('hover'),
       $("tr:eq("+i+")").addClass('cellHover');
     },
     function(){
       $(table[objKey].class).removeClass('hover');
       $("tr:eq("+i+")").removeClass('cellHover');
      }
    );
  }
}
$('.close, .popup-header span').click(pop);
$('.terciary').click(pop);

$('.total').hover(rataIn, rataOut);

function rataIn(){
  $('.compress, .dedup, .erasure').addClass('hover');

  $('.total').addClass('cellHover');
}

function rataOut(){
    $('.compress, .dedup, .erasure').removeClass('hover');
    $('.total').removeClass('cellHover');
}

initPop();
newTableRow();
cellHighlight();
