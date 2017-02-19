'use strict';

angular.module('myNewAppApp')
  .controller('ConfigmenuCtrl', function ($scope,$http,$modal,ConfigureServ) {
    $scope.conf = {};
    $scope.visible = false;
    $scope.semana = [];
    $scope.message = false;
    var categoria = {ident:"Nueva Categoria",menu:[],setIdent:function(ident){this.ident = ident;}};


    $scope.CloseMessage = function(){
      $scope.message = false;
    };

    $http.get('/api/configs').success(function(conf){
      $scope.conf = conf;
      //socket.syncUpdates('config', $scope.conf);
    });

    $http.get('/api/menus/semana').success(function(menus){
      $scope.semana = menus;
      //socket.syncUpdates('menu', $scope.semana);
    });

   $scope.Delete = function(cate){
      ConfigureServ.Delete(cate.pos).success(function(){
        $http.get('/api/menus/semana').success(function(menus){
          $scope.semana = menus;
          socket.syncUpdates('menu', $scope.semana);
        });
      });
    };


    $scope.setId=function(id){
      ConfigureServ.SetDiaSemanaId(id);
    };


    // Prara ingrasar una nueva categoría
    $scope.NewCategoriaModal = function(diasemana){
      ConfigureServ.SetDiaSemanaId(diasemana._id);
      var modalInstance = $modal.open({
        templateUrl: 'app/configmenu/categoria.html',
        controller:'UpdateMenuCtr',
        resolve:{
          categoria: function(){
            return {};
          }
        }
      });
      modalInstance.result.then(function(selectedItem){
        ConfigureServ.GetValue().pos = diasemana.categorias.length;
        diasemana.categorias.push(ConfigureServ.GetValue());
        $http.put('/api/menus/'+ diasemana._id,diasemana);
      });
    };

    // Para editar un menú
    $scope.editMenu = function(cate){
      ConfigureServ.SetCate(cate);
      var modalInstance = $modal.open({
        templateUrl: 'app/configmenu/arraymenu.html',
        controller:'UpdateArrayMenu',
        resolve:{
          arraymenu: function(){
            return cate;
          }
        }
      });
    };
    // Para ingresar un nuevo menú
    $scope.NewMenuModal = function(cate){
      ConfigureServ.SetCate(cate);
      var modalInstance = $modal.open({
        templateUrl: 'app/configmenu/newmenu.html',
        controller:'NewMenuCtr',
        resolve:{
          newmenu: function(){
            return {};
          }
        }
      });
    };
  }).controller('UpdateMenuCtr', function ($scope,$modalInstance,ConfigureServ) {
    $scope.visible = false;
    $scope.categoria = {pos:0,ident:"",menu:[]};
    $scope.MostrarBoton = function(){
      $scope.visible = true;
    };

    $scope.addCategoria = function(){
      ConfigureServ.IngresarValor($scope.categoria);
      $modalInstance.close();
    };

    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };
  })
  .controller('UpdateArrayMenu', function ($scope,$modalInstance,ConfigureServ,Upload) {
    $scope.visible = false;
    $scope.i = 0;
    $scope.ident = ConfigureServ.getCate().ident;
    $scope.nombre = ConfigureServ.getCate().menu[$scope.i].name;
    $scope.precio = ConfigureServ.getCate().menu[$scope.i].precio;
    $scope.foto = ConfigureServ.getCate().menu[$scope.i].foto;
    $scope.descripcion = ConfigureServ.getCate().menu[$scope.i].descripcion;
    $scope.MostrarBoton = function(){
      $scope.visible = true;
    };

    // upload later on form submit or something similar
    $scope.submit = function() {
      if ($scope.file) {
        $scope.upload($scope.file);
      }
    };
    // upload on file select or drop
    $scope.upload = function (file) {
      file.name = ConfigureServ.getCate().menu[$scope.i]._id;
      Upload.upload({
          url: '/api/menus/upload/'+ConfigureServ.getCate().menu[$scope.i]._id,
          method: 'POST',
          data: {
            key: file.name,
            "Content-Type": file.type != '' ? file.type : 'application/octet-stream', // content type of the file (NotEmpty)
            filename: file.name, // this is needed for Flash polyfill IE8-9
            file: file
          }
      });
    };

    $scope.Next = function(){
      if((ConfigureServ.getCate().menu.length-1) != $scope.i){
        ConfigureServ.getCate().menu[$scope.i].name = $scope.nombre;
        ConfigureServ.getCate().menu[$scope.i].precio = $scope.precio;
        ConfigureServ.getCate().menu[$scope.i].descripcion = $scope.descripcion;
        $scope.i = $scope.i+1;
        $scope.nombre = ConfigureServ.getCate().menu[$scope.i].name;
        $scope.precio = ConfigureServ.getCate().menu[$scope.i].precio;
        $scope.descripcion = ConfigureServ.getCate().menu[$scope.i].descripcion;
      }
    };

    $scope.Previous = function(){
      if(!($scope.i <= 0)) {
        ConfigureServ.getCate().menu[$scope.i].name = $scope.nombre;
        ConfigureServ.getCate().menu[$scope.i].precio = $scope.precio;
        ConfigureServ.getCate().menu[$scope.i].descripcion = $scope.descripcion;
        $scope.i = $scope.i - 1;
        $scope.nombre = ConfigureServ.getCate().menu[$scope.i].name;
        $scope.precio = ConfigureServ.getCate().menu[$scope.i].precio;
        $scope.descripcion = ConfigureServ.getCate().menu[$scope.i].descripcion;
      }
    };
    var eliminar = false;
    $scope.DeleteArray = function(){
      ConfigureServ.getCate().menu.splice($scope.i,1);
      $scope.nombre = "";
      $scope.precio = "";
      $scope.file = "";
      $scope.descripcion = "";
      eliminar = true;
    };

    $scope.updateCategoria = function(){
      var cate = ConfigureServ.getCate();
      if(!eliminar){
        cate.ident = $scope.ident;
        cate.menu[$scope.i].name = $scope.nombre;
        cate.menu[$scope.i].precio = $scope.precio;
        cate.menu[$scope.i].foto = $scope.file.name;
        cate.menu[$scope.i].descripcion = $scope.descripcion;
      }
      var obj = {posarray:0,cate:{}};
      obj.posarray = $scope.i;
      obj.cate = cate;
      ConfigureServ.UpdateCate(obj);
      $modalInstance.close();
    };

    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };
  })
  .controller('NewMenuCtr', function ($scope,$modalInstance,ConfigureServ) {
    $scope.visible = false;

    $scope.MostrarBoton = function(){
      $scope.visible = true;
    };
    $scope.pushMenu = function(){
      var cate = ConfigureServ.getCate();
      var menu = {name:$scope.nombre,precio:$scope.precio,descripcion:$scope.descripcion,foto:$scope.file.name};
      cate.menu.push(menu);
      var obj = {posarray:0,cate:{}};
      obj.posarray = cate.menu.length;
      obj.cate = cate;
      ConfigureServ.UpdateCate(obj);
      $modalInstance.close();
    };
    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };
  });
