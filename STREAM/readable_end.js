const readable = getReadableStreamSomehow();
readable.setEncoding('utf8')
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
readable.on('end', () => {
  console.log('There will be no more data.');
});