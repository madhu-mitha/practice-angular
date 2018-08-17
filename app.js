(function(){

    'use strict';
    angular.module("myApp",[])

    .controller("myController",myController)
    .filter("loves",FactoryFunction);

    myController.$inject = ['$scope','$filter','lovesFilter']  //protect it from minification
    function myController($scope,$filter,lovesFilter,$injector){
        $scope.firstname="Madhu";
        $scope.lastname="Mitha";
        $scope.color="red";
        $scope.fullname = function(){
            return $scope.firstname+" likes "+$scope.lastname;
        };

        $scope.fullname_love = function(){
            var msg= $scope.firstname+" likes "+$scope.lastname;
            msg = lovesFilter(msg);
            return msg;

        };

        $scope.upper=function(){
            var upCase= $filter('uppercase');
            $scope.firstname= upCase($scope.firstname);
        }

       // console.log($injector.annotate(myController));
    }

    //custom filter
    function FactoryFunction() {
        return function(input) {
            input= input || "";
            input= input.replace("likes","loves");
            return input;
        };
    }

})();