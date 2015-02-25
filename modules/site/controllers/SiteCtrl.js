app
    .controller('SiteLogin', ['$scope', 'rest', 'toaster', '$window', '$state', function($scope, rest, toaster, $window, $state) {
        console.log('Login Controller Initialized');

        if ($window.sessionStorage._auth) $state.go('item');

        $scope.pageClass = 'page-enter1';

        rest.path = 'v1/user/login';

        var errorCallback = function(data) {
            toaster.clear();
            delete $window.sessionStorage._auth;
            angular.forEach(data, function(error) {
                toaster.pop('error', "Field: " + error.field, error.message);
            });
        };

        $scope.login = function() {
            if (!$scope.model) {
                toaster.pop('error', "Wrong login or password");
                return;
            }
            rest.postModel($scope.model).success(function(data) {
                $window.sessionStorage._auth = data;
                toaster.pop('success', "Success");
                $state.go('item');
            }).error(errorCallback);
        };
    }])
    .controller('SiteHeader', ['$scope', '$window', '$location', function($scope, $window, $location) {
        $scope.logout = function() {
            $window.sessionStorage.removeItem('_auth');
            $location.path("/");
        };

        $scope.profile = function() {
            $location.path("/profile");
        };
    }]);