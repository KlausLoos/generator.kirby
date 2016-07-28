var angular = require('angular');

module.exports = angular.module('otbs').controller('ListCtrl', ListCtrl);

ListCtrl.$inject = ['$scope', '$http', '$window', '$sce'];

function ListCtrl($scope, $http, $window, $sce){
  $scope.filter = {};
  $scope.list = [];
  $scope.showList = false;

  $scope.$watch("type", function(){
    if($scope.type !== ''){
      var promise = $http.get("/api/"+$scope.type).then(function(result) {
        $scope.list = result.data;
          console.log($scope.list);
        if($scope.list.length > 0) $scope.showList = true;
      });
    }
  });

  $scope.filterByProperties = function (item) {
    // Use this snippet for matching with AND
    var matchesOR = true;
    for (var prop in $scope.filter) {
      if (noSubFilter($scope.filter[prop])) continue;
      if (!$scope.filter[prop][item.content[prop]]) {
          matchesOR = false;
      } else {
          matchesOR = true;
          break;
      }
    }
    return matchesOR;
  };

  $scope.open = function(uri){
    $window.open('/'+uri,'_self');
  };

  function noSubFilter(subFilterObj) {
      for (var key in subFilterObj) {
          if (subFilterObj[key]) return false;
      }
      return true;
  }

}