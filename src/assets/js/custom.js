(function(){
  var contactForm = $('#js-contact');
  var contactMessage = document.getElementById('message');
  var contactSubmit = $('#js-contact-submit');

  contactSubmit.prop('disabled', true);

  contactForm.submit(onContactSubmit);
  contactMessage.addEventListener('input', onContactInput);
  $('.js-contact-success').hide();
  $('.js-contact-error').hide();

  function onContactSubmit(event){
    event.preventDefault();
    var form = event.target;
    $.ajax({
      url: "https://formspree.io/f/mleayzob",
      method: "POST",
      dataType: "json",
      data: {
        _subject: form.name.value + ' sent you a message from portfolio',
        email: form.email.value,
        message: form.message.value
      }, 
    }).then(onSubmitSuccess, onSubmitError);
  }

  function onContactInput(event){
    contactSubmit.attr('disabled', !contactMessage.value.length);
  }

  function onSubmitError(){
    $('.js-contact-error').show();
  }

  function onSubmitSuccess(){
    $('#name').val("");
    $('#email').val("");
    $('#message').val("");
    $('.js-contact-success').show();
    contactSubmit.prop('disabled', true);
  }
})();
