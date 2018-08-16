(function(){

    'use strict';
    angular.module("myApp",[])

    .controller("myController", function($scope){
        $scope.firstname="Madhu";
        $scope.lastname="Mitha";
        $scope.fullname = function(){
            return $scope.firstname+" "+$scope.lastname;
        };

    });

})();