function submitData() {
  const ss        = SpreadsheetApp.getActiveSpreadsheet();
  const formSS    = ss.getSheetByName("formulario-reserva"); //Form Sheet
  const calendar = ss.getSheetByName("calendario-prueba"); //Data Sheet

  // Get date of the new match
  const dateOfNewMatch = getDateOfNewMatch();
  // Is there another match that day?
  const thereIsAnotherDate = isThereAnotherMatchOnDate(dateOfNewMatch);
    // If there is another match that day, 
      // Get all columns with that match date
      // Get the column with the biggest and nearest match date
    // If there wasn't another match that day
      // Get the column with the biggest and nearest match date
  
  // const columnWithTheNearestMatchDate = getColumnWithTheNearestMatchDate(null);
  // // Get data from the submitted form

   
  // // Get Dates from match calendar
  // const dates = getOtherSavedMatchDates();
  //   const values = [[formSS.getRange("E5").getValue(),
  //                formSS.getRange("E7").getValue(),
  //                formSS.getRange("E9").getValue(),
  //                formSS.getRange("E11").getValue(),
  //                formSS.getRange("E13").getValue(),
  //                formSS.getRange("E15").getValue()]];

}