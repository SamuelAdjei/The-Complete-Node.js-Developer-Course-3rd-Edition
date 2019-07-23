// Challenge : Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data 
// 4. Test your work by viewing data in the JSON file


const fs = require('fs');


// Step 1
const dataBuffer = fs.readFileSync('1json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
// Step 2
user.name = 'Gunther'
user.age = 54
// Step 3
userJSON = JSON.stringify(user)
fs.writeFileSync('1json.json', userJSON)
// Step 4
console.log(userJSON)
