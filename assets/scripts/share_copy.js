function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    const alertBox = document.createElement('div');
    alertBox.textContent = 'Copied!';
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '20px';
    alertBox.style.right = '20px';
    alertBox.style.backgroundColor = '#333';
    alertBox.style.color = '#fff';
    alertBox.style.padding = '10px';
    alertBox.style.borderRadius = '5px';
    document.body.appendChild(alertBox);
    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 5000);
}