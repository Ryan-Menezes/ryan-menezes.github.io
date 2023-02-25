$(document).ready(function(){
    AOS.init();

    $('.social').hide()

    // OWRCAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 4,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1
            },
            700:{
                items: 2
            },
            1000:{
                items: 4
            }
        }
    })

    // MASK
    $('*').delegate('.date-mask', 'focus', function(){
        $(this).mask('99/99/9999')
    })

    $('*').delegate('.cpf-mask', 'focus', function(){
        $(this).mask('999.999.999-99')
    })

    $('*').delegate('.phone-mask', 'focus', function(){
        $(this).mask('(99)99999-9999')
    })

    // FORM-VALIDATE
    $('.form-validate').validate({
        errorElement: 'span',
        messages: {
            required: 'Este campo é obrigatório',
            email: 'Por favor entre com um email válido'
        }
    })

    // MENU
    $('.open-menu').click(function(){
        let menu = this.dataset.menu

        if(menu !== undefined) $(menu).css('right', '0px')
    })

    $('.close-menu').click(function(){
        let menu = this.dataset.menu

        if(menu !== undefined) $(menu).css('right', '-100%')
    })

    $(document).scroll(function(){
        let top = window.document.documentElement.scrollTop

        if(top > 500){
            $('.social').show('slow')
            $('.header .menu').addClass('fixed')
        }
        else{
            $('.social').hide('slow')
            $('.header .menu').removeClass('fixed')
        }
    })
})
