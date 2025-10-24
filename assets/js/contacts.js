
emailjs.init("VEleHEvNxASP5mJdW"); 

const form = document.getElementById('contactForm');
function sendContactForm(formName, formEmail, formMessage) {
  emailjs.send("service_6exifar", "template_px4c71p", {
      from_name: formName,   
      reply_to: formEmail,   
      message: formMessage   
  })
  .then(function(response) {
      alert('✅ Message Sent Successfully!');
      form.reset();
  }, function(error) {
      alert('❌ Failed to send message. Please try again.');
      console.error(error);
  });
}

function submitForm(event) {
    event.preventDefault();

    const formName = form.name.value;
    const formEmail = form.email.value;
    const formMessage = form.message.value;

    sendContactForm(formName, formEmail, formMessage);
}


form.addEventListener('submit', submitForm);
