import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create placeholder HTML files for each location
const locations = ['accra', 'kumasi', 'takoradi', 'tamale'];

locations.forEach(location => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${location.charAt(0).toUpperCase() + location.slice(1)} Property</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f0f0f0;
      color: #333;
      font-family: Arial, sans-serif;
    }
    .placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #8599AC, #5D7189);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
    }
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    p {
      font-size: 24px;
    }
  </style>
</head>
<body>
  <div class="placeholder">
    <h1>${location.charAt(0).toUpperCase() + location.slice(1)} Property</h1>
    <p>Placeholder image for ${location.charAt(0).toUpperCase() + location.slice(1)}, Africa</p>
  </div>
</body>
</html>
  `;

  // Ensure directory exists
  const dir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the HTML file
  fs.writeFileSync(path.join(dir, `property-${location}.html`), html);
  console.log(`Created placeholder HTML for ${location}`);
});

console.log('All placeholder HTML files created successfully');
