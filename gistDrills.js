/*
//Drill 1
let loaf = {
  flour: 300,
    water: 210,
    hydration: () => {
    	return (loaf.water / loaf.flour) * 100;
    }
};
for (const key in loaf){
  console.log(key);
}

console.log(loaf.hydration());

//Drill 2
let drillObject = {
  foo: "Bilbo",
  bar: "Baggins",
  fum: "Three",
  quux: "Feet",
  span: "Tall"
};

for(const key in drillObject){

	console.log(drillObject[key]);
	
}
//Drill 3
//Drill 3
//Drill 3
//Drill 3
let drillObject2 = {
	meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}
console.log(drillObject2.meals[3]);

//Drill 4

let object1 = {
  name: 'David Johnson',
  jobTitle: 'Master of Arguing In A Classy Manner',
  boss:'Comrade Ducky-san'
};

let object2 = {
  name: 'Nick Justin',
  jobTitle: 'Swift Wit Regarding Languages',
  boss:'Comrade Ducky-san'
};

let object3 = {
  name: 'Santa Claus',
  jobTitle: 'Santa',
  boss:'Comrade Ducky-san'

};

let object4 = {
  name: 'Comrade Ducky-san',
  jobTitle: 'Rubber Ducky Stand-In'
};

let objectArray = [object1, object2, object3, object4];

for(x = 0; x < objectArray.length; x++){
  if (objectArray[x].boss === undefined) {
    console.log(`${objectArray[x].jobTitle} ${objectArray[x].name} doesn't report to anybody`);
  } else {
  console.log(`${objectArray[x].jobTitle} ${objectArray[x].name} reports to ${objectArray[x].boss}`)
  }
}

*/
//Drill 5 is above. Updated Drill 4

//Drill 6 coded message: 'craft block argon meter bells brown croon droop'
//a => 2 b => 3 c => 4 d => 5 all others => ' '
/*
const objectCypher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decode(word){
  if(objectCypher[word.charAt(0)] === undefined){
    return ' ';
  } else return word[objectCypher[word.charAt(0)] - 1];
}

let randomWords = 'craft block argon meter bells brown croon droop';

function decodeWords(stringOfWords){
  let tempString = stringOfWords.split(' ');
  let code = '';
  for(x = 0; x < tempString.length; x++){
    code = code + decode(tempString[x]);
  }
  return code;
}

console.log(decodeWords(randomWords));
*/
/*
function createCharacter(Name, nickName, race, origin, attack, defense) {
  return {
    name: Name,
    nickName: nickName,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(char) {
      let x = this.attack - char.defense;
      let y = char.attack - this.defense;
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  }
}
let characterArray = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6)
                      ,createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1)
                      ,createCharacter ('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2)
                      ,createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8)
                      ,createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
                      ,createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 0, 0)];
function isAragorn(character) { 
  return character.nickName === 'aragorn';
}
characterArray.find(isAragorn).describe();

let hobbitArray = characterArray.filter(word => word.race === 'Hobbit');
console.log(hobbitArray);
let strongCharArray = characterArray.filter(attack => attack.attack > 5);
console.log(strongCharArray);
//long discusion was had about the weapon thing.
*/

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  let findFunction = arr.find( (element) => { 
    /*console.log('Element ID is ' + element.id + 'Query ID is' + query.id);
    console.log('Element name is ' + element.name + 'Query name is' + query.name);
    console.log('Element squad is ' + element.squad + 'Query squad is' + query.squad);*/
  
    if (element.id === query.id) {
      return true;
    } else if (element.name === query.name) {
      return true;
    } else if (element.squad === query.squad) {
      return true;
    } else {
      return false;
    }
  });
  if(findFunction === undefined){
    return null;
  } else return findFunction;
}

console.log(findOne(HEROES, { id: 10}));
