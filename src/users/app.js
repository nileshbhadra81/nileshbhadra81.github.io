(function(){
    angular.module('starterApp', [
        'ngMessages',
        'ui.bootstrap',
        'ui.router'
       
    ]);


/*   angular
              .module('starterApp', ['ngMaterial', 'users'])
              .config(function($mdThemingProvider, $mdIconProvider){

                  $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

                      $mdThemingProvider.theme('default')
                          .primaryPalette('pink')
                          .accentPalette('red');

              });
          */
    angular
              .module('starterApp', ['ngMaterial', 'users'])       
        .config(function($mdThemingProvider,$mdIconProvider) {
         $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512);




  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '300', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '400', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '500', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': '50' // use shade A100 for the <code>md-hue-3</code> class
      

    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('purple', {
      'default': '200' // use shade 200 for default, and keep all other shades the same
    });
        
});
   

})();

