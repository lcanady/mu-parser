# MuParser
A simple regex powered text parser system. When required in didfferent parts of your code, it retains a list of parsers created.
```JavaScript
parsers = require('muparser');

// create a new parser and add an ANSI terminal escape code substitution.
parser('color').addRule(/%[CcXx]b/, '\u001b[34m');

//later in another module...
parsers = require('muparser');
parser('color').parse('%cbThis text will be blue!');
```