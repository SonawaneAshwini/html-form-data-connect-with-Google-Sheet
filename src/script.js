const scriptURL = 'https://script.google.com/macros/s/AKfycbyUdb2WWK45KzUDT0bKUuB1J1FBaoibZd3bfAKNsl-4oCs1fJSfOlFby5Gb3P5zXApe/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


