document.getElementById('identityVerification').addEventListener('change', function(e) {
    const uploadBox = document.querySelector('.upload-box');
    const uploadText = document.querySelector('.upload-text');
    const uploadInstruction = document.querySelector('.upload-instruction');
    
    if (e.target.files.length > 0) {
        const fileName = e.target.files[0].name;
        uploadText.textContent = 'File Selected';
        uploadInstruction.textContent = fileName;
    } else {
        uploadText.textContent = '+';
        uploadInstruction.textContent = 'Upload Photo or Document';
    }
});

document.getElementById('addAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const identityVerification = document.getElementById('identityVerification').files[0];

    if (!identityVerification) {
        alert('Please upload a photo or document for identity verification.');
        return;
    }

    console.log('Form submitted', { bankName, accountNumber, identityVerification });

    alert('Account added successfully!');
    window.location.href = 'dashboard.html';
    
});
