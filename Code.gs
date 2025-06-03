function doPost(e) {
  try {
    const spreadsheetId = '1TyVw-jHUKm9oV_lfJxCC04-u8oE8rmvHbSMEmnk1cHE';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Get form data
    const formData = e.parameter;
    
    // Append the row
    sheet.appendRow([
      formData.name,
      formData.email,
      formData.message,
      formData.timestamp
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data successfully appended'
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error for debugging in Apps Script dashboard
    Logger.log(error);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the sheet is accessible
function testAccess() {
  try {
    const spreadsheetId = '1TyVw-jHUKm9oV_lfJxCC04-u8oE8rmvHbSMEmnk1cHE';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    Logger.log('Successfully accessed sheet: ' + sheet.getName());
  } catch (error) {
    Logger.log('Error accessing sheet: ' + error.toString());
  }
} 