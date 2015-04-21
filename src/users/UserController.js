

  angular
       .module('users')
       .controller('UserController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          UserController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UserController( userService, $mdSidenav, $mdBottomSheet, $log, $q ) {
    var self = this;

    self.selected     = null;
    self.newsList       = [ ];
    self.users        = [ ];
    self.selectNews   = selectNews;
    self.toggleList   = toggleUsersList;
    self.share        = share;
    self.close        = close;
    self.selectNewsType   = onSelectedNewsType;
    self.showDetails    =0;
    self.selectedIndex   =0;

     // Load all registered users
    userService
          .loadAllNews()
          .then( function( data ) {
            users = data.data.clientDetails;
            console.log(users)
            self.users    = [].concat(users);
            self.selected = users[0].news[0];
            console.log(self.selected)
            self.newsList = [].concat(users[0].news);
         
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }



    function onSelectedNewsType(type,index){
      self.showDetails=0;
      console.log(type)
      self.newsList= type.news;
      self.toggleList();
      self.selectedIndex=index;
      console.log(self.selectedIndex)
    }


    /**
     * Select the current avatars
     * @param menuId
     */
    function selectNews ( user ) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
      /*self.toggleList();*/
      console.log(self.selected);
      self.showDetails=1;
      console.log(self.showDetails)
    }

   

    /**
     * close the Sidenav panel
     */
    function close(){
      $mdSidenav('left').close()
        .then(function(){
          $log.debug("close LEFT is done");
      });
    }


    /**
     * Show the bottom sheet
     */
    function share($event) {
        var user = self.selected;

        $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: 'src/users/view/contactSheet.html',
          controller: [ '$mdBottomSheet', UserSheetController],
          controllerAs: "vm",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function UserSheetController( $mdBottomSheet ) {
          this.user = user;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.performAction = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }    

  }


