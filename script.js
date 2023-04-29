const signupForm = document.querySelector('#signup-form');
const error = document.querySelector('.error');
const success = document.querySelector('.success');

const pass = document.getElementById('password');
const cnPass = document.getElementById("confirm-password");
const pro = document.getElementById('pro');


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    if (!name || !email || !password) {
        error.textContent = 'Error: All the fields are mandatory';
        return;
    }
    const pv = pass.value;
    const cv = cnPass.value;
    if (pv !== cv) {
        alert("Password and Confirm Password are not matched")
        console.log("wrong");
        pass.type = 'text';
        cnPass.type = 'text';
        error.textContent = 'Please correctly confirm password!';
        return;

    }

    const Tokens = accessToken();

    const newUser = {
        name,
        email,
        password,
        Tokens,
    };

    localStorage.setItem("currentUser", JSON.stringify(newUser));

    success.textContent = 'Successfully Signed Up!';
    error.textContent = ''
    setTimeout(() => {
        window.location.href = './profile.html';
    }, 100);
});

function accessToken() {
    const characters =
        '@#$%^&_/*?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

pro.addEventListener("click", () => {
    alert("Please Signup at first");
    return;
})

if (localStorage.getItem("currentUser")) {
    let name = JSON.parse(localStorage.getItem("currentUser")).name;
    alert(`Welcome Back ${name}!, You are already logged in. Please click on "OK" to see your profile`);
    window.location.href = "./profile.html";
}
