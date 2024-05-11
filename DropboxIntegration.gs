//Functions handling Dropbox operations.

function uploadToDropbox(file, path, filename) {
  if (file) {
    const accessToken = DropboxIntegration.refreshAccessToken();
    if (!accessToken) {
      Logger.log("Failed to obtain a valid access token.");
      return;
    }

    const options = {

      method: 'post',
      contentType: 'application/octet-stream',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Dropbox-API-Arg': JSON.stringify({
          'path': `${path}${filename}.${file.getName().split('.').pop()}`,
          'mode': 'add',
          'autorename': true
        })
      },
      payload: file.getBytes(),
      muteHttpExceptions: true
    };

    try {
      let response = UrlFetchApp.fetch('https://content.dropboxapi.com/2/files/upload', options);
      Logger.log("File upload response: " + response.getContentText());
    } catch (e) {
      Logger.log('Failed to upload file: ' + e.toString());
    }
  }
}
