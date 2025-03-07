document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert(`Welcome, ${username}! Your account has been created.`);
        // Здесь можно добавить логику отправки данных на сервер
    } else {
        alert('Please fill in all fields.');
    }
});