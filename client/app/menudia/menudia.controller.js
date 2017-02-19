'use strict';

angular.module('myNewAppApp')
  .controller('MenudiaCtrl', function ($scope,$modal,$http,PostPay) {
    $scope.menudia = {};
    $scope.confi = {};
    $scope.compra = false;

    $http.get('/api/menus').success(function(menus){
      $scope.menudia = menus;
        socket.syncUpdates('menu', $scope.menudia);
    });

    $scope.ShowCate = function(obj){
      if(obj != null){ return true;}else return false;
    };

    $scope.comprar = function(){
      $scope.compra = true;
    };

    $scope.mostrar = function(){
      if($scope.compra)
      return true;
      else return false;
    };

    var verificarCheckedActivo = function(callback){
      var value = false;
      $scope.menudia.categorias.forEach(function(item,i){
        item.menu.forEach(function(itm,e){
          if(itm.seleccionado)
            value = true;
        });
      });
      callback(value);
    };

    $scope.ShowModal = function(){
      verificarCheckedActivo(function(value){
        if(value){
          var modalInstance = $modal.open({
            templateUrl: '../app/menudia/pay.html',
            controller:'PayCtr',
            resolve:{
              pay: function(){
                PostPay.IngresarValor($scope.menudia);
                return $scope.pay;
              }
            }
          });
        }
      });
    };

  })
  .controller('PayCtr', function ($scope,$modalInstance,$http,PostPay) {
    var post = function(callback){
      $http.post('/api/pays',{pay:$scope.pay,menu:PostPay.GetValue()}).success(function(){
        PostPay.LimpiarCheckbox();});
      callback();
    };
    $scope.addPay = function() {
      post(function(){
        PostPay.checkout("PayPal", "fidelvillanueva10@gmail.com");
        $modalInstance.close();
      });
    };
    $scope.cancel = function(){
      PostPay.LimpiarCheckbox();
      $modalInstance.dismiss('cancel');
    };

    $scope.visible = function(){
      return false;
    };
  });

