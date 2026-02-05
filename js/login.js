function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(u => u.email === email && u.password === password);

    const messageEl = document.getElementById("loginMessage");
    if(user){
        localStorage.setItem("currentUser",JSON.stringify(user));
        messageEl.textContent="login succesfull ";
        messageEl.className="message success";
        setTimeout(() => (window.location.href="index.html"), 2000);
   }else{
    messageEl.textContent="invalid emaill or passowrd ";
    messageEl.className= " message error";
   }
}