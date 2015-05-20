(function(){
  function isEmail(mail) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(mail);
  }

  function navSlide() {
    var scroll_top = $(window).scrollTop();

    if(scroll_top >= $('#appVisu').offset().top) {
      $("#nav").addClass('isSticky');
    } else {
      $("#nav").removeClass('isSticky');
    }
  }




  $('#newsletter').on('submit', function(ev){
    ev.preventDefault();
    if (isEmail($('#email')[0].value)) {
      var data = $(this).serialize();
      $.ajax({
        type: ev.target.method,
        url: ev.target.action,
        data: data,
        beforeSend: function(){
          $('#newsletter').addClass('isSend');
          $('#newsletter')[0].reset();
        }
      })
      .done(function(data, textStatus, jqXHR){
        data = JSON.parse(data);
        $('#newsletter').removeClass('isSend');
        switch(data.status) {
          case 'done':
            $('#newsletter').addClass('isDone');
            break;
          case 'fail':
            $('#newsletter').addClass('isFail');
            break;
        }
        $('#feedback').text(data.message);
        setTimeout(function(){
          $('#newsletter').removeClass('isDone');
          $('#newsletter').removeClass('isFail');
        }, 5000);
      })
      .fail(function(error){
        $('#newsletter').removeClass('isSend');
        $('#newsletter').addClass('isFail');
        $('#feedback').text(data.message);
        setTimeout(function(){
          $('#newsletter').removeClass('isDone');
        }, 5000);
      })
    } else {
      console.log('non');
    }
  })

  $(window).scroll(navSlide);

})(jQuery)

// j3bmn5ZN9y9mu4KT
