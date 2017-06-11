import mongoose from 'mongoose' ;
import Terminal from './terminal';

const airportSchema = mongoose.Schema({
  Name: {type: String, required: true,},
  country: {type: String, required: true,},
  terminals:  [Terminal.schema],
  opened: {type: Date, required: true,},
},{
  timestamps: true,
});

const Airport = mongoose.model('Airport',
                               airportSchema);
module.exports = Airport;
