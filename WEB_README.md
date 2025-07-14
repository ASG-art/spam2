# Kahrbaa Web Application

A modern web application built with Express.js and featuring a beautiful, responsive interface.

## Features

- **System Status Monitoring**: Real-time server status display
- **Message Processing**: Send and receive messages through the web interface
- **Modern UI**: Beautiful gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **API Integration**: RESTful API endpoints for status and messaging

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the web server:
   ```bash
   npm run web
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run web` - Start the web server
- `npm run dev` - Start the web server (development mode)
- `npm start` - Start the Discord bot (legacy)

## API Endpoints

### GET `/api/status`
Returns the current server status.

**Response:**
```json
{
  "status": "online",
  "timestamp": "2025-07-14T05:16:41.295Z",
  "message": "Web server is running!"
}
```

### POST `/api/message`
Send a message to the server.

**Request body:**
```json
{
  "message": "Hello, World!"
}
```

**Response:**
```json
{
  "received": "Hello, World!",
  "response": "Echo: Hello, World!",
  "timestamp": "2025-07-14T05:16:41.295Z"
}
```

## File Structure

```
├── server.js           # Express.js server
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # CSS styles
│   └── script.js       # Client-side JavaScript
├── package.json        # Project dependencies
└── WEB_README.md      # This file
```

## Features Overview

### Status Monitoring
- Real-time status indicator with visual feedback
- Auto-refresh every 30 seconds
- Manual refresh button

### Message System
- Send messages through the web interface
- Real-time response display
- Enter key support for quick messaging

### Modern UI
- Gradient background with smooth transitions
- Card-based layout with hover effects
- Responsive design for all screen sizes
- Clean, modern typography

## Customization

The web application is highly customizable:

1. **Colors**: Edit `public/style.css` to change the color scheme
2. **Functionality**: Modify `server.js` to add new API endpoints
3. **UI**: Update `public/index.html` and `public/script.js` for interface changes

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

This project is licensed under the MIT License.