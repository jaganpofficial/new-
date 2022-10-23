const scriptURL = 'https://script.google.com/macros/s/AKfycbzuJ17g7kzn5CPMSAuWiNxIiMQ3ggc5b8ZhOWi2dbWrY0QW47qFpGW-xbyZblVYIf2R/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert("submitted")
      setTimeout(function(){
        msg.innerHTML=""
      },1000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
