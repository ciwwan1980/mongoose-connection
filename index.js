const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// // User
const usersSchema = new Schema({  message: String});
const User = mongoose.model("User", usersSchema);

// // comments
const commentsSchema = new Schema({  
  message: String,
  // user:usersSchema
  });
const Comment = mongoose.model("Comment", commentsSchema);
""
mongoose
  .connect("mongodb://localhost:27017/relations2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(main)
  .catch((err)=>{
    console.log("erorrrr")
    console.log(err)
  })
  .finally(() => mongoose.connection.close())

async function main() {
  const user= await new User({ name: "Ajil"}).save();
  await new Comment({message: "Hi", user:user}).save();

}