import mongoose from 'mongoose' ;
import Flight from './flight';

const terminalSchema = mongoose.Schema({
  name: {type: String, required: true},
  flights: [{type:mongoose.Schema.Types.ObjectId, ref:'Flight'}],
  capacity: {type: Number, required: true},
},{
  timestamps: true,
});

const Terminal = mongoose.model('Terminal',
                                terminalSchema);
module.exports = Terminal;
