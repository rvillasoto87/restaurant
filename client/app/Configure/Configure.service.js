'use strict';

angular.module('myNewAppApp')
  .factory('ConfigureServ', function ($http) {
    var Value = {};
    var cate = "";
    var Id = "";
    // Public API here
    return {

      GetValue: function(){
        return Value;
      },
      IngresarValor: function(value){
        Value = value;
      },
      SetCate:function(value){
        cate = value;
      },
      getCate:function(){
        return cate;
      },
      UpdateCate:function(obj){
        $http.put('/api/menus/cate/'+ Id,obj);
      },
      SetDiaSemanaId:function(id){
        Id = id;
      },
      Delete:function(pos){
        var pos = {pos:pos};
        return $http.put('/api/menus/delete/'+ Id,pos);
      }
    }
  });
