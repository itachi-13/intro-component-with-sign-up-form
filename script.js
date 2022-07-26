const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(!firstName) {
        addErrorTo('firstname', 'First Name is required') 
    } else {
        removeErrorFrom('firstname');
    }

    if(!lastName) {
        addErrorTo('lastname', 'Last Name is required') 
    }else {
        removeErrorFrom('lastname');
    }

    if(!email) {
        addErrorTo('email', 'Email is required') 
    }
    else if(!isValid(email)) {
        addErrorTo('email', 'Email is not valid') 
    }
    else {
        removeErrorFrom('email');
    }

    if(!password) {
        addErrorTo('password', 'Password is required') 
    }else {
        removeErrorFrom('password');
    }

})

function addErrorTo(field, message) {
    const small = form[field].parentNode.querySelector('small')
    small.innerText = message;
    small.style.opacity = '1';
    
    const img = form[field].parentNode.querySelector('img')
    img.style.display = "inline"

    form[field].style.borderColor = 'hsl(0, 100%, 74%)';
}

function removeErrorFrom(field) {
    const small = form[field].parentNode.querySelector('small');
    small.style.opacity = '0';

    const img = form[field].parentNode.querySelector('img')
    img.style.display = "none"

    form[field].style.borderColor = 'hsl(246, 25%, 77%)';
}

function isValid(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };