function make_shirrt(size: string = 'large', message: string = 'I love TypeScript') {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
  }
  make_shirrt();
  make_shirrt('medium');
  make_shirrt('small', 'Hello, World!');