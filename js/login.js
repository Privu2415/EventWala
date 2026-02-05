async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
   
    const normalizedEmail = email ? email.trim().toLowerCase() : email;

    const messageEl = document.getElementById("loginMessage");
    if (!messageEl) {
        console.error('Login message element not found');
        return;
    }
    messageEl.className = 'message';
    messageEl.textContent = 'Logging in...';

    try {
        const data = await apiPostJson(window.API_CONFIG.AUTH_LOGIN, { email: normalizedEmail, password });
        console.log('Login response:', data);
       
        const token = data?.token || data?.accessToken || data?.jwt || data?.authToken || data?.data?.token || data?.data?.accessToken || data?.data?.jwt || (data?.token && data.token.token);
        const user = data?.user || data?.data?.user || null;
        if (token) {
            localStorage.setItem('jwtToken', token);
            if (user) localStorage.setItem('currentUser', JSON.stringify(user));
            messageEl.textContent = 'Login successful';
            messageEl.className = 'message success';
            setTimeout(() => (window.location.href = 'index.html'), 1000);
            return;
        }
        console.warn('No JWT token found in login response:', data);
        throw new Error(data.message || data.error || 'Invalid response from server');
    } catch (err) {
        const serverMsg = err?.response?.message || err?.response?.error || err?.response?.msg || err?.response?.details || null;
        console.error('Login error:', err, err.response);
        messageEl.textContent = serverMsg || err?.message || 'Login failed';
        messageEl.className = 'message error';
    }
}

window.handleLogin = handleLogin;
