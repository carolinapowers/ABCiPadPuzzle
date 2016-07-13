(function () {
    'use strict';

    angular.module('ABC').directive('droppable', function () {
        var vm = this;

        return {
            //                template: "<div ng-click='vm.collapse()'>Name: {{vm.user.name}}</div> <div ng-hide='vm.collapsed'> <div ng-show='vm.user.address'>Address: {{vm.user.address.city}}</div>Friends:<div ng-repeat='friend in vm.user.friends'>{{friend}}</div></div>",
            //                scope: true,
            //                                scope: {
            //                      drop: '=' // parent
            //                  },


            link: function (scope, element) {
                // again we need the native object
                var el = element[0];

                el.addEventListener(
                    'dragover',
                    function (e) {
                        
                        e.dataTransfer.dropEffect = 'move';
                        
                        // allows us to drop
                        if (e.preventDefault) e.preventDefault();

                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragenter',
                    function (e) {

                        this.classList.add('over');
                        return false;
                    },
                    false
                );
                el.addEventListener(
                    'dragleave',
                    function (e) {
                        this.classList.remove('over');
                        return false;
                    },
                    false
                );
                el.addEventListener(
                    'drop',
                    function (e) {
                        // Stops some browsers from redirecting.
                        if (e.stopPropagation) e.stopPropagation();

                        e.preventDefault();

                        this.classList.remove('over');

                        var htmlElement = document.getElementById(e.dataTransfer.getData('Text'));

                        var collection = e.target.attributes;

                        console.log(e.target.attributes);

                        var targetVal = collection.target.nodeValue;

                        console.log(targetVal);

                        if (htmlElement.id == targetVal) {

                            this.appendChild(htmlElement);
                        };

                        scope.$apply('drop()');
                        return false;
                    },
                    false
                );

            }
        }
    })

})();