function handleContactForm(event) {
    event.preventDefault();
    const name = event.target.elements["name"].value;
    const email = event.arget.elements["email"].value;

    alert(`tu fir aa gya  , ${name}!\n khud pe bharosa rkho  ${email}\n`);
}

