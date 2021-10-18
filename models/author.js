const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const authorSchema = new Schema({
    firstName:{
        type:String,
        required: true,
        maxLength:100
    },
    familyName:{
        type:String,
        required: true,
        maxLength:100
    },
    dateOfBirth:{
        type:Date
    },
    dateOfDeath:{
        type:Date
    }

});

authorSchema.virtual('fullName').get(() => {
    return this.familyName+', '+this.firstName;
});

authorSchema.virtual('lifespan').get(() => {

    let lifetime = '';
  if (this.dateOfBirth) {
    lifetime = this.dateOfBirth.toString();
  }
  lifetime += ' - ';
  if (this.dateOfDeath) {
    lifetime = this.dateOfDeath.toString();
  }
  return lifetime;

});

authorSchema.virtual('url').get(() => {
    return '/catalog/author/'+this._id;
});

module.exports=mongoose.model('Author',authorSchema);

