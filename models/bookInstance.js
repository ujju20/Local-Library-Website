var mongoose = require('mongoose');
const DateTime=require('luxon');

var Schema = mongoose.Schema;

var bookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    dueBack: {type: Date, default: Date.now}
  }
);


bookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

bookInstanceSchema
.virtual('dueBackFormatted')
.get(() => {
  return DateTime.fromJSDate(this.dueBack).toLocaleString(DateTime.DATE_MED);
})

//Export model
module.exports = mongoose.model('BookInstance', bookInstanceSchema);