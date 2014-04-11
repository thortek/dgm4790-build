angular.module('starter.directives', [])
.directive('editable', function() {
    return {
      restrict: 'A',
      replace:true,
      scope: {
        edit: '='
     	 },
      template: 'contenteditable'
    }
  });