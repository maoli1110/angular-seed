/**
 * Created by kylee on 2017/3/9.
 */

//repeat完成通知
angular.module('core').directive('repeatFinish',function($timeout){
        return{
            restrict: 'AE',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
});
//顶部导航栏active样式控制
angular.module('core').directive('topNav',function(){
    return{
        restrict: 'AE',
        link: function(scope, element, attr) {
            $('.topNav').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
});
//工程管理下的导航active样式控制
angular.module('core').directive('tabActive',function(){
    return{
        restrict: 'AE',
        link: function(scope, element, attr) {
            $('.tab').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
});

angular.module('core').directive('sideOperation',function(){
    return{
        restrict: 'AE',
        link: function(scope, element, attr) {
            //合同段active样式控制
            $('.contract-name').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
            //下拉菜单arrow切换
            $('.menu').on('click', function () {
                if ($('.dropdown').hasClass('open')) {
                    $('.arrow').css({transform: 'rotate(0deg)'});
                } else {
                    $('.arrow').css({transform: 'rotate(180deg)'});
                }
                $('.dropdown-menu >li').on('click', function () {
                    $('.menu-name').text($(this).text());
                    if ($('.dropdown').hasClass('open')) {
                        $('.arrow').css({transform: 'rotate(0deg)'});
                    } else {
                        $('.arrow').css({transform: 'rotate(180deg)'});
                    }
                });
            });
        }
    }
});
//控制左侧导航栏左右移动
angular.module('core').directive('btnWrapper',function(){
    return{
        restrict: 'AE',
        link: function(scope, element, attr) {
            //someting
        }
    }
});
