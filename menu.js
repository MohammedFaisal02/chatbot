document.addEventListener('DOMContentLoaded', function() {
    const attachmentBtn = document.getElementById('attachmentBtn');
    const attachmentMenu = document.getElementById('attachmentMenu');
    const documentInput = document.getElementById('documentInput');
    const imageInput = document.getElementById('imageInput');

    // Toggle the visibility of the attachment menu
    attachmentBtn.addEventListener('click', function() {
        const isMenuVisible = attachmentMenu.style.display === 'block';
        attachmentMenu.style.display = isMenuVisible ? 'none' : 'block';
    });

    // Hide the attachment menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!attachmentBtn.contains(event.target) && !attachmentMenu.contains(event.target)) {
            attachmentMenu.style.display = 'none';
        }
    });

    // Handle file selection
    document.getElementById('attachDocument').addEventListener('click', function() {
        documentInput.click();
        attachmentMenu.style.display = 'none'; // Hide menu after selection
    });

    document.getElementById('attachImage').addEventListener('click', function() {
        imageInput.click();
        attachmentMenu.style.display = 'none'; // Hide menu after selection
    });

    // Optionally handle file uploads here
    documentInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('Document selected:', file.name);
            // Handle document upload or processing here
        }
    });

    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('Image selected:', file.name);
            // Handle image upload or processing here
        }
    });

    // Handle send button functionality
    document.getElementById('sendBtn').addEventListener('click', function() {
        const userInput = document.getElementById('userInput').value;
        if (userInput.trim()) {
            // Add message to the chat
            const messages = document.getElementById('messages');
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.textContent = userInput;
            messages.appendChild(userMessage);

            // Clear input field
            document.getElementById('userInput').value = '';

            // Scroll to bottom
            messages.scrollTop = messages.scrollHeight;
        }
    });
});
