// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirect if the user is logged in to the appropriate page
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('User is logged in:', user);
        // Redirect based on user type
        if (window.location.pathname === '/pages/auth/student-login.html' || window.location.pathname === '/pages/auth/student-signup.html') {
            window.location.href = '/pages/student/student-home.html';
        }
        if (window.location.pathname === '/pages/auth/admin-login.html' || window.location.pathname === '/pages/auth/admin-signup.html') {
            window.location.href = '/pages/admin/admin-dashboard.html';
        }
    } else {
        console.log('No user logged in');
        if (window.location.pathname !== '/pages/auth/student-login.html' && window.location.pathname !== '/pages/auth/admin-login.html') {
            window.location.href = '/pages/auth/student-login.html'; // Redirect to login page if not logged in
        }
    }
});

// Sign out function
function signOutUser() {
    firebase.auth().signOut().then(() => {
        console.log('User signed out successfully');
        window.location.href = '/pages/auth/student-login.html'; // Redirect to login page after sign-out
    }).catch((error) => {
        console.error('Sign out error:', error.message);
    });
}

// Optional: Show/hide UI elements based on user state
document.addEventListener("DOMContentLoaded", function () {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            document.getElementById('user-info').style.display = 'block';  // Show user info
            document.getElementById('login-button').style.display = 'none'; // Hide login button
        } else {
            document.getElementById('user-info').style.display = 'none';  // Hide user info
            document.getElementById('login-button').style.display = 'block'; // Show login button
        }
    });
});
