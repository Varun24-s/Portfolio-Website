// Function to append form data to Google Sheet
export const appendToSheet = async (formData) => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5YaIcKsot3yTiHJ34k7gIzOEQ5nN5JmRfj0SyROXAjBcnBoKzgHFDyEagHUBAo3DWvQ/exec';
  
  try {
    // Format the data as form data
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
    form.append('timestamp', new Date().toISOString());

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // This is important for Google Apps Script
      body: form
    });

    // Since no-cors mode doesn't give us response details, we'll assume success if no error is thrown
    console.log('Form submitted successfully');
    return true;
  } catch (error) {
    console.error('Error sending form data:', error.message);
    return false;
  }
} 