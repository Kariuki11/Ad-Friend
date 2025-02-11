// Function to detect ads (basic approach)
function findAds() {
    return document.querySelectorAll('iframe, .ad, [id*="ad"], [class*="ad"]');
}

// Replace ads with motivational content
function replaceAds() {
    const ads = findAds();
    ads.forEach(ad => {
        const widget = document.createElement('div');
        widget.classList.add('adfriend-widget');
        widget.innerText = "Loading motivation...";
        ad.replaceWith(widget);
        
        // Fetch motivational content from API
        fetchMotivation(widget);
    });
}

// Fetch motivational quotes using an API
function fetchMotivation(element) {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            element.innerText = `"${data.content}" - ${data.author}`;
        })
        .catch(() => {
            element.innerText = "Stay positive! Keep going!";
        });
}

// Run the script when the page loads
window.addEventListener('load', replaceAds);
