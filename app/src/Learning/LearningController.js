(function(){

    angular
        .module('mainApp')
        .controller('LearningController', [
            'learningService', '$scope', '$routeParams',
            LearningController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @constructor
     */
    function LearningController( learningService, $scope, $routeParams ) {

        // Keeping reference on this (scope js)
        var self = this;
        var categoryId = $routeParams.categoryId;

        $scope.selectedIndex = 0;
        $scope.nextIndex = function(){

                $scope.selectedIndex++;
            
        }
        $scope.prevIndex = function(){
            if ($scope.selectedIndex === 0){
                $scope.selectedIndex = 0;
            }
            else{
                $scope.selectedIndex--;
            }
        }        
        
        // Displaying spinner
        $scope.isOnLoad = true;

        $scope.cards = [];
        $scope.tags = [];
        $scope.tag = [];
        $scope.page = [];
        $scope.temps = [];
        var nbPages = 0;
        $scope.nbPages = 0;
        var temps = [];
        // *********************************
        // Attributes
        // *********************************

        // Load all categories
        learningService
            .loadCards( categoryId )
            .then( function( cards ) {
                $scope.cards = [].concat(cards);
                console.log(cards);
                $scope.cards.forEach(function(card){
                        temps.push(card.tags);
                });
                $scope.temps = [].concat(temps);
                console.log(temps);
                
                $scope.cards.forEach(function(){
                        nbPages++;
                });                
                
                // Hiding spinner
                $scope.isOnLoad = false;
            });
            
//        learningService
//                .loadMenu();
     
        // *********************************
        // Internal methods
        // *********************************


    }

})();
