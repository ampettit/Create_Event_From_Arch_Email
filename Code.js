function createEventFromArchEmail() {
  // reads schedule emails from Tom and creates a calendar event for it.
  // maybe it creates an .ics in drive to open? 
  
  var threads = GmailApp.getInboxThreads();
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getFirstMessageSubject().indexOf("Schedule") > -1) {
      Logger.log(threads[i].getFirstMessageSubject());
    }
  }
  
  
  
  /* 
  // Get the first message in the first thread of your inbox
  var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
  // Get its ID
  var messageId = message.getId();
  // Now fetch the same message using that ID.
  var messageById = GmailApp.getMessageById(messageId);
  // Should always log true as they should be the same message
  Logger.log(message.getSubject() == messageById.getSubject());
  */
  
}
