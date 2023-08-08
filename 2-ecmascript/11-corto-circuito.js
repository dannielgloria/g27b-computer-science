const harryPotter = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "half-blood",
    eyeColour:"green",
    hairColour:"black",
    wand : {
       wood: "holly",
       core: "phoenix feather",
       length: 11
    },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alternate_actors: [
      { name: "chris", app: "evans", age: 38, nationality: "usa" },
      { app: "evans", age: 38, nationality: "usa" },
    ],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    address: {
        street: "Private drive",
        number: "4",
        country: {
          code: 'MX',
        }
    }
};

//!undefined && !'' && !0 !false && !null
if(harryPotter
   && harryPotter.address
   && harryPotter.address.country
   && harryPotter.address.country.description
   && harryPotter.address.country.description.name
) { 
  console.log(harryPotter.address.country.description.name);  
} else {
  console.log('no data')
}

// operador de cortocircuito
if(harryPotter?.address?.country?.description?.name) { 
  console.log(harryPotter.address.country.description.name);  
} else {
  console.log('no data')
}