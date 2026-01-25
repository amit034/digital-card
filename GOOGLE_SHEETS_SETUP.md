# Google Sheets Setup Guide

This guide will help you set up Google Sheets integration for the contact form.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Digital Card Contacts" (or any name you prefer)
4. In the first row (A1, B1, C1, D1), add these headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Phone`
   - **D1**: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name || '',
      data.phone || '',
      data.message || ''
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle OPTIONS request for CORS preflight
function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (💾) and give your project a name (e.g., "Contact Form Handler")
5. Click **Deploy** → **New deployment**
6. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
7. Set these settings:
   - **Description**: "Contact form handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (this allows your website to submit data)
8. Click **Deploy**
9. **Copy the Web App URL** - this is your `googleScriptUrl`

## Step 3: Add URL to Card Data

Add the `googleScriptUrl` to your card data file (e.g., `src/cards/yael-amor.js`):

```javascript
const cardData = {
  // ... other fields ...
  googleScriptUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
}
```

## Step 4: Test

1. Build your project: `npm run build`
2. Test the form on your website
3. Check your Google Sheet - you should see new rows appearing!

## Security Note

The Apps Script is set to allow "Anyone" to access it, which is necessary for your website to submit data. The script only writes to your sheet and doesn't expose any sensitive data.

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **Data not appearing**: Verify the Apps Script URL is correct
- **Permission errors**: Make sure "Who has access" is set to "Anyone"
