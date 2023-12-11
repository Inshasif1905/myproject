// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    // ... (Other Firebase config)
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Realtime Database
const database = firebase.database();

// Function to post a comment
function postComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        // Get a reference to the 'comments' node in the database
        const commentsRef = database.ref('comments');

        // Push a new comment to the database
        commentsRef.push({
            text: commentText,
            timestamp: firebase.database.ServerValue.TIMESTAMP // Timestamp when comment is posted
        });

        // Clear the input field after posting comment
        commentInput.value = '';
    }
}

// Function to display comments
function displayComments() {
    const commentsList = document.getElementById('commentsList');
    // Reference to 'comments' node in the database
    const commentsRef = database.ref('comments');

    // Listen for new comments added to the database
    commentsRef.on('child_added', (snapshot) => {
        const comment = snapshot.val();
        const li = document.createElement('li');
        li.textContent = comment.text;
        commentsList.appendChild(li);
    });
}

// Call the function to display comments when the page loads
document.addEventListener('DOMContentLoaded', displayComments);
