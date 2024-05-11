/**
 * Processes email threads to find unread messages and manage attachments.
 * Utilizes company mappings to better name the attachments before saving.
 * @param {GoogleAppsScript.Gmail.GmailThread[]} threads - Threads to process.
 * @param {string} token - Dropbox API token.
 * @param {string} path - Dropbox folder path.
 */
function processThreads(threads,path) {
  // Fetching the company mappings from the library
      Logger.log("FetchingCompanyMapping");

  const emailToCompanyMapping = StreamlinedEmailServices.getCompanyEmailMapping();

  threads.forEach(thread => {
    let messages = thread.getMessages();
    messages.forEach(message => {
      if (message.isUnread()) {
        let attachments = message.getAttachments();
        attachments.forEach(attachment => {
          // Extract sender email from the message format "Name <email>"
          let senderEmail = message.getFrom().match(/<(.+)>/)[1];
          let companyOrSenderName = emailToCompanyMapping[senderEmail] || 'Unknown Sender';
          let receivedDate = formatDate(message.getDate());
          let newFilename = `${companyOrSenderName}_${receivedDate}`;

          console.log("Processing attachment: ", attachment.getName(), "New filename: ", newFilename);
          uploadToDropbox(attachment, path, newFilename);
          message.markRead(); // Mark the message as read after processing
        });
      }
    });
    thread.moveToArchive(); // Archive the thread
  });
        Logger.log("Finishing thread processing");

}
