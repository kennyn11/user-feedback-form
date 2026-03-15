// Selecting elements
const form = document.getElementById('feedback-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const feedback = document.getElementById('comments');

const nameCounter = document.getElementById('name-counter');
const emailCounter = document.getElementById('email-counter');
const feedbackCounter = document.getElementById('comments-counter'); 

const feedbackdisplay = document.getElementById('submitted-feedback');

// --- Step 3 & 4: Event Delegation for Input Counting ---
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

// --- Step 3 & 4: Tooltips via 'title' attribute ---
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

// --- Step 5: Prevent Background Clicks (Propagation) ---

// When we click the form, stop the event so it doesn't reach 'body'
form.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Clicked inside the form - propagation stopped.');
});

// This will now trigger ONLY when you click outside the form
document.body.addEventListener('click', function() {
    console.log('Background clicked');
});

// --- Step 3: Form Submission & Validation ---
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page reload

    // Basic Validation
    if(username.value.trim() === '' || email.value.trim() === '' || feedback.value.trim() === '') {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Dynamically append feedback
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