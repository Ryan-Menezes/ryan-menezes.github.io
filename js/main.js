$(document).ready(function(){
    $('.social').hide()

    // OWRCAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 3
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
    $('*').delegate('.form-validate', 'focus', function(){
        $(this).validate({
            errorElement: 'span',
            messages: {
                required: 'Este campo é obrigatório',
                email: 'Por favor entre com um email válido'
            }
        })
    })

    $(document).scroll(function(){
        let top = window.document.documentElement.scrollTop

        if(top > 500)
            $('.social').show('slow')
        else
            $('.social').hide('slow')
    })
})