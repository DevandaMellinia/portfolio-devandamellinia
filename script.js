
AOS.init({
once: true,
offset: 100,
duration: 800
});

//Search Functionality Script 
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const blogItems = document.querySelectorAll('.blog-item');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const shortcutBadge = document.getElementById('shortcutBadge');

    // Function to handle keyboard shortcut (Ctrl + K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault(); // Prevent browser default (often focusing URL bar)
            searchInput.focus();
        }
    });

    // Also allow clicking the badge to focus
    shortcutBadge.addEventListener('click', () => {
        searchInput.focus();
    });

    // Search filtering logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        blogItems.forEach(item => {
            // Get text content from Title, Description, and Tags
            const title = item.querySelector('.blog-title').textContent.toLowerCase();
            const desc = item.querySelector('.blog-desc').textContent.toLowerCase();
            const tags = item.querySelector('.blog-tags').textContent.toLowerCase();

            // Check if query matches any content
            if (title.includes(query) || desc.includes(query) || tags.includes(query)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Show/Hide "No Results" message
        if (visibleCount === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    });
});
