document.getElementById('createAccount').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'signup.html';
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting you to our recovery page!');
    window.location.href = 'forgot.html';
});



