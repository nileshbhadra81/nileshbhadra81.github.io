angular.module('users').directive('displayHeadlines', function () {
    return {
        restrict: 'A',
        replace:true,

        templateUrl: 'src/users/view/display-headlines.html',
      
        link: function (scope, elem, attrs) {           
        
        }
    }
})
