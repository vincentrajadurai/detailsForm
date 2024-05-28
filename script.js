document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        mobile: document.getElementById('mobile').value,
        address: document.getElementById('address').value,
        pin: document.getElementById('pin').value
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('userForm').reset();
    })
    .catch(error => console.error('Error:', error));
});