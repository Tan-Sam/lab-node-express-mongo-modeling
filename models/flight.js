import mongoose from 'mongoose' ;
import Passenger from './passenger';

const flightSchema = mongoose.Schema({
    from:    {type: String, required: true,},
    to:      {type: String, required: true,},
    airline: {type: String, required: true,},
    passengers: [{type:mongoose.Schema.Types.ObjectId, ref:'Passenger'}],
},{
  timestamps: true,
});

const Flight = mongoose.model('Flight',
                              flightSchema);
module.exports = Flight;
