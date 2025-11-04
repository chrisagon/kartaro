const isNodeRuntime = typeof process !== 'undefined' && process.versions?.node;

module.exports = isNodeRuntime
  ? require('./PdfService.node')
  : require('./PdfService.worker');
