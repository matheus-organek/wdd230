document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('event-banner');
    const closeBannerButton = document.getElementById('close-banner');

    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (today >= 1 && today <= 3) { // Show banner on Monday (1), Tuesday (2), and Wednesday (3)
        banner.style.display = 'block';
    }

    closeBannerButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});
