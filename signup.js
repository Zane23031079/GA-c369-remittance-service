document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve form values
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Basic validation (you can expand this as needed)
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // You can add your form submission logic here
    console.log('Form submitted', { email, username, password, phoneNumber });

    alert('Account created successfully!');
    // Redirect to login page after successful sign-up
    window.location.href = 'home.html';
});
