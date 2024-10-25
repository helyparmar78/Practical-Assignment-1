const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Function to create a zip archive of a folder
function zipFolder(folderPath, zipFilePath) {
  const output = fs.createWriteStream(zipFilePath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Compression level
  });

  output.on('close', () => {
    console.log(`Zip file created successfully! Total bytes: ${archive.pointer()}`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  // Set the destination file for the zip output
  archive.pipe(output);

  // Append files from the specified folder to the archive
  archive.directory(folderPath, false);

  // Finalize the archive
  archive.finalize();
}

// Usage example
const folderToZip = path.join(__dirname, 'folder_name'); // Replace with your folder path
const outputZipPath = path.join(__dirname, 'output.zip'); // Replace with desired zip file name

zipFolder(folderToZip, outputZipPath);
