//module.exports is how node.js exposes an object for use outside of the encapsulation (module)
//the below values can be accessed from another module via node's require function:
//e.g. var names = require('./names.js'); console.log(names);

module.exports = function(){

	return ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent', 'Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];
}