var cls = document.getElementById('cls');
var pop = document.getElementById('pop');
$( document ).ready(function() {
    $(pop).removeClass('hi');
    $('body').click(function(){
        $(pop).css('display','none');
    })
    $(cls).click(function(){
        $(pop).css('display','none');
    })
    
});




