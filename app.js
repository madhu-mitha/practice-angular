(function(){

    'use strict';
    angular.module("myApp",[])

    .controller("myController",myController); 

    function myController($scope,$filter,$injector){
        $scope.firstname="Madhu";
        $scope.lastname="Mitha";
        $scope.fullname = function(){
            return $scope.firstname+" "+$scope.lastname;
        };

        $scope.upper=function(){
            var upCase= $filter('uppercase');
            $scope.firstname= upCase($scope.firstname);
        }

        console.log($injector.annotate(myController));
    }

})();