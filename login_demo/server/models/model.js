var userSchema = mongoose.Schema({
  name:{type: String, require: true, minlenght:4, maxlength:100}
},{timestamps:true})

mongoose.model('User', userSchema)
