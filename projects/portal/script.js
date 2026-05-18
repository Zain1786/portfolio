let user = document.querySelector('.user-name');
let form = document.querySelector('.inputs');
let mainContainer = document.querySelector('.mcontainer')
mainContainer.style.display = 'none'
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = form.querySelector('input[type="text"]').value;
    let password = form.querySelector('input[type="password"]').value;
    

    console.log(username, password);
 mainContainer.style.display = 'block';
    if (username !== "") {
       form.style.display='none';
        user.textContent = username;
    } else {
        alert("Please enter username");
    }
});