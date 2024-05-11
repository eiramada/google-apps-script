# Gmail Attachments to Dropbox Transfer

This script facilitates the automatic downloading of attachments from Gmail and uploading them directly to Dropbox. It is designed to streamline the process of managing email attachments by automating their storage to Dropbox. 

## Features

- **Automated Download**: Automatically downloads all attachments from specified Gmail threads.
- **Selective Processing**: Only processes threads labeled with specified user labels, ensuring that only relevant attachments are handled.
- **Dropbox Upload**: Uploads attachments to a designated Dropbox folder, organizing them based on the sender's information and the date received.
- **Email Management**: Marks emails as read and archives threads once attachments are processed to keep your inbox clean.
- **Secure**: Utilizes OAuth for secure access to Gmail and Dropbox APIs, ensuring your data remains protected.

## Configuration

Before running the script, ensure you configure the following:

1. **Gmail Labels**: Set the labels that will be used to filter relevant email threads in the ConfigManager.
2. **Dropbox API Token**: Obtain and configure your Dropbox API token to enable file uploads.
3. **Folder Path**: Specify the path in Dropbox where the files will be uploaded.

You can set these configurations in the ConfigManager script, which centralizes and simplifies managing these settings.

## Installation

1. Clone the Repository: Clone the GitHub repository to your local machine.
2. Google Apps Script Setup:
   - Navigate to Google Apps Script and create a new project.
   - Copy the code from the cloned repository into the new project.
   - Set the script properties for your configuration in the Apps Script environment.

3. Dropbox API Configuration:
   - Create an app in the Dropbox App Console.
   - Obtain the necessary credentials and set the access permissions to files and folders.

## Usage

Once installed, the script can be executed manually from the Google Apps Script interface or triggered to run at scheduled intervals using Google's triggers.

