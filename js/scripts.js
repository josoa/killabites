// initialize iCheck with flat red skin

$(document).ready(function(){
  $('input').iCheck({
    radioClass: 'iradio_flat-red'
  });
});


// filter system. it's a little hacky, but I'm working toward allowing multiple selections.

$('input[name="type"]').on('ifChecked' , function() {
    var productType = '.' + $(this).attr('value');
    console.log(productType);
    $('#products > div[class!= productType]').addClass('hide');   
    $(productType).removeClass('hide');
});

$('input[name="type"]').on('ifUnchecked' , function() {
    var productType = '.' + $(this).attr('value');
    console.log(productType);
    $('#products > div[class!= productType]').removeClass('hide'); 
});

$('input[name="type"][value="all"]').on('ifChecked' , function() {
    $('#products > div').removeClass('hide'); 
});

//
//
//$('input[name="chocolate"]').on('ifChecked' , function() {
//    var productType = '.' + $(this).attr('value');
//    console.log(productType);
//    $('#products > div[class!= productType]').addClass('hide');   
//    $(productType).removeClass('hide');
//});
//
//$('input[name="chocolate"]').on('ifUnchecked' , function() {
//    var productType = '.' + $(this).attr('value');
//    console.log(productType);
//    $('#products > div[class!= productType]').removeClass('hide'); 
//});
//
//$('input[name="chocolate"][value="all"]').on('ifChecked' , function() {
//    $('#products > div').removeClass('hide'); 
//});
//
//
//
//$('input[name="dietary"]').on('ifChecked' , function() {
//    var productType = '.' + $(this).attr('value');
//    console.log(productType);
//    $('#products > div[class!= productType]').addClass('hide');   
//    $(productType).removeClass('hide');
//});
//
//$('input[name="dietary"]').on('ifUnchecked' , function() {
//    var productType = '.' + $(this).attr('value');
//    console.log(productType);
//    $('#products > div[class!= productType]').removeClass('hide'); 
//});
//
//$('input[name="dietary"][value="all"]').on('ifChecked' , function() {
//    $('#products > div').removeClass('hide'); 
//});
