let button =document.querySelector('.maga')
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

maga();


async function magzhan() {
    try {
      
        let data = await fetch("login.json");
        let response = await data.json();


        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;

        
        if (username === response.user && password === response.password) {
            alert('Success: Login successful!');
        } else {
            alert('Fail password');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}

magzhan();