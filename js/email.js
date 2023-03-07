// //grabbing elements 
const reachUsBtn = document.getElementById("reach-us-btn");
const form = document.querySelector(".form");

// grbbaing inputs for border colors
const fn= document.getElementById('name')
const ph = document.getElementById('phone')
const em = document.getElementById('email')
const ms = document.getElementById('message')


// ----------- FUNCTION TO DISPLAY ALERT -----------------
const alert = document.querySelector('.alert')
displayAlert = (text, action) =>{
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    setTimeout(function() {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

// // ----------- FUNCTION TO SEND EMAIL -----------------
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }

    const serviceID = 'service_y3n6qkt';
    const templateID = 'template_nw6apt4';

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            // displayAlert('Message Sent', 'success');
        }
    )
    .catch(err => displayAlert('Message Not Sent', 'danger'))
}

//reg ex for email validation
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegEx = /^\d{10,11}$/
const nameRegEx = /^[a-zA-Z]{3,}$/
const messageRegEx = /^[a-zA-Z ]{3,50}$/

form.addEventListener('submit', logSubmit);
function logSubmit(event) {
    event.preventDefault();
    location.href = '#reach-us'

    //grabbing values
    const Fname= document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    //validation
    if(Fname === '' || phone === '' || email === '' || message === ''){
        displayAlert('Please fill in all fields', 'danger')
    }else if(!emailRegEx.test(email)){
        displayAlert('Please enter a valid email', 'danger')
        em.style.border = '1px solid #FAFA33'
    }else if(!phoneRegEx.test(phone)){
        displayAlert('Please enter a valid phone number', 'danger')
        ph.style.border = '1px solid #FAFA33'
    }else if(!nameRegEx.test(Fname)){
        displayAlert('Please enter a valid name', 'danger')
        fn.style.border = '1px solid #FAFA33'
    }else if(!messageRegEx.test(message)){
        displayAlert('Please enter a valid message', 'danger')
        ms.style.border = '1px solid #FAFA33'
    }else{
        //send email
        // sendMail()
        
        displayAlert('Just lol', 'success')

        //put border colors back
        fn.style.border = '2px solid #BCE0FD'
        em.style.border = '2px solid #BCE0FD'
        ph.style.border = '2px solid #BCE0FD'
        ms.style.border = '2px solid #BCE0FD'

    }
}