document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const refreshStatusBtn = document.getElementById('refreshStatus');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    const messageResponse = document.getElementById('messageResponse');

    // Check status on page load
    checkStatus();

    // Event listeners
    refreshStatusBtn.addEventListener('click', checkStatus);
    sendMessageBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to check server status
    async function checkStatus() {
        try {
            statusDot.className = 'status-dot';
            statusText.textContent = 'Checking...';
            
            const response = await fetch('/api/status');
            const data = await response.json();
            
            if (response.ok) {
                statusDot.className = 'status-dot online';
                statusText.textContent = `Online - ${data.message}`;
            } else {
                throw new Error('Server response not ok');
            }
        } catch (error) {
            statusDot.className = 'status-dot offline';
            statusText.textContent = 'Offline - Unable to connect';
            console.error('Status check failed:', error);
        }
    }

    // Function to send message
    async function sendMessage() {
        const message = messageInput.value.trim();
        
        if (!message) {
            messageResponse.textContent = 'Please enter a message';
            return;
        }

        try {
            sendMessageBtn.disabled = true;
            sendMessageBtn.textContent = 'Sending...';
            
            const response = await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            
            if (response.ok) {
                messageResponse.innerHTML = `
                    <strong>Sent:</strong> ${data.received}<br>
                    <strong>Response:</strong> ${data.response}<br>
                    <strong>Time:</strong> ${new Date(data.timestamp).toLocaleString()}
                `;
                messageInput.value = '';
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            messageResponse.textContent = 'Error: Unable to send message';
            console.error('Send message failed:', error);
        } finally {
            sendMessageBtn.disabled = false;
            sendMessageBtn.textContent = 'Send';
        }
    }

    // Auto-refresh status every 30 seconds
    setInterval(checkStatus, 30000);

    // Add some interactive animations
    const cards = document.querySelectorAll('.status-card, .message-card, .features-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});