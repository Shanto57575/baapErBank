document.getElementById('btnHandler').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-password');
    const password = passField.value;
    //console.log(email, password);

    if (email === "shanto@gmail.com" && password ==="57575")
       window.location.href='bank.html';
    else alert("invalid user");
})