const superhero = {
    id: 1,
    name: 'peter',
    app: 'parker',
    alias: 'spiderman'
};

// keys
// entries
// values

console.log(Object.keys(superhero));
console.log(Object.values(superhero));
console.log(Object.entries(superhero));

const keys = Object.keys(superhero);
for(let i = 0; i < keys.length; i++) {
  console.log(superhero[keys[i]]);
}

for (const property in superhero) {
    console.log(`property: ${superhero[property]}`);
}