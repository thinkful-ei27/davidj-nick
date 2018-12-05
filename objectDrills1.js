function createMyObject() { //Drill 1
    return {
      foo: 'bar',
      answerToUniverse: 42,
      'olly olly': 'oxen free',
      sayHello: function() {
      return 'hello';
      }
    }
  }

    //Object updaters
  /*foo => 'foo'
bar => 'bar'
bizz => 'bizz'
bang => 'bang' */
function updateObject(obj) {
  obj['foo'] = 'foo';
  obj['bar'] = 'bar';
  obj['bizz'] = 'bizz';
  obj['bang'] = 'bang';
  return obj;
}



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

/*(function testUpdateObject() {
  var oldObj = {
    cats: 'cats',
    dogs: 'dogs',
  };
  var newObj = updateObject(oldObj);
  if (typeof newObj !== 'object') { 
    console.error('ERROR: `createMyObject` must return an object');
    return false
  }
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (!(key in newObj)) {
      console.error('ERROR: `' + key + '` not in object returned by `updateObject`');
      return false;
    }
  });
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (newObj[key] !== key) {
      console.error('ERROR: `' + key + '` should be "' + key + '" but was ' + newObj[key]);
      return false;
    }
  });
  if (!(newObj.cats === 'cats' && newObj.dogs === 'dogs')) {
    console.error('ERROR: your function doesn\'t preserve existing key/value pairs');
    return false;
  }
  console.log('SUCCESS: `updateObject` works correctly!');
  
})();*/

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',

    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
  };
  return person;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

/*(function testPersonMaker() {
  var person = personMaker();
  if (typeof person !== 'object') {
    console.error('ERROR: `personMaker` must return an object');
    return false;
  }
  if (typeof person.fullName !== 'function') {
    console.error('ERROR: `fullName` must be a method');
    return false;
  }
  if (person.fullName() !== 'Paul Jones') {
    console.error(
      'ERROR: The value for `fullName` should be "Paul Jones" but was ' +
        person.fullName()
    );
    return false;
  }
  person.firstName = 'Lisa';
  person.lastName = 'Simpson';
  if (person.fullName() !== 'Lisa Simpson') {
    console.error(
      '`personMaker` is not using self reference correctly. ' +
        'When firstName set to "Lisa" and lastName set to "Simpson", ' +
        'should return "Lisa Simpson" but returned ' +
        person.fullName()
    );
  }
  console.log('SUCCESS: `updateObject` works correctly!');
})();*/