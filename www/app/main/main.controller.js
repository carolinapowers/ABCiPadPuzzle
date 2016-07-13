(function () {
    'use strict';

    angular.module('ABC').controller('MainCtrl', MainCtrl);

    function MainCtrl($scope) {
        var vm = this;

        vm.ngTouchTest = function (element) {
            alert("alert me! " + element.id);
        }

        $scope.onDragComplete = function (data, evt) {
            console.log("drag success, data:", data);
        }

        $scope.onDropComplete = function (targetLetter, data, evt) {
            var vm = this;
            if (targetLetter === data.id) {
                document.getElementById(targetLetter + "-target").appendChild(evt.element[0]);
                //Loop through all letters to find targetLetter
                var letters = vm.vm.verticalLetters;
                for (var i = 0; i < letters.length; i++) {
                    if (letters[i].id === targetLetter) {
                        vm.vm.verticalLetters.splice(i, 1);
                    }
                }
            } else {
                return;
            }
        }


        vm.verticalLetters = [{
                src: "assets/images/A.png",
                id: "a1",
            },
            {
                src: "assets/images/B.png",
                id: "b1"
                      },
            {
                src: "assets/images/C.png",
                id: "c1"
            },
            {
                src: "assets/images/D.png",
                id: "d1"
            },
            {
                src: "assets/images/E.png",
                id: "e1"
            },
            {
                src: "assets/images/F.png",
                id: "f1"
            },
            {
                src: "assets/images/G.png",
                id: "g1"
            },
            {
                src: "assets/images/H.png",
                id: "h1"
            },
            {
                src: "assets/images/I.png",
                id: "i1"
            },
            {
                src: "assets/images/J.png",
                id: "j1"
            },
            {
                src: "assets/images/K.png",
                id: "k1"
            },
            {
                src: "assets/images/L.png",
                id: "l1"
            },
            {
                src: "assets/images/M.png",
                id: "m1"
            },
            {
                src: "assets/images/N.png",
                id: "n1"
            },
            {
                src: "assets/images/O.png",
                id: "o1"
            },
            {
                src: "assets/images/P.png",
                id: "p1"
            },
            {
                src: "assets/images/Q.png",
                id: "q1"
            },
            {
                src: "assets/images/R.png",
                id: "r1"
            },
            {
                src: "assets/images/S.png",
                id: "s1"
            },
            {
                src: "assets/images/T.png",
                id: "t1"
            },
            {
                src: "assets/images/U.png",
                id: "u1"
            },
            {
                src: "assets/images/V.png",
                id: "v1"
            },
            {
                src: "assets/images/W.png",
                id: "w1"
            },
            {
                src: "assets/images/X.png",
                id: "x1"
            },
            {
                src: "assets/images/Y.png",
                id: "y1"
            },
            {
                src: "assets/images/Z.png",
                id: "z1"
            }
    ];


    }


})();