window.onload = function() {
			$("#button").click(function() {
			    $('html, body').animate({
			        scrollTop: $("#bottom").offset().top
			    	}, 2000);
			});
			$(".home").click(function() {
			    $('html, body').animate({
			        scrollTop: $("#goHome").offset().top
			    }, 2000);
			});
			$(".users").click(function() {
			    $('html, body').animate({
			        scrollTop: $("#goUsers").offset().top
			    }, 2000);
			});
			$(".contacts").click(function() {
			    $('html, body').animate({
			        scrollTop: $("#goContacts").offset().top
			    }, 2000);
			});
			$( "#menu_xs" ).on({
                click: function() {
                $(".menu_sm").toggleClass("unvisible");
            }});
			$( ".row.photo" ).on({
                click: function() {
                $(".slider").removeClass("unvisible");
                $(".photo_item").addClass("unvisible");
                $(".row.photo").toggleClass("photo1");
            }});
            $( "#back_" ).on({
                click: function() {
                $(".slider").addClass("unvisible");
                $(".photo_item").removeClass("unvisible");
                $(".row.photo").toggleClass("photo1");
            }});
            $( "#submit" ).on({
                click: function() {
                if(document.getElementById('exampleInputName').value==='')myform.submit();
            }});
            $( "#submit" ).on({
                click: function() {
                if(document.getElementById('exampleInputName2').value==='')myform.submit();
                else alert('thank you for sending form');
                	$(".form-inline").addClass("unvisible");
                	$(".form_send").removeClass("unvisible");
            }});

            
			
			$('#myCarousel').carousel({
                interval: 0,
                autoPlay: false
        	});
        	$('#carousel-text').html($('#slide-content-0').html());
	        //Handles the carousel thumbnails
	       	$('[id^=carousel-selector-]').click( function(){
	            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
	            id = parseInt(id);
	            $('#myCarousel').carousel(id);
	        });	 
	        // When the carousel slides, auto update the text
	        $('#myCarousel').on('slid.bs.carousel', function (e) {
	                 var id = $('.item.active').data('slide-number');
	                $('#carousel-text').html($('#slide-content-'+id).html());
	        });
		};

		$(document).scroll(function () {
		    var users = $("#goUsers").offset().top-2;
		    var contacts = $("#goContacts").offset().top-2;
		    var home = $("#goHome").offset().top;
		    var s_top = $("body").scrollTop();
		    var main = $('.main').offset().top + 20;
			    if(s_top > home){
			    	$('.red').removeClass('red');
			        $('.home').addClass('red');
			    }
			    if(s_top > users){
			        $('.red').removeClass('red');
			        $('.users').addClass('red');
			    }
			    if(s_top > contacts){
			        $('.red').removeClass('red');
			        $('.contacts').addClass('red');
			    }
			    if(s_top > main){
			        $('.main').addClass('fix');
			    }
			    if(21 > s_top){
			        $('.main').removeClass('fix');
			    }
		});