$(document).ready(function(){
    $('.social').hide()

    // OWRCAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 3,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1
            },
            700:{
                items: 2
            },
            1000:{
                items: 3
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

    // FORM SUBMIT AJAX
    $('.form-ajax').submit(function(event){
        event.preventDefault()
        let form = this
        let data = new FormData(form)

        // SEND EMAIL
        // $.ajax({
        //     url: form.action,
        //     method: form.method,
        //     data: data,
        //     processData: false,
        //     contentType: false,
        //     dataType: 'json'
        // })

        // form.reset()
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
            $('.header .menu').css({
                position: 'fixed'
            })
        }
        else{
            $('.social').hide('slow')
            $('.header .menu').css({
                position: 'relative'
            })
        }
    })
})