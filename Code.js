function createEventFromArchEmail() {
  // reads schedule emails from Tom and creates a calendar event for it.
  // maybe it creates an .ics in drive to open? 

  /*
    TODOs
    * trigger on incomming mail - maybe
    * check to see if the email meets the criteria - separate function? 
    * create event - definitely separate function for reusability
    * * parse the information with split and use a multiline as a separator
    * * validate information with a switch case - maybe >> unsure if the information
        is always in the same place every time  
    * create .ics and save to drive - maybe haven't decided how yet
    * create or update log sheet based on mail ID to prevent duplicates
    * check log before run to ensure no duplicates
    * have some sort of dumping system to prevent long lists?  
    * move to arch on completion? 
  */
  
  var threads = GmailApp.getInboxThreads();
  for (var i = 0; i < threads.length; i++) {
    // add code here to ensure the correct email has been selected.  
    // maybe no "re", from Tom, contains "Ref /SK"
    // read contents and make sure it matches a pattern 
    // to make sure the right email has been selected
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
