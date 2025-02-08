// admin.js

document.getElementById('admin-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    // Here, you can add logic to handle login (e.g., API request)
    console.log('Logging in with', username, password);
});

document.getElementById('admin-signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    const confirmPassword = document.getElementById('admin-confirm-password').value;

    // Simple password confirmation check
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    // Here, you can add logic to handle signup (e.g., API request)
    console.log('Signing up with', username, email, password);
});
// Admin Signup - admin-signup.js
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Admin signed up:', user);

        // Redirect to admin dashboard
        window.location.href = '/pages/admin/admin-dashboard.html';
    } catch (error) {
        console.error(error.message);
        alert("Error during signup: " + error.message);
    }
});

// Admin Login - admin-login.js
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Admin logged in:', user);

        // Redirect to admin dashboard
        window.location.href = '/pages/admin/admin-dashboard.html';
    } catch (error) {
        console.error(error.message);
        alert("Error during login: " + error.message);
    }
});
