const person ={
    name: "Fahim",
    age : 25,
    address: "Rajbari"
}

for(keys in person){
    console.log("key : ", keys, " | type : ", typeof person[keys] );
}