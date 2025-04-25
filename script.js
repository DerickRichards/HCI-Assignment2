document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    // Loop through menu items and the children of the menu items Increase the size on hover of one menu item
    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });
        item.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });
    
    // Function to handle click events
    function handleClick(e) {
        // Remove active class from all items
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Prevent the click from triggering other events
        e.stopPropagation();
    }
    
    // Add click event listeners to all menu items
    menuItems.forEach(item => {
        item.addEventListener('click', handleClick);
    });
    
    // Click outside to collapse all (optional)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-item')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // Add keyboard navigation (accessibility)
    let currentFocus = -1;
    
    document.addEventListener('keydown', function(e) {
        // Only handle arrow keys if menu is in focus
        if (document.activeElement.closest('.fisheye-menu')) {
            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    currentFocus = (currentFocus + 1) % menuItems.length;
                    menuItems[currentFocus].focus();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    currentFocus = (currentFocus - 1 + menuItems.length) % menuItems.length;
                    menuItems[currentFocus].focus();
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    menuItems[currentFocus].click();
                    break;
            }
        }
    });
    
    // Add tabindex for keyboard navigation
    menuItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        
        // Focus management
        item.addEventListener('focus', function() {
            currentFocus = index;
        });
    });
});