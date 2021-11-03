$(document).ready(function(){
    $('.social').hide()

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 4
    })

    $(document).scroll(function(){
        let top = window.document.documentElement.scrollTop

        if(top > 500)
            $('.social').show('slow')
        else
            $('.social').hide('slow')
    })
})