angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('main/index.html',
    "<div class=row><div class=col-md-12><h1>{{message}}</h1><p>Built with Grunt, AngularJS, NodeJS, Express, SASS, MongoDB and Bower,</p></div></div>"
  );


  $templateCache.put('main/indexDiffer.html',
    "<div class=row><div class=col-md-12><h1>{{message}}</h1><p>It highligths angular routing via app.</p></div></div>"
  );

}]);
