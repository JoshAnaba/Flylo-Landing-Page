function validateEmail(email){
    const re= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

function validate(){
    const error = $('#error')
    const email = $("#email").val();
   //  const err =  $('#error-svg');
 if(document.emailForm.email.value == ''){
      error.text('field cannot be empty!');
      document.emailForm.email.focus();
      return false;
  }
 
 else  if (!validateEmail(email)){
    error.css('color', 'red').text(email + " is not a valid email address ");
    document.emailForm.email.focus();
      //   err.css('display', 'block')
     
     return false;
  }
 else {
   //  err.css('display', 'none')
    error.css('color', 'green').text(email + " is valid ");
     setTimeout(()=>{
       alert(`${email} `)
     },2000)
     return true;
   }
}

$("#submit-btn").on("click", validate);
  
document.addEventListener('submit' ,(ev)=>{
   ev.preventDefault();
})
   