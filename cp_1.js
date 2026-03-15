// Selecting elements
const form = document.getElementById('feedback-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const feedback = document.getElementById('comments');

const nameCounter = document.getElementById('name-counter');
const emailCounter = document.getElementById('email-counter');
const feedbackCounter = document.getElementById('comments-counter'); 

const feedbackdisplay = document.getElementById('submitted-feedback');

// Event Delegation for Input Counting 
form.addEventListener('input', function(event) {
    if (event.target.id === 'username') {
        nameCounter.textContent = username.value.length + '/50';
    }

    if (event.target.id === 'email') {
        emailCounter.textContent = email.value.length + '/80';
    }

    if (event.target.id === 'comments') {
        feedbackCounter.textContent = feedback.value.length + '/500';
    }
}); 

// Tooltips
form.addEventListener('mouseover', function(event) {
    if (event.target.id === 'username') {
        username.title = 'Please enter your name (max 50 characters)';
    }

    if (event.target.id === 'email') {
        email.title = 'Please enter your email (max 80 characters)';
    }

    if (event.target.id === 'comments') {
        feedback.title = 'Please enter your feedback (max 500 characters)';
    }
});




form.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Clicked inside the form - propagation stopped.');
});


document.body.addEventListener('click', function() {
    console.log('Background clicked');
});

// Form Submission & Validation 
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Basic Validation
    if(username.value.trim() === '' || email.value.trim() === '' || feedback.value.trim() === '') {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Feedback
    const newFeedback = document.createElement('p');
    newFeedback.style.borderBottom = "1px solid #ccc";
    newFeedback.innerHTML = `<strong>Name:</strong> ${username.value}<br> 
                             <strong>Email:</strong> ${email.value}<br> 
                             <strong>Feedback:</strong> ${feedback.value}`;

    feedbackdisplay.appendChild(newFeedback);

    // Reset form and counters
    form.reset();
    nameCounter.textContent = '0/50';
    emailCounter.textContent = '0/80';
    feedbackCounter.textContent = '0/500';
});