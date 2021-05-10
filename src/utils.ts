
function getDateOfNewMatch(): Date {
  const mySS = SpreadsheetApp.getActiveSpreadsheet();
  const dateCell = mySS.getRange("E5")
  const date: Date = dateCell.getValue();
  
  return date
}

const getSheetOfTheNewMatchDay = (date: Date) => {
  
}

const isThereAnotherMatchOnDateTime = (date: Date): boolean => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  return null
}

function isThereAnotherMatchOnDate(date: Date): boolean {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const calendarSS = ss.getSheetByName("calendario-prueba");
  
  // Get values from the whole row 5
  const data = calendarSS.getRange("5:5").getValues();
  const dates = cleanDatesRow(data)

  Logger.log("dates + ", JSON.stringify(dates))
  Logger.log("date + ", JSON.stringify(date))
  
  return !!date
}

function getColumnWithTheNearestMatchDate (dates) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const formSS = ss.getSheetByName("formulario-reserva");
  const newMatchDate = formSS.getRange("E5").getValue();

  // Compare already saved dates with new date
  const indexOfDateBiggerThanNewDate = dates.findIndex(oldMatchDate => oldMatchDate > newMatchDate)
}


function cleanDatesRow(datesRow: any[]): Date[] {
  const dataWithoutRowName = datesRow[0].slice(1);
  const dates = dataWithoutRowName.filter(value => !!value)
  return dates
}

function getOtherSavedMatchDates() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const calendarSS = ss.getSheetByName("calendario-prueba");
  
  // Get values from the whole row 5
  const data = calendarSS.getRange("5:5").getValues();
  const dates = cleanDatesRow(data)
  
  return dates
}