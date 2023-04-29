const profile = document.querySelector('.profile');
const logoutBtn = document.querySelector('#btn');
const sign = document.querySelector('#sign');
const pro = document.querySelector('#pro');
const pf = document.getElementById("pf");
const email = document.getElementById("email");
const pass = document.getElementById('pass');
const fName = document.getElementById("fName");
const newD = document.getElementById('newD');

var initialFName = fName.innerHTML.trim();
var initialEmail = email.innerHTML.trim();
var initialPass = pass.innerHTML.trim();

const signedUpUser = JSON.parse(localStorage.getItem('currentUser'));


  fName.textContent += ` ${signedUpUser.name} `;
  email.textContent += ` ${signedUpUser.email} `;
  pass.textContent += ` ${signedUpUser.password} `;


logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  fName.innerText = initialFName;
  pass.innerText = initialPass;
  email.innerText = initialEmail;
  alert("confirmed to logout?");
  newD.textContent="Please Signup to create a new Account"

});

pro.addEventListener('click', (e) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user || !user.Tokens) {
    e.preventDefault();
    window.location.href = './index.html';
    alert("Token is not found, Please Signup at first")
  }
  else if (user && user.Tokens) {
    e.preventDefault();
    alert(`Hey! ${user.name} You are already in Profile page `)
    window.location.href = './profile.html';
  }
});

sign.addEventListener('click', (e) => {
  const state = JSON.parse(localStorage.getItem('currentUser'));
  console.log(state);

  if (state && state.Tokens) {
    e.preventDefault();
    alert(`You already have Token:  ${state.Tokens} ,  Please logout at first`)
    window.location.href = './profile.html';
  }
  else if (!state || !state.Tokens) {
    e.preventDefault();
    window.location.href = './index.html';
  }
});


