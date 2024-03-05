


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()





//input elementi 
const idNumberInput = document.getElementById('validationCustom03');
const ssnInput = document.getElementById('validationCustom05');


document.querySelector('form').addEventListener('submit', function(event) {
    // id'i dogrulugu icin 
    if (idNumberInput.value.length !== 11) {
        idNumberInput.classList.remove('is-valid');
        idNumberInput.classList.add('is-invalid');
    } else {
        idNumberInput.classList.remove('is-invalid');
        idNumberInput.classList.add('is-valid');
    }

    // ssn dogrulu icin
    if (!isValidSSN(ssnInput.value)) {
        ssnInput.classList.remove('is-valid');
        ssnInput.classList.add('is-invalid');
    } else {
        ssnInput.classList.remove('is-invalid');
        ssnInput.classList.add('is-valid');
    }

    event.preventDefault(); // 
});


function isValidSSN(ssn) {
    const ssnPattern = /^(?!000|666|9\d\d)\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
    return ssnPattern.test(ssn);
}






const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    // Check if all inputs are valid
    if (form.checkValidity()) {
        // Yönlendirme işlemi burada gerçekleştirilecek
        window.location.href = "https://clarusway.com/"; // Yeni sayfanın URL'si
    }

    event.preventDefault(); // Formun doğal işlemesini engelle
});
  