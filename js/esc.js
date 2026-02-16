
    // Prevent only specific keys (e.g., F12 for DevTools)
    window.addEventListener('keydown', function(e) {
        // Prevent F12 (DevTools)
        if (e.key === "F12") {
            e.preventDefault();
        }
    }, true);

    // Attempt to lock the keyboard if supported
    if (navigator.keyboard && navigator.keyboard.lock) {
        navigator.keyboard.lock();
    }