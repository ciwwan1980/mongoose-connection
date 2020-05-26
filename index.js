const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // User
const usersSchema = new Schema({ name: String});
const User = mongoose.model("User", usersSchema);

// // comments
const commentsSchema = new Schema({  
  message: String,
   //relation between Comment and User
  user:usersSchema
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

  //relation between Comment && User by ObjectId
  await new Comment({message: "Hi", user:user}).save();

const update= await User.update({_id:"5ecda623a056eb42e80fa926"}, {name:"newAjil"}).exec(); 
console.log(update)

}