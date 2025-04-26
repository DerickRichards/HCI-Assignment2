// Fisheye menu script - handles enlarging items on hover
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const fisheyeMenu = document.getElementById('fisheye-menu');
    
    // Set initial state for all items
    function resetAllItems() {
        menuItems.forEach(item => {
            item.classList.remove('active');
            item.style.transform = 'scale(1)';
            item.style.zIndex = '1';
            
            // Hide content
            const content = item.querySelector('.content');
            content.style.opacity = '0';
            content.style.display = 'none';
        });
    }
    
    // Handle hover events for each menu item
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            resetAllItems();
            
            // Activate and scale up the hovered item
            this.classList.add('active');
            this.style.transform = 'scale(1.5)';
            this.style.zIndex = '10';
            
            // Show content with transition
            const content = this.querySelector('.content');
            content.style.display = 'block';
            setTimeout(() => {
                content.style.opacity = '1';
            }, 50);
        });
    });
    
    // Reset when mouse leaves the entire menu
    fisheyeMenu.addEventListener('mouseleave', function() {
        resetAllItems();
    });
    
    // Initialize all items in reset state
    resetAllItems();

    //onclick event for menu items make remain active
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            resetAllItems();
            this.classList.add('active');
            this.style.transform = 'scale(1.5)';
            this.style.zIndex = '10';
            
            // Show content with transition
            const content = this.querySelector('.content');
            content.style.display = 'block';
            setTimeout(() => {
                content.style.opacity = '1';
            }, 50);
        });
    });
});