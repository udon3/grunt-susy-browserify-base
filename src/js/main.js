//name the dependencies in the require() function The require() is a node.js function used to include node packages as dependencies.
//the keyword 'require' returns an object, which references the value of 'module.exports' for a given file.
//can be a plugin library like underscore (and jquery, with browserify-shim), 
//as well as custom modules
//c.f. also: https://thesocietea.org/2014/08/building-javascript-with-grunt-bower-browserify/
var _ = require('underscore'),
	names = require('./names.js'),
	findSuperman = require('./findsuperman.js'),
	testJquery = require('./jquerytest.js');

//step 1 of tutorial: demo how underscore can be included via the require() function
//var names = ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'],
// 	otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

//test that underscores is usable.
// _.each([names, otherNames], function(nameGroup){
// 	findSuperman(nameGroup);
// });

//step 2 of tutorial - refactor so that data is now in a custom module with module.exports
// findSuperman(names());

// function findSuperman(values){
// 	_.find(values, function(name){
// 		if (name === 'Clark Kent'){
// 			console.log('superman!');
// 		} else {
// 			console.log('not superman');
// 		}
// 	});
// }

//step 3 of tutorial - further refactoring - now findSuperman function is a module
//we could remove the line importing unserscore now, as not used here directly, and is being imported in findsuperman module.
if (findSuperman(names())){
	document.write('We have found Superman!');
} else {
	document.write('No Superman here');
}


//jquery test
testJquery();