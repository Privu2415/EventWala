function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageEl = document.getElementById("signupMessage");

    if(password !== confirmPassword){
        messageEl.textContent="password do not match";
        messageEl.className="message error";
        return;
    }

    if(users.some(u =>u.email === email)){
        messageEl.textContent="email already exits";
        messageEl.className = "message error";
        return;
    }

    users.push({name,email,phone,password});
    localStorage.setItem("users",JSON.stringify(users));

    messageEl.textContent="account created succesfully";
    messageEl.className="message success";

    setTimeout(() =>(window.location.href = "login.html"), 2000);
}