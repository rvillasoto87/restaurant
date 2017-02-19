'use strict';
angular.module( 'confirmAction', ['ui.bootstrap'] )
.directive('ngReallyDo', ['$modal',
  function($modal) {

    var ModalInstanceCtrl = function($scope, $modalInstance, message) {
			$scope.message = message;
      $scope.ok = function() {
        $modalInstance.close();
      };

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };
    };

    return {
      restrict: 'A',
      scope:{
        ngReallyDo:'&'
      },
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var modalInstance = $modal.open({
						templateUrl: 'components/confirm/confirm.tpl.html',
            controller: ModalInstanceCtrl,
						windowClass: 'confirm-modal-window',
						resolve:{
							message: function(){
								return attrs.ngReallyMessage || 'Are you sure ?';
							}
						}
          });

          modalInstance.result.then(function() {
            scope.ngReallyDo();
          }, function() {
            //Modal dismissed
          });
        });
      }
    };
  }]);
