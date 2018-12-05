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
