const sharp = require('sharp');
const path = require('path');

async function generateFavicon() {
  try {
    await sharp('public/logo.png')
      .resize(32, 32)
      .toFile('public/favicon.ico');
    
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();
