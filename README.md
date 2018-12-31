# MuParser
A simple regex powered text parser.
```JavaScript
Parser = require('muparser');
parser = new Parser()

// Examples. 

// ANSI terminal escape code substitution.
parser.addRule(/%[CcXx]b/, '\u001b[34m');

parser.parse('%cbThis text will be blue!');
```