document.getElementById('generateLink').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const link = `http://localhost:5000/download?name=${encodeURIComponent(name)}`;
    document.getElementById('downloadLink').href = link;
    document.getElementById('downloadLink').textContent = 'Download Malware';
    document.getElementById('downloadLink').classList.remove('hidden');
});
