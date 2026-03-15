document.addEventListener('DOMContentLoaded', function() {
    // Text change functionality
    const button = document.getElementById('changeTextButton');
    const dynamicText = document.getElementById('dynamicText');
    
    button.addEventListener('click', function() {
        dynamicText.textContent = 'The button was clicked!';
        dynamicText.style.color = '#4CAF50';
    });
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Change button text based on current theme
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Toggle Light Mode';
        } else {
            themeToggle.textContent = 'Toggle Dark Mode';
        }
    });
    
    // Counter functionality
    const counterDisplay = document.getElementById('counterDisplay');
    const incrementButton = document.getElementById('incrementButton');
    const resetButton = document.getElementById('resetButton');
    let count = 0;
    
    incrementButton.addEventListener('click', function() {
        count++;
        counterDisplay.textContent = count;
    });
    
    resetButton.addEventListener('click', function() {
        count = 0;
        counterDisplay.textContent = count;
    });
    
    // Message form functionality
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messagesList = document.getElementById('messagesList');
    
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = messageText;
            messagesList.appendChild(li);
            
            // Clear input
            messageInput.value = '';
            
            // Scroll to bottom of messages
            messagesList.scrollTop = messagesList.scrollHeight;
        }
    });
});