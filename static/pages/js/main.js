 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
				autoplay: true,
		    margin: 20,
		    nav: true,
		    dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 1
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2
	        },
	        1200:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 3
	        }
		    }
			});
		}



		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
				autoplay: true,
		    margin: 20,
		    nav: true,
		    dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 1
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2
	        }
	        
		    }
			});
		}

		if ( $('.nonloop-block-15').length > 0 ) {
			$('.nonloop-block-15').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
				autoplay: true,
		    margin: 20,
		    nav: true,
		    dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 1,
	          nav: false,
		    		dots: true
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2,
	          nav: true,
		    		dots: true
	        },
	        1200:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 3,
	          nav: true,
		    		dots: true
	        }
		    }
			});
		}

		if ( $('.slide-one-item').length > 0 ) {
			$('.slide-one-item').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    pauseOnHover: false,
		    animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
		    nav: true,
		    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
		  });
	  }
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		if ( $('#date-countdown').length > 0 ) {
			$('#date-countdown').countdown('2020/10/10', function(event) {
			  var $this = $(this).html(event.strftime(''
			    + '<span class="countdown-block"><span class="label">%w</span> semanas </span>'
			    + '<span class="countdown-block"><span class="label">%d</span> dias </span>'
			    + '<span class="countdown-block"><span class="label">%H</span> hrs </span>'
			    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
			    + '<span class="countdown-block"><span class="label">%S</span> seg </span>'));
			});
		}
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();


	var windowScrolled = function() {


		$(window).scroll(function() {

			var $w = $(this), st = $w.scrollTop(), navbar = $('.js-site-navbar') , logo = $('.logo');

			if ( st > 100 ) {
				navbar.addClass('scrolled');
				logo.addClass('scrolled');
			} else {
				navbar.removeClass('scrolled');
				logo.removeClass('scrolled');
			}
			
		})

	}
	windowScrolled();

});

numeroAleatorio1(1239, 4751);

function numeroAleatorio1(min, max) {
	var num = Math.round(Math.random() * (max - min) + min);
	$('#numero-aleatorio1').text(num);
}

numeroAleatorio2(1239, 4751);

function numeroAleatorio2(min, max) {
	var num = Math.round(Math.random() * (max - min) + min);
	$('#numero-aleatorio2').text(num);
}

numeroAleatorio3(1239, 4751);

function numeroAleatorio3(min, max) {
	var num = Math.round(Math.random() * (max - min) + min);
	$('#numero-aleatorio3').text(num);
}

numeroAleatorio4(1239, 4751);

function numeroAleatorio4(min, max) {
	var num = Math.round(Math.random() * (max - min) + min);
	$('#numero-aleatorio4').text(num);
}

function validarFormulario(){
		var txtNombre = document.getElementById('nombre').value;
		var txtRut = document.getElementById('rut').value;
		var txtCorreo = document.getElementById('correo').value;
		var txtTelefono = document.getElementById('telefono').value;
		var cmbSelector1 = document.getElementById('selector1').selectedIndex;
		var cmbSelector2 = document.getElementById('selector2').selectedIndex;
		var txtMensaje = document.getElementById('mensaje').value;

		//Test nombre
		if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
			alert('ERROR: Ingrese información en Nombre ');
			document.datos.nombre.focus();
			return false;
		}

		//Test correo
		if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
			alert('ERROR: Debe escribir un correo electrónico válido');
			document.datos.correo.value="";
			document.datos.correo.focus();
			return false;
		}
		
		//Test telefono
		if(txtTelefono == null || txtTelefono.length == 0 || isNaN(txtTelefono)){
			alert('ERROR: Debe ingresar un telefono');
			document.datos.telefono.value="";
			document.datos.telefono.focus();
			return false;
		}

		//Test comboBox1
		if(cmbSelector1 == null || cmbSelector1 == 0){
			alert('ERROR: Debe seleccionar una motiva de consulta');
			document.datos.selector1.focus();
			return false;
		}
		
		//Test comboBox2
		if(cmbSelector2 == null || cmbSelector2 == 0){
			alert('ERROR: Debe seleccionar un país');
			document.datos.selector2.focus();
			return false;
		}
		


	return true;
}

function fechaHoraActual(){ 
	momentoActual = new Date() 

	hora = momentoActual.getHours() 
	if (hora < 10) { 
		hora = '0' + hora;
	} else {
		hora = hora + '';
	}
	minuto = momentoActual.getMinutes()
	if (minuto < 10) { 
		minuto = '0' + minuto;
	} else {
		minuto = minuto + '';
	}
	segundo = momentoActual.getSeconds()
	if (segundo < 10) { 
		segundo = '0' + segundo;
	} else {
		segundo = segundo + '';
	}

	var dd = String(momentoActual.getDate()).padStart(2, '0');
	var mm = String(momentoActual.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = momentoActual.getFullYear();

	fechaImprimible = mm + '/' + dd + '/' + yyyy;
	horaImprimible = hora + ":" + minuto + ":" + segundo;
	total = (fechaImprimible + " - " + horaImprimible);

	$('#reloj').text(total);

	//La función se tendrá que llamar así misma para que sea dinámica, 
	//de esta forma:

	setTimeout(fechaHoraActual,1000)
}