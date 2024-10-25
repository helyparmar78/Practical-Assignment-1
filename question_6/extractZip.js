const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

// Function to extract a zip file to a specific folder
async function extractZip(zipFilePath, extractToFolderPath) {
  fs.createReadStream(zipFilePath)
    .pipe(unzipper.Extract({ path: extractToFolderPath }))
    .on('close', () => console.log('Extraction complete!'))
    .on('error', (err) => console.error('Error during extraction:', err));
}

// Specify the zip file path and output folder path
const zipFilePath = path.join(__dirname, 'file.zip'); 
const extractToFolderPath = path.join(__dirname, 'extracted_folder');

// Call the extraction function
extractZip(zipFilePath, extractToFolderPath);
