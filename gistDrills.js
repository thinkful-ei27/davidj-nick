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


//Drill 5