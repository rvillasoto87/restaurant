/**
 * Created by Raúl on 20/10/2015.
 */

exports.convertDiaSemana = function(dia,callback){
  var semana = [{dia:"Monday",No:1},{dia:"Tuesday",No:2},{dia:"Wednesday",No:3},{dia:"Thursday",No:4},{dia:"Friday",No:5},{dia:"Saturday",No:6},{dia:"Sunday",No:0}];
  semana.forEach(function(item,i){
    if(item.dia === dia){
      callback(item.No);
    }
  });
};
