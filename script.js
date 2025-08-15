document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.querySelector("input[type='text']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
    } else {
        alert(`Welcome, ${username} 🎉`);
    }
});
