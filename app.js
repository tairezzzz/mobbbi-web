var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ngSanitize']);

app.config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {

    var modulesPath = 'modules';

    $routeProvider

        .when('/', {
        templateUrl: modulesPath + '/site/views/main.html',
        controller: 'SiteLogin'
    })

    .when('/item', {
            templateUrl: modulesPath + '/item/views/index.html',
            controller: 'ItemIndex',
            resolve: {
                status: function() {
                    return 1;
                }
            }
        })
        .when('/itemgrid', {
            templateUrl: modulesPath + '/item/views/item-grid.html',
            controller: 'ItemGridIndex',
            resolve: {
                status: function() {
                    return 1;
                }
            }
        })

    .when('/profile', {
        templateUrl: modulesPath + '/profile/views/index.html',
        controller: 'ProfileIndex',
        resolve: {
            status: function() {
                return 2;
            }
        }
    })

    .when('/post/published', {
        templateUrl: modulesPath + '/post/views/index.html',
        controller: 'PostIndex',
        resolve: {
            status: function() {
                return 2;
            }
        }
    })

    .when('/post/draft', {
        templateUrl: modulesPath + '/post/views/index.html',
        controller: 'PostIndex',
        resolve: {
            status: function() {
                return 1;
            }
        }
    })

    .when('/post/create', {
        templateUrl: modulesPath + '/post/views/form.html',
        controller: 'PostCreate'
    })

    .when('/post/:id/edit', {
        templateUrl: modulesPath + '/post/views/form.html',
        controller: 'PostEdit'
    })

    .when('/post/:id/delete', {
        templateUrl: modulesPath + '/post/views/delete.html',
        controller: 'PostDelete'
    })

    .when('/post/:id', {
        templateUrl: modulesPath + '/post/views/view.html',
        controller: 'PostView'
    })

    .when('/404', {
        templateUrl: '404.html'
    })

    .otherwise({
        redirectTo: '/404'
    });

    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('authInterceptor');
}]);

app.factory('authInterceptor', function($q, $window) {
    return {
        request: function(config) {
            if ($window.sessionStorage._auth && config.url.substring(0, 4) == 'http') {
                config.params = {
                    'access-token': $window.sessionStorage._auth
                };
            }
            return config;
        },
        responseError: function(rejection) {
            if (rejection.status === 401) {
                $window.location = '/';
            }
            return $q.reject(rejection);
        }
    };
});

app.value('app-version', '0.2.0');

// Need set url REST Api in controller!
app.service('rest', function($http, $location, $routeParams) {

    return {

        baseUrl: 'https://mobbbi-api-tairezzzz-1.c9.io/rest/web/',
        path: undefined,

        models: function() {
            return $http.get(this.baseUrl + this.path + location.search);
        },

        model: function() {
            if ($routeParams.expand != null) {
                return $http.get(this.baseUrl + this.path + "/" + $routeParams.id + '?expand=' + $routeParams.expand);
            }
            return $http.get(this.baseUrl + this.path + "/" + $routeParams.id);
        },

        get: function() {
            return $http.get(this.baseUrl + this.path);
        },

        postModel: function(model) {
            return $http.post(this.baseUrl + this.path, model);
        },

        putModel: function(model) {
            return $http.put(this.baseUrl + this.path + "/" + $routeParams.id, model);
        },

        deleteModel: function() {
            return $http.delete(this.baseUrl + this.path);
        }
    };

});

app
    .directive('login', ['$http', function($http) {
        return {
            transclude: true,
            link: function(scope, element, attrs) {
                scope.isGuest = window.sessionStorage._auth == undefined;
            },

            template: '<a href="login" ng-if="isGuest">Login</a>'
        }
    }])
    .directive('autoActive', ['$location', function($location) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, element) {
                function setActive() {
                    var path = $location.path();
                    if (path) {
                        angular.forEach(element.find('li'), function(li) {
                            var anchor = li.querySelector('a');
                            if (anchor.href.match(path + '(?=\\?|$)')) {
                                angular.element(li).addClass('active');
                            }
                            else {
                                angular.element(li).removeClass('active');
                            }
                        });
                    }
                }

                setActive();

                scope.$on('$locationChangeSuccess', setActive);
            }
        }
    }])
    .filter('checkmark', function() {
        return function(input) {
            return input ? '✓' : '✘';
        };
    });
