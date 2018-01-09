var app = angular.module('whattoeat',[]);
app.controller('MainCtrl', function( $scope ){
    $scope.whattoeat=null
    $scope.foods = [
        'hummus',
        'chicken',
        'fruits',
        'egg',
        'steak',
        'yourgort',
        'tomato',
        'cheese',
        'salmon'
    ]

    var random = function( max, min ){
        return Math.floor((Math.random() * 1000) % ( max - min + 1) + min)
    }

    $scope.randomise = function(){
        var num_food = random( $scope.foods.length-1, 0 )
        var foods = []
        for( var i=0; i<num_food; i++ ){
            foods.push( $scope.foods[ random( $scope.foods.length-1, 0 ) ] )
        }
        $scope.whattoeat = (foods)
    }
})
