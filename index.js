document.addEventListener("DOMContentLoaded", function () {
    // Login Form Validation
    document.querySelector("#login form").addEventListener("submit", function (event) {
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Username and Password cannot be empty.");
            event.preventDefault();
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            event.preventDefault();
        }
    });

    // Survey Form Validation
    document.querySelector("#surveyForm").addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let q1 = document.getElementById("q1").value;
        let q21 = document.querySelector('input[name="q21"]:checked');
        let q3 = document.getElementById("q3").value.trim();
        let q4 = document.getElementById("q4").value;

        if (name === "") {
            alert("Please enter your name.");
            event.preventDefault();
        } else if (!q21) {
            alert("Please select an answer for Question 2.");
            event.preventDefault();
        } else if (q3 === "") {
            alert("Please provide improvement suggestions.");
            event.preventDefault();
        } else if (q4 < 1 || q4 > 10 || isNaN(q4)) {
            alert("Please enter a valid rating between 1 and 10.");
            event.preventDefault();
        }
    });

    // Quiz Form Validation
    document.querySelector("#quizForm").addEventListener("submit", function (event) {
        let q1 = document.querySelector('input[name="q1"]:checked');
        let q2 = document.querySelectorAll('input[name="q2"]:checked');
        let q3 = document.querySelector('select[name="q3"]').value;
        let q4 = document.querySelector('input[name="q4"]').value.trim();
        let q5 = document.querySelector('input[name="q5"]:checked');

        if (!q1) {
            alert("Please select an answer for Question 1.");
            event.preventDefault();
        } else if (q2.length === 0) {
            alert("Please select at least one answer for Question 2.");
            event.preventDefault();
        } else if (q3 === "") {
            alert("Please select an answer for Question 3.");
            event.preventDefault();
        } else if (q4 === "") {
            alert("Please enter a scheduling algorithm.");
            event.preventDefault();
        } else if (!q5) {
            alert("Please select an answer for Question 5.");
            event.preventDefault();
        }
    });
});
