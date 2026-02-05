async function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageEl = document.getElementById("signupMessage");

    if (password !== confirmPassword) {
        messageEl.textContent = 'password do not match';
        messageEl.className = 'message error';
        return;
    }

    messageEl.className = 'message';
    if (!name || !email || !password) {
        messageEl.textContent = 'Fullname, email and password are required';
        messageEl.className = 'message error';
        return;
    }

    try {
        const data = await apiPostJson(window.API_CONFIG.AUTH_SIGNUP, { fullname: name, email, phone, password });

        messageEl.textContent = data.message || 'Account created successfully';
        messageEl.className = 'message success';
        setTimeout(() => (window.location.href = 'login.html'), 1200);
    } catch (err) {
        messageEl.textContent = err.response?.message || err.message || 'Signup failed';
        messageEl.className = 'message error';
    }
}