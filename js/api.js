window.API_CONFIG = {
  AUTH_LOGIN: 'https://backend-auth-mastery.onrender.com/api/auth/login',

  AUTH_SIGNUP: 'https://backend-auth-mastery.onrender.com/api/auth/register'
};

window.apiPostJson = async function (url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.message || 'Request failed');
    err.response = data;
    throw err;
  }
  return data;
};
