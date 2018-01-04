const toggleMenu = $('#toggle-menu');
const navMenu = $('#nav-menu');

toggleMenu.click(function(){
    const $this = $(this);
    let h;
    if(navMenu.is(':hidden')) {
        h = navMenu.show().height();
            navMenu.css('height', 0);
            navMenu.animate({'height': h}, 500,
                function(){
                $this.addClass('active');
                });
    } else {
        navMenu.animate({'height': 0}, 500, function(){
            $this.removeClass('active');
            navMenu.removeAttr('style').hide();
        });
    }
});

function initMobile() {
    $('body').addClass('is-mobile').removeClass('is-descktop');
    console.log("is-mobile");
}
function initDesktop() {
    $('body').addClass('is-desktop').removeClass('is-mobile');
    toggleMenu.removeClass('active');
    navMenu.removeAttr('style');
    console.log("is-desktop")
}




ssm.addState({
    id: 'tablet',
    query: '(max-width: 768px)',
    onEnter: function(){
        initMobile();
    }
});

ssm.addState({
    id: 'desktop',
    query: '(min-width: 768px)',
    onEnter: function(){
        initDesktop();
    }
});



/*--------Slick Slider------------*/

$('#slider').slick({
    autoplay: true,
    slidesToScroll: 1,
     slidesToShow: 1,
    arrows: false,
    dots: true,
    dotsClass: 'mydots',

});

/*-------- END Slick Slider------------*/


/*-------------isotope------------------*/

let $gallery = $('.gallery').isotope({
    itemSelector: '.all',
    layoutMode: 'masonry',

});
$('button').click(function(){
    const $this = $(this);
    const filter = $this.data('filter');
    $gallery.isotope({filter: filter});
    console.log(this)

        });
/*----------End isotope--------------*/


/*----------SmoothScroll-------------*/
new SmoothScroll('a[href*="#"]',{
    speed: 3000});

/*---------END SmoothScroll-------------*/



/*-------------Google Map-----------------*/
function initMap() {
    var cnt = {lat: 46.478766, lng: 30.723594};
    var map = new
    google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: cnt
    });

    var marker = new google.maps.Marker({
        position: cnt,
        map: map,
        title: 'Beetroot academy',
        icon: 'i/favicon.png'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: 'Beetroot Academy'
    });


    marker.addListener('click', function(){
        infoWindow.open(map,marker)
    });
}

/*---------------END Google Map-----------------*/


