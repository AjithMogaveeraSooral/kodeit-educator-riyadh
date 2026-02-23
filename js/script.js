document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycby_RGbBgmtXMsWl9GtHXj8Fn0kbnxQBHrE5J6C9AVV_a97pb8UajjaKmkERIKzY9pFI/exec'; // <--- Paste your App Script URL here

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = document.querySelector('.btn-submit-modern');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Processing...";
        submitBtn.disabled = true;

        const formData = new FormData(registrationForm);

        fetch(scriptURL, { 
            method: 'POST', 
            body: formData 
        })
        .then(response => {
            alert('Registration Successful! Check your email for confirmation.');
            registrationForm.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Submission failed. Please try again.');
        })
        .finally(() => {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        });
    });
});
