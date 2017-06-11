import mongoose from 'mongoose';
import Passenger from '../../models/passenger';
import Flight from '../../models/flight';
import Terminal from '../../models/terminal';
import Airport from '../../models/airport';
import randDateGenerator from './year1990_dates';

mongoose.connect('mongodb://localhost/airport');

const createModelInstances = {
  clear: function() {
    // <editor-fold remove previously created & saved objs
    Flight.remove({}, function(err){
      if (err) {
        console.log('Error removing flights: '+ err);
      }
      else {
        console.log('Flight removed success');
      }
    });

    Airport.remove({}, function(err){
      if (err) {
        console.log('Error removing airport: '+ err);
      }
      else {
        console.log('airport removed success');
      }
    });
    // </editor-fold>

  },
  run: function(){
    // <editor-fold  creating & saving flights
    var flight1 = this.createFlight(`CDG France`,
                                    `JFK New-York, USA`,
                                    `American Airlines`);
    flight1.save(function(err, f1){
      if (err) {
        console.log('Error saving flight: '+err);
        flight1 = null;
      }
      else {
        console.log('Success saving flight?: ');
        flight1 = f1;
        console.log({flight1});
      }
    });

    var flight2 = this.createFlight(`Heathrow UK`,
                                    `JFK New-York, USA`,
                                    `British Airways`);
    flight2.save(function(err, f2){
      if (err) {
        console.log('Error saving flight: '+err);
        flight2 = null;
      }
      else {
        console.log('Success saving flight?: ');
        flight2 = f2;
        console.log({flight2});
      }
    });

    //  </editor-fold>

    // <editor-fold creating & no-save terminal0
    let terminal = new Terminal({
      name: `Terminal 1`,
      capacity: 234324,
      flights: [flight1._id, flight2._id],
    });
    console.log({terminal});
    //  no save as Terminal is embedded in airport.
    // </editor-fold>

    // <editor-fold airport

    let airport1 = new Airport({
      Name: `JFK`,
      country: `USA`,
      opened: randDateGenerator.result(),
      terminals: terminal,
    });
    airport1.save(function(err, ap1){
      if (err) {
        console.log('Error saving airport1: '+err);
        airport1 = null;
      }
      else {
        console.log('Success saving airport? ');
        airport1 = ap1;
        console.log({airport1});
        console.log('Operation success?');
      }
    });

    //  </editor-fold>
    return;
  },
  createSaveFlightAsync: function(fromWhere,
                             toWhere,
                             onAirline,
                             onBoardPassengers){
    // console.log('creating flight');
    var query =
    Flight.create({
      from: fromWhere,
      to: toWhere,
      airline: onAirline,
      passengers: (onBoardPassengers === undefined) ?
                  [] : onBoardPassengers,
    });

    return query;
  },
  createFlight: function(fromWhere,
                         toWhere,
                         onAirline,
                         onBoardPassengers){
    let flight = new Flight({
      from: fromWhere,
      to: toWhere,
      airline: onAirline,
      passengers: (onBoardPassengers === undefined) ?
                  [] : onBoardPassengers,
    });
    return flight;
  },
  createAirport: function(apName,
                          inCountry,
                          openedOn,
                          terminal){
    let airport = new Airport({
      Name: apName,
      country: inCountry,
      opened: openedOn,
      terminals: terminal,
    });
    return airport;
  },
  saveFlight: function(flightToSave){
    flightToSave.save(function(err, flight){
      if (err) {
        console.log(err);
      }
      else {
        console.log(f2);
      }
    });
  },
};



module.exports = createModelInstances;



// flight1.save((err, flights) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(flights);
//   }
// });
//
// let flight2 = new Flight({
//   from: 'Heathrow UK',
//   to: 'JFK New-York, USA',
//   airline: 'British Airways',
//   passengers: [],
// });
// flight2.save((err, f2) => {
//   if (err) {
//     console.log('error '+ err);
//   }
//   else {
//     console.log('save ok? ' + f2);
//   }
// });
//
// const randomMonth = Math.floor(Math.random() * 12);
// let maxDays = 0;
//
//
// maxDays = Math.floor(Math.random()*maxDays);
//
// const jfkOpenedDate = new Date(1990,
//                                randomMonth,
//                                maxDays);
//
// let airport1 = new Airport({
//   opened: jfkOpenedDate,
// });
//
// let terminal1 = new Terminal({
//   capacity: 234324,
//   flights: [flight1._id,
//             flight2._id],
// });
//
// airport1.terminals.push(terminal1);
// airport1.save((err, ap1) => {
//   if (err) {
//     console.log('Save airport err. ' + err);
//   }
//   else {
//     console.log('Save airport success? ' + ap1);
//   }
// });
//
