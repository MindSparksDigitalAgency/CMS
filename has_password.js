const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('mindSparks@123654', 10);
console.log(hash);