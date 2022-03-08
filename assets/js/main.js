$(document).ready(function(){
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

    // FORM SUBMIT AJAX
    /*
    $('.form-ajax').submit(async function(event){
        event.preventDefault()

        let form = this
        let dataForm = new FormData(form)
        let data = {
            'personalizations': [
                {
                    'to': [
                        {
                            'email': dataForm.get('email')
                        }
                    ]
                }
            ],
            'from': {
                'email': 'menezesryan1010@gmail.com'
            },
            'subject': dataForm.get('subject'),
            'content': [
                {
                    'type': 'text/plain', 
                    'value': dataForm.get('message')
                }
            ]
        }

        let result = await fetch('https://api.sendgrid.com/v3/mail/send', {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify(data)
        })

        $(form).trigger('reset')
    })
    */

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