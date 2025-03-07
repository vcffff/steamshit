let input = document.querySelector('#password');
let bool = true;


function maga() {
    if (bool) {
        input.type = 'text';
    } else {
        input.type = 'password'; 
    }
    bool = !bool;
}


async function magzhan() {
    try {
        let data = await fetch("login.json");
        let users = await data.json();

        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;

        let found = users.some(user => user.user === username && user.password === password);

        if (found) {
            alert('Success: Login successful!');
            window.location.href = 'index.html'; 
        } else {
            alert('Fail: Invalid username or password.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}


document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    magzhan();
});