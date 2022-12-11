
$(document).on('click', '.menu', function(){
    $('body').addClass('overFlowHidden')
    $('aside').fadeIn().addClass('menu_active')
})

$(document).on('click', '.menu_close', function(){
    $('body').removeClass('overFlowHidden')
    $('aside').fadeOut().removeClass('menu_active')
})
