const PdfService = require('./src/services/PdfService');

const testCollection = {
  id: 'test',
  name: 'Test Collection',
  cards: [
    {
      title: 'Test Card 1',
      description: 'Test Description 1',
      icon: '*',
      category: 'Test',
      image: null
    },
    {
      title: 'Test Card 2',
      description: 'Test Description 2',
      icon: '*',
      category: 'Test',
      image: null
    }
  ]
};

console.log('Testing PdfService...');

PdfService.generatePdf(testCollection)
  .then(buffer => {
    console.log('PDF generated successfully, size:', buffer.length, 'bytes');
    require('fs').writeFileSync('test-output.pdf', buffer);
    console.log('PDF saved as test-output.pdf');
  })
  .catch(error => {
    console.error('PDF generation failed:', error.message);
    console.error('Stack trace:', error.stack);
  });
