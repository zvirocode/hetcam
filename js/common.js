$(document).ready(function() {

	$(".php-call-back").validate({
	  rules:{
	    ass1:{
	      required: true,
	    },
	    ass2:{
	      required: true,
	    },
	  },
	  messages:{
	    ass1:{
	      required: "Заполните это поле",
	    },
	    ass2:{
	      required: "Заполните это поле",
	    },
	  },

	  submitHandler: function(form_mm) {
	    console.log(form_mm);
	    var values = {};

	    $.each($(form_mm).serializeArray(), function(i, field) {
	      values[field.name] = field.value;
	    });
	    $.ajax({
	      url: '/callback.php',             // указываем URL и
	      dataType : "json",            // тип загружаемых данных
	      type: "POST",
	      data: values,                    
	      success: function (data, textStatus) { // вешаем свой обработчик на функцию success
	        $(".popup-ok").addClass("is-active");
	      } 
	    });
	  }
	});

	$(".php-send").validate({
	  rules:{
	    mytel:{
	      required: true,
	    },
	    myname:{
	      required: true,
	    },
	    mymail:{
	      required: true,
	    },
	  },
	  messages:{
	    mytel:{
	      required: "Заполните это поле",
	    },
	    myname:{
	      required: "Заполните это поле",
	    },
	    mymail:{
	      required: "Заполните это поле",
	    },
	  },

	  submitHandler: function(form_m) {
	    console.log(form_m);
	    var values = {};

	    $.each($(form_m).serializeArray(), function(i, field) {
	      values[field.name] = field.value;
	    });
	    $.ajax({
	      url: '/form.php',             // указываем URL и
	      dataType : "json",            // тип загружаемых данных
	      type: "POST",
	      data: values,                    
	      success: function (data, textStatus) { // вешаем свой обработчик на функцию success
	        $(".popup-ok2").addClass("is-active");
	      } 
	    });
	  }
	});

	$(".php-send2").validate({
	  rules:{
	    mytel:{
	      required: true,
	    },
	    myname:{
	      required: true,
	    },
	    mymail:{
	      required: true,
	    },
	  },
	  messages:{
	    mytel:{
	      required: "Заполните это поле",
	    },
	    myname:{
	      required: "Заполните это поле",
	    },
	    mymail:{
	      required: "Заполните это поле",
	    },
	  },

	  submitHandler: function(form_m) {
	    console.log(form_m);
	    var values = {};

	    $.each($(form_m).serializeArray(), function(i, field) {
	      values[field.name] = field.value;
	    });
	    $.ajax({
	      url: '/form2.php',             // указываем URL и
	      dataType : "json",            // тип загружаемых данных
	      type: "POST",
	      data: values,                    
	      success: function (data, textStatus) { // вешаем свой обработчик на функцию success
	        $(".popup-ok3").addClass("is-active");
	      } 
	    });
	  }
	});

	$(".php-send3").validate({
	  rules:{
	    mytel:{
	      required: true,
	    },
	    myname:{
	      required: true,
	    },
	    mymail:{
	      required: true,
	    },
	  },
	  messages:{
	    mytel:{
	      required: "Заполните это поле",
	    },
	    myname:{
	      required: "Заполните это поле",
	    },
	    mymail:{
	      required: "Заполните это поле",
	    },
	  },

	  submitHandler: function(formm) {
	    console.log(formm);
	    var values = {};

	    $.each($(formm).serializeArray(), function(i, field) {
	      values[field.name] = field.value;
	    });
	    $.ajax({
	      url: '/form3.php',             // указываем URL и
	      dataType : "json",            // тип загружаемых данных
	      type: "POST",
	      data: values,                    
	      success: function (data, textStatus) { // вешаем свой обработчик на функцию success
	        $(".popup-ok4").addClass("is-active");
	      } 
	    });
	  }
	});

	$('.for-nav').click(function(){
		$('.nav').toggleClass('nav-open');
		return false							
	});

	$('#for-popup2').click(function(){
		$('#popup2').toggleClass('popup-open');
		$('.overlay').toggleClass('overlay-open');
		return false							
	});

	$('.for-popup3').click(function(){
		$('#popup3').toggleClass('popup-open');
		$('.overlay').toggleClass('overlay-open');		
		return false							
	});

	$('.for-popup-video').click(function(){
		$('#popup-video').toggleClass('video-open');
			$('.overlay').toggleClass('overlay-open');	
		return false							
	});		

	$('.popup__close').click(function(){
		$('.popup').removeClass('popup-open');
		$('#popup-video').removeClass('video-open');
		$('.overlay').removeClass('overlay-open');		
	});

	$(document).click(function(){
		$('.nav').removeClass('nav-open');
		// $('#popup2').removeClass('popup-open');
		// $('#popup3').removeClass('popup-open');		
		$('#popup-video').removeClass('video-open');
		// $('.overlay').removeClass('overlay-open');													
	});

	$(".js-prod").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: ($(page).offset().top)
	  }, 500);
	  return false;
	 });
	$(".js-how").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: ($(page).offset().top)
	  }, 500);
	  return false;
	 });
	$(".js-video").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: ($(page).offset().top)
	  }, 500);
	  return false;
	 });
	$(".js-cont").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: ($(page).offset().top)
	  }, 500);
	  return false;
	 });

});


