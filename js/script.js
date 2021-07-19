const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  
  localStorage.setItem('email', email);
  console.log(localStorage.getItem('email'));

  let content = document.getElementById('content');

  let pronto = `<p>Cupom enviado.. Aproveite nossas ofertas.</p>`

  content.innerHTML = pronto


  setTimeout(() => {
    location.reload();
  }, 3000)

})