import mongoose from 'mongoose' ;

const passengerSchema = mongoose.Schema({
  firstName: {type: String, required: true,},
  lastName : {type: String, required: true,},
  dob: {type: Date, required: true,},
},{
  timestamps: true,
});

const Passenger = mongoose.model('Passenger',
                                 passengerSchema);
module.exports = Passenger;
