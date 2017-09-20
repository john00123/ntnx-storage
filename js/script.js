var steps = {
  header : `<div class="popup-header">
            <h3 class='header title'> License Management </h3> <span></span>
            </div>`,
  subheader : {
    one :   '1. Cluster info',
    two :   '2. License',
    three : '3. Add-on & Review',
    html:   `<div class="popup-subheader"></div>`
  }
};

var licenseData = {
  thead:['NUM','TYPE','CCU PER UNIT', 'TOTAL CCU'],
  number:[3, 4, 5],
  type: ['Sockets','Hard Drive','Solid State Drive'],
  ccper:{
    starter:[2100,4000,4500],
    pro:[2700,4800,6000],
    ultimate:[3000,6000,6900]
  }
}


//popup structure
$(document).ready(function(){
  $('.input-change').toggle();
  $('.popup').prepend(steps.header);
  $('.popup-header').after(steps.subheader.html);
  $('.popup-subheader').append(
    ` <h3>${steps.subheader.one}</h3>
      <h3>${steps.subheader.two}</h3>
      <h3>${steps.subheader.three}</h3>`
    );
});


// table data
for(let i=0; i<licenseData.thead.length; i++){
  $('thead').append(`<th>${licenseData.thead[i]}</th>`);
}

function tableGen(tier){
  $('.table-body tr').remove();
  let sum = 0;
  for(let i=0; i<licenseData.number.length; i++){
    $('.table-body').append(
      `<tr>
         <td>${licenseData.number[i]}</td>
         <td>${licenseData.type[i]}</td>
         <td>${tier[i]}</td>
         <td class='total'>${tier[i]*licenseData.number[i]}</td>
      </tr>`
    );
  sum += tier[i]*licenseData.number[i];
  }

  $('.price').html(`<p>Total <span>${sum}</span></p>`);
}

function checker(){
  if ($('#license1').prop('checked')){
    let tier = licenseData.ccper.starter;
    tableGen(tier);
  }
  if ($('#license2').prop('checked')){
    let tier = licenseData.ccper.pro;
    tableGen(tier);
  }
  if ($('#license3').prop('checked')){
    let tier = licenseData.ccper.ultimate;
    tableGen(tier);
  }
};

$('.inputShow').click(function(){
  $('.input-change').toggle();
  $('td').toggleClass('opacity');
});

$('#sockets').val(licenseData.number[0]);
$('#HDD').val(licenseData.number[1]);
$('#SSD').val(licenseData.number[2]);


$('.save').click(function(){
  licenseData.number[0] = $('#sockets').val();
  licenseData.number[1] = $('#HDD').val();
  licenseData.number[2] = $('#SSD').val();
  $('.input-change').toggle();
  checker();
});





$('#license1').not(':checked').click().change(checker);
$('#license2').not(':checked').click().change(checker);
$('#license3').not(':checked').click().change(checker);

checker();
