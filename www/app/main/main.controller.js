(function () {
    'use strict';

    angular.module('ABC').controller('MainCtrl', MainCtrl);

    function MainCtrl($scope) {
        var vm = this;
        vm.matched = false;

        var myAudio = document.createElement('audio');
        myAudio.controls = true;
        
    
        vm.ngTouchTest = function (element) {
            alert("alert me! " + element.id);
        }

        $scope.onDragComplete = function (data, evt) {
            //console.log("drag success, data:", data);
        }

        $scope.onDropComplete = function (targetLetter, data, evt, matched) {
            var vm = this;
            if (targetLetter === data.id) {
                document.getElementById(targetLetter + "-target").appendChild(evt.element[0]);
                myAudio.src = "../../assets/" +targetLetter+ ".mp3" ;
                myAudio.play();

                //Loop through all letters to find targetLetter
                var letters = vm.vm.verticalLetters;
                for (var i = 0; i < letters.length; i++) {
                    if (letters[i].id === targetLetter) {
                        vm.vm.verticalLetters.splice(i, 1);
                    }
                }
              
              $scope.matched = targetLetter;
              
              $scope.touched = function (target) {
                if (target == targetLetter) {
                    vm.wasTouched = true;
                }
                if (wasTouched == true) {
                  return true;
                }
              }
              
              
            } else {
                return;
            }
        }


        vm.verticalLetters = [{
                src: "assets/images/a_color.png",
                id: "a1",
            },
            {
                src: "assets/images/b_color.png",
                id: "b1"
                      },
            {
                src: "assets/images/c_color.png",
                id: "c1"
            },
            {
                src: "assets/images/d_color.png",
                id: "d1"
            },
            {
                src: "assets/images/e_color.png",
                id: "e1"
            },
            {
                src: "assets/images/f_color.png",
                id: "f1"
            },
            {
                src: "assets/images/g_color.png",
                id: "g1"
            },
            {
                src: "assets/images/h_color.png",
                id: "h1"
            },
            {
                src: "assets/images/i_color.png",
                id: "i1"
            },
            {
                src: "assets/images/j_color.png",
                id: "j1"
            },
            {
                src: "assets/images/k_color.png",
                id: "k1"
            },
            {
                src: "assets/images/l_color.png",
                id: "l1"
            },
            {
                src: "assets/images/m_color.png",
                id: "m1"
            },
            {
                src: "assets/images/n_color.png",
                id: "n1"
            },
            {
                src: "assets/images/o_color.png",
                id: "o1"
            },
            {
                src: "assets/images/p_color.png",
                id: "p1"
            },
            {
                src: "assets/images/q_color.png",
                id: "q1"
            },
            {
                src: "assets/images/r_color.png",
                id: "r1"
            },
            {
                src: "assets/images/s_color.png",
                id: "s1"
            },
            {
                src: "assets/images/t_color.png",
                id: "t1"
            },
            {
                src: "assets/images/u_color.png",
                id: "u1"
            },
            {
                src: "assets/images/v_color.png",
                id: "v1"
            },
            {
                src: "assets/images/w_color.png",
                id: "w1"
            },
            {
                src: "assets/images/x_color.png",
                id: "x1"
            },
            {
                src: "assets/images/y_color.png",
                id: "y1"
            },
            {
                src: "assets/images/z_color.png",
                id: "z1"
            }
    ];


    }


})();