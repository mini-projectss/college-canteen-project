// student.js

document.getElementById('student-signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;
    const email = document.getElementById('student-email').value;
    const phone = document.getElementById('student-phone').value;
    const dob = document.getElementById('student-dob').value;
    const gender = document.getElementById('student-gender').value;
    const course = document.getElementById('student-course').value;
    const year = document.getElementById('student-year').value;
    const hostel = document.getElementById('student-hostel').value;
    const password = document.getElementById('student-password').value;
    const confirmPassword = document.getElementById('student-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    console.log('Student Signed Up:', { name, studentId, email, phone, dob, gender, course, year, hostel, password });
    alert('Signup Successful!');
});

document.getElementById('student-login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;

    console.log('Logging in with:', { email, password });
    alert('Login Successful!');
});
// Student Signup - student-signup.js
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Student signed up:', user);

        // Redirect to student home page
        window.location.href = '/pages/student/student-home.html';
    } catch (error) {
        console.error(error.message);
        alert("Error during signup: " + error.message);
    }
});

// Student Login - student-login.js
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Student logged in:', user);

        // Redirect to student home page
        window.location.href = '/pages/student/student-home.html';
    } catch (error) {
        console.error(error.message);
        alert("Error during login: " + error.message);
    }
});
