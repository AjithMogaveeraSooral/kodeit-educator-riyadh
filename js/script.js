document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwrM4Srq1XP5mSwU46_8xqPXGSWCqxuM-2T5mWL4JH20qcCkfjf4G51uEbhMDWZcefV4Q/exec'; // <--- Paste your App Script URL here

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = document.querySelector('.btn-submit-modern');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Processing...";
        submitBtn.disabled = true;

        const formData = new FormData(registrationForm);
        formData.append('location', 'Riyadh');

        fetch(scriptURL, { 
            method: 'POST', 
            body: formData 
        })
        .then(response => {
            alert('Registration Successful!');
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
