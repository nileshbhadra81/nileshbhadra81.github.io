(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q','$http', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q,$http){
    var users;
    
    var loadAllNews = function(){
      var promise = $http.get('src/JSON/clientNewsDetails.json').success(function(data){
        });

        return promise;
    }
    
    return {
      loadAllNews : loadAllNews
    };
  }

})();
