const fs = require('fs');
const https = require('https');
const path = require('path');

const apiEndpoint = 'https://circleci.com/api/v2/project/github/riju377/cypress-circleci-snapshot/93/artifacts';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Circle-Token': 'CCIPAT_LRuf2amSDCgMAqYtMjawZ1_bd12c8ed789f8138451d78ed2001463306c82c3b' // Replace with your CircleCI token
};

// Send GET request to the API
https.get(apiEndpoint, { headers }, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    if (response.statusCode === 200) {
      const { items } = JSON.parse(data);

      // Process the items in the response JSON
      items.forEach((item) => {
        const filePath = item.path;
        const fileUrl = item.url;

        // Extract the directory and filename from the path
        const directory = path.dirname(filePath);
        const filename = path.basename(filePath);

        // Download the image file
        https.get(fileUrl, { headers }, (res) => {
          const savePath = path.join(process.cwd(), filePath);

          // Remove the existing file if it already exists
          if (fs.existsSync(savePath)) {
            fs.unlinkSync(savePath);
          }

          const fileStream = fs.createWriteStream(savePath);

          res.pipe(fileStream);

          fileStream.on('finish', () => {
            console.log(`Downloaded image: ${filename}`);
          });

          fileStream.on('error', (error) => {
            console.error(`Failed to download image: ${filename}`);
          });
        });
      });
    } else {
      console.error('API request failed.');
    }
  });
}).on('error', (error) => {
  console.error('Error occurred:', error);
});
