// Compiled using ts2gas 3.6.4 (TypeScript 4.2.4)
function getDateOfNewMatch() {
    var mySS = SpreadsheetApp.getActiveSpreadsheet();
    var dateCell = mySS.getRange("E5");
    var date = dateCell.getValue();
    return date;
}

function isThereAnotherMatchOnDate(date) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var calendarSS = ss.getSheetByName("calendario-prueba");
    // Get values from the whole row 5
    var data = calendarSS.getRange("5:5").getValues();
    var dates = cleanDatesRow(data);
    const dateWithoutTime = date.toLocaleDateString()
    Logger.log("dates + ", JSON.stringify(dates));
    Logger.log("date + ", JSON.stringify(date));
    return !!date;
}
function getColumnWithTheNearestMatchDate(dates) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var formSS = ss.getSheetByName("formulario-reserva");
    var newMatchDate = formSS.getRange("E5").getValue();
    // Compare already saved dates with new date
    var indexOfDateBiggerThanNewDate = dates.findIndex(function (oldMatchDate) { return oldMatchDate > newMatchDate; });
}
function cleanDatesRow(datesRow) {
    var dataWithoutRowName = datesRow[0].slice(1);
    var dates = dataWithoutRowName.filter(function (value) { return !!value; });
    return dates;
}
function getOtherSavedMatchDates() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var calendarSS = ss.getSheetByName("calendario-prueba");
    // Get values from the whole row 5
    var data = calendarSS.getRange("5:5").getValues();
    var dates = cleanDatesRow(data);
    return dates;
}
