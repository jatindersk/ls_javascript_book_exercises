let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

//console.log(byteSequence.includes('x'));

//let splitArray = byteSequence.split('');

byteSequence.split('').forEach(num => {
  if (num === 'X' || num === 'x') return console.log(true);
  console.log(false);
});