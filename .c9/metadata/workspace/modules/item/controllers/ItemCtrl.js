{"filter":false,"title":"ItemCtrl.js","tooltip":"/modules/item/controllers/ItemCtrl.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":16,"column":140},"end":{"row":16,"column":141},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":139},"end":{"row":16,"column":140},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":138},"end":{"row":16,"column":139},"action":"remove","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":137},"end":{"row":16,"column":138},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":136},"end":{"row":16,"column":137},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":135},"end":{"row":16,"column":136},"action":"remove","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":134},"end":{"row":16,"column":135},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":133},"end":{"row":16,"column":134},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":132},"end":{"row":16,"column":133},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":131},"end":{"row":16,"column":132},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":130},"end":{"row":16,"column":131},"action":"remove","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":129},"end":{"row":16,"column":130},"action":"remove","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":128},"end":{"row":16,"column":129},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":127},"end":{"row":16,"column":128},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":7},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":4},"end":{"row":49,"column":7},"action":"insert","lines":["    .controller('ItemIndex', ['$scope', 'rest', 'toaster', '$sce', '$filter', '$window', function($scope, rest, toaster, $sce, $filter, $window) {","","        $scope.pageClass = 'page-buyerprofile3';","","        rest.path = 'v1/items';","","        var errorCallback = function(data) {","            toaster.clear();","            toaster.pop('error', \"status: \" + data.status + \" \" + data.name, data.message);","        };","","        rest.models().success(function(data) {","            $scope.items = data;","        }).error(errorCallback);","    }])"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":4},"end":{"row":35,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":21},"end":{"row":35,"column":26},"action":"remove","lines":["Index"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["V"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":48,"column":32},"action":"remove","lines":["","        $scope.pageClass = 'page-buyerprofile3';","","        rest.path = 'v1/items';","","        var errorCallback = function(data) {","            toaster.clear();","            toaster.pop('error', \"status: \" + data.status + \" \" + data.name, data.message);","        };","","        rest.models().success(function(data) {","            $scope.items = data;","        }).error(errorCallback);"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":36,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":9},"end":{"row":36,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":19},"end":{"row":36,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":20},"end":{"row":36,"column":22},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":22},"end":{"row":36,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["V"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":29},"end":{"row":36,"column":30},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":30},"end":{"row":36,"column":31},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":31},"end":{"row":36,"column":32},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":32},"end":{"row":36,"column":33},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":33},"end":{"row":36,"column":34},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":34},"end":{"row":36,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":35},"end":{"row":36,"column":36},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":36},"end":{"row":36,"column":37},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":37},"end":{"row":36,"column":38},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":38},"end":{"row":36,"column":39},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":38},"end":{"row":36,"column":39},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":37},"end":{"row":36,"column":38},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":36},"end":{"row":36,"column":37},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":36},"end":{"row":36,"column":37},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":37},"end":{"row":36,"column":38},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":38},"end":{"row":36,"column":39},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":39},"end":{"row":36,"column":40},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":40},"end":{"row":36,"column":41},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":41},"end":{"row":36,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":42},"end":{"row":36,"column":43},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":43},"end":{"row":36,"column":44},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":44},"end":{"row":36,"column":45},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":45},"end":{"row":36,"column":46},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":46},"end":{"row":36,"column":47},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":47},"end":{"row":36,"column":48},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":42},"end":{"row":36,"column":48},"action":"remove","lines":["Initia"]},{"start":{"row":36,"column":42},"end":{"row":36,"column":53},"action":"insert","lines":["Initialized"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":56},"action":"remove","lines":["console.log('Item View Controller Initialized');"]},{"start":{"row":36,"column":8},"end":{"row":87,"column":10},"action":"insert","lines":["        rest.path = 'v1/posts';","","        $scope.post = {};","","        var errorCallback = function (data) {","            toaster.clear();","            if (data.status == undefined) {","                angular.forEach(data, function (error) {","                    toaster.pop('error', \"Field: \" + error.field, error.message);","                });","            } else {","                toaster.pop('error', \"code: \" + data.code + \" \" + data.name, data.message);","            }","        };","","        rest.model().success(function (data) {","            $scope.post = data;","            $scope.post.comment = {\"post_id\": data.id, \"content\": null};","        }).error(errorCallback);","","        $scope.addComment = function () {","","            rest.path = 'v1/comments';","","            rest.postModel($scope.post.comment)","                .success(function (data) {","                    if (!angular.isArray($scope.post.comments)) {","                        $scope.post.comments = [];","                    }","                    $scope.post.comments.unshift(data);","                    $scope.post.comment.content = null;","                    toaster.pop('success', \"Comment is added!\");","                })","                .error(errorCallback);","        };","","        $scope.deleteComment = function (comment) {","","            rest.path = 'v1/comments/' + comment.id;","","            rest.deleteModel()","                .success(function () {","                    angular.forEach($scope.post.comments, function (value, key) {","                        if (value.id == comment.id) {","                            $scope.post.comments.splice(key, 1);","                            toaster.pop('success', \"Comment is deleted!\");","                            return true;","                        }","                    });","                })","                .error(errorCallback);","        };"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":0},"end":{"row":87,"column":10},"action":"remove","lines":["        $scope.addComment = function () {","","            rest.path = 'v1/comments';","","            rest.postModel($scope.post.comment)","                .success(function (data) {","                    if (!angular.isArray($scope.post.comments)) {","                        $scope.post.comments = [];","                    }","                    $scope.post.comments.unshift(data);","                    $scope.post.comment.content = null;","                    toaster.pop('success', \"Comment is added!\");","                })","                .error(errorCallback);","        };","","        $scope.deleteComment = function (comment) {","","            rest.path = 'v1/comments/' + comment.id;","","            rest.deleteModel()","                .success(function () {","                    angular.forEach($scope.post.comments, function (value, key) {","                        if (value.id == comment.id) {","                            $scope.post.comments.splice(key, 1);","                            toaster.pop('success', \"Comment is deleted!\");","                            return true;","                        }","                    });","                })","                .error(errorCallback);","        };"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":0},"end":{"row":56,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":32},"end":{"row":55,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":16},"action":"remove","lines":["        "]},{"start":{"row":40,"column":36},"end":{"row":40,"column":37},"action":"remove","lines":[" "]},{"start":{"row":43,"column":46},"end":{"row":43,"column":47},"action":"remove","lines":[" "]},{"start":{"row":46,"column":13},"end":{"row":47,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":52,"column":37},"end":{"row":52,"column":38},"action":"remove","lines":[" "]},{"start":{"row":54,"column":35},"end":{"row":55,"column":16},"action":"insert","lines":["","                "]},{"start":{"row":55,"column":35},"end":{"row":56,"column":15},"action":"insert","lines":["","               "]},{"start":{"row":56,"column":31},"end":{"row":57,"column":12},"action":"insert","lines":["","            "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":24},"end":{"row":36,"column":29},"action":"remove","lines":["posts"]},{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":17},"end":{"row":38,"column":18},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":17},"end":{"row":38,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":1},"end":{"row":57,"column":14},"action":"remove","lines":["           $scope.post.comment = {","                \"post_id\": data.id,","                \"content\": null","            };"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":0},"end":{"row":54,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":31},"end":{"row":54,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":19},"end":{"row":53,"column":23},"action":"remove","lines":["post"]},{"start":{"row":53,"column":19},"end":{"row":53,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":20},"end":{"row":53,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":21},"end":{"row":53,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":22},"end":{"row":53,"column":23},"action":"insert","lines":["m"]}]}]]},"ace":{"folds":[],"scrolltop":515,"scrollleft":0,"selection":{"start":{"row":54,"column":23},"end":{"row":54,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":37,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424259207854,"hash":"b019828bdaa181b6286549e3d78d4643759f3b47"}