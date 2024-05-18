document.addEventListener("DOMContentLoaded", function() {
    const timestampField = document.getElementById('timestamp');
    const currentDateTime = new Date().toISOString();
    timestampField.value = currentDateTime;
});