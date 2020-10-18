const btn = document.getElementById('button');

emailjs.init('user_ZxaX1Ph4GVNusJIcXdifR');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Your message is sent, have a great day!';

    const serviceID = 'default_service';
    const templateID = 'template_k3subcm';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });