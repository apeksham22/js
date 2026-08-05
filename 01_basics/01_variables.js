const accountId = 123456789 //const is used for constatnts
let accountEmail = "apeksha@google.com"
var accountPassword = "54321"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
//let is used for variables 
//var is not used because of issue in block and functional scope

accountEmail = "am@am.com"
accountPassword = "232323"
accountCity = "Delhi"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])