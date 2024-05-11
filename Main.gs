// Main execution logic.
function downloadAttachmentsAndUploadToDropbox() {
  Logger.log("Starting main function");

  const allLabels = GmailApp.getUserLabels();
  const relevantThreads = collectRelevantThreads(allLabels, CONFIG.labels);

  Logger.log(`Processing ${relevantThreads.length} relevant threads`);
  processThreads(relevantThreads, CONFIG.folderPath);
}

function collectRelevantThreads(allLabels, labelNames) {
  Logger.log("Collecting relevant threads based on labels");

  let relevantThreads = [];

  allLabels.filter(label => labelNames.includes(label.getName())).forEach(label => {
    let threads = label.getThreads();
    threads.forEach(thread => {
      if (!relevantThreads.some(t => t.getId() === thread.getId())) {
        relevantThreads.push(thread);
      }
    });
  });

  // Ensure all threads meet the condition of having all specified labels
  return relevantThreads.filter(thread =>
    labelNames.every(labelName => 
      thread.getLabels().map(label => label.getName()).includes(labelName)
    )
  );
}
