require('dotenv').config();
const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Error connecting to Database", error);
  });

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  password: String,
  username: String
});

const accountschema = new mongoose.Schema({
  userId : { type : mongoose.Schema.ObjectId , ref:'Novausers'},
  balance : Number,
})

const NovaUser = mongoose.model("Novausers", UserSchema);
const Account = mongoose.model('Account',accountschema)

module.exports = {
  NovaUser,
  Account
};
