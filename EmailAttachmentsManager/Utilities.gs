// Utility functions like date formatting and filtering threads.

function formatDate(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM");
}

function filterThreadsByLabels(allLabels, labelNames) {
  return allLabels.filter(label => labelNames.includes(label.getName()));
}
