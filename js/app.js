myApp = angular.module('myApp', ['ngSanitize']);

/* Services */
myApp.service('data',function(){
  var assetTypes = {
    all: {type:"none", name:"All"},
    hostname: {type:"hostname", name:"Hostname"},
    ip: {type:"ip", name:"IP Address"},
    tn: {type:"tn", name:"Phone Number"},
    circuitid: {type:"circuitid", name:"Circuit ID"},
    siteid: {type:"siteid", name:"Site ID"},
    venuecode: {type:"venuecode", name:"Venue Code"}
  }
  var data = {
    servicesSel: {name: "GBC"},
    serviceLineSel: {line: "Any"},
    typeSel: {type:"none", name: "All"},
    services: [
      {
        name: "GBC",
        lines:[
          "Any",
          "FLEX",
          "VOICE",
          "NET2",
          "DSL",
          "VPN",
          "NET10",
          "CONNECT"
        ],
        types:[
          assetTypes["all"],
          assetTypes["hostname"],
          assetTypes["ip"],
          assetTypes["tn"],
          assetTypes["siteid"]
        ]
      },
      {
        name: "UPWARK",
        lines:[
          "Any",
          "UWVOICE"
        ],
        types:[
          assetTypes["all"],
          assetTypes["ip"]
        ]
      },
      {
        name: "NDCD",
        lines:[
          "Any"
        ],
        types:[
          assetTypes["all"],
          assetTypes["hostname"]
        ]
      },
      {
        name: "SDCD",
        lines:[
          "Any",
          "VPN"
        ],
        types:[
          assetTypes["all"],
          assetTypes["hostname"]
        ]
      },
      {
        name: "DTPHX",
        lines:[
          "Any",
          "VPN"
        ],
        types:[
          assetTypes["all"],
          assetTypes["hostname"],
          assetTypes["tn"],
          assetTypes["circuitid"]
        ]
      }
    ]
  };

  return {
    getData: function() {
      return data;
    }
  };
});

/* Filters */
myApp.filter('fltrService',function(data){
  return function(item) {
    var arr = [];
    for(i in item){
      if(item[i].service==data.getData().servicesSel.name){
        arr.push(item[i]);
      }
    }
    return arr;
  }
});

myApp.filter('fltrServiceLine',function(data){
  return function(item) {
    var arr = [];
    if(data.getData().serviceLineSel.line=="Any"){
      return item;
    } else {
      for(i in item) {
        if(item[i].serviceLine==data.getData().serviceLineSel.line){
          arr.push(item[i]);
        }
      }
      return arr;
    }
  }
});

myApp.filter('fltrType',function(data){
  return function(item) {
    var arr = [];
    if(data.getData().typeSel.name=="All"){
      return item;
    } else {
      for(i in item) {
        if(item[i].type==data.getData().typeSel.type){
          arr.push(item[i]);
        }
      }
      return arr;
    }
  }
});

/* Controllers */
myApp.controller('ctrlMain',function($scope, $sce, data){
  $scope.navTab = 1;
  $scope.tabSel = "tabSel";
  $scope.titles = [
    $sce.trustAsHtml("What are you looking for?"),
    $sce.trustAsHtml("What are you adding?"),
    $sce.trustAsHtml("What is this tool?")
  ]
});

myApp.controller('ctrlResults',function($scope){
  //test assets
  $scope.assets = assets;
  $scope.removeAsset = function(asset) {
    assets.splice(assets.indexOf(asset),1);
  }
});

myApp.controller('ctrlSearch',function($scope,data,$sce){
  $scope.data = data.getData();
  $scope.newAsset = '';
  $scope.confMessage = $sce.trustAsHtml("");
  $scope.resetSearch = function() {
    $scope.data.serviceLineSel.line = "Any";
    $scope.data.typeSel = {type:"none", name: "All"};
  }
  $scope.addAsset = function() {

    if($scope.newAsset=='') {
      $scope.confMessage = $sce.trustAsHtml("Please enter an asset ID");
    } else {
      $scope.confMessage = $sce.trustAsHtml("Added "+ $scope.newAsset + " to asset records.");
      assets.push(new Asset($scope.data.servicesSel.name, $scope.data.typeSel, $scope.newAsset,"",$scope.data.serviceLineSel.line,""));
      $scope.newAsset = '';
    }
  }
});
