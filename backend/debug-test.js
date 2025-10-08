const { generateCards } = require('./src/services/GeminiService');

console.log('Testing generateCards function...');

try {
  // This should work
  console.log('generateCards is defined:', typeof generateCards);

  // Test the actual function call
  generateCards('test', 'test').then(result => {
    console.log('Success! Generated cards:', result.length);
  }).catch(error => {
    console.log('Error calling generateCards:', error.message);
  });
} catch (error) {
  console.log('Error importing or calling generateCards:', error.message);
}
