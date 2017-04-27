'use strict';
/**
 * component
 */
angular.module('core').controller('constractManageCtrl', ['$scope', '$http','$uibModal','commonService','$timeout','$compile',
    function ($scope, $http,$uibModal,commonService,$timeout,$compile) {

    //    控制左侧导航栏左右移动
    var $sliderMoving = false;
    const LEFT_DIV_WIDTH_MIN = 150;
    const LEFT_DIV_WIDTH_MAX = 200;


    let isClicked = true;
    $(".btn-wrapper").click(function () {
        if (isClicked) {
            $(".menu-nav").stop().animate({width: LEFT_DIV_WIDTH_MIN + 'px'}, 500);
            $(".content-wrapper").stop().animate({width: $(window).width() - LEFT_DIV_WIDTH_MIN - 4 + 'px'}, 500);
            $('.btn-wrapper>.btn-arrow').css({background: 'url(imgs/icon-button.png) -132px -31px no-repeat'});
            isClicked = !isClicked;
        } else {
            $(".menu-nav").stop().animate({width: LEFT_DIV_WIDTH_MAX + 'px'}, 500);
            $(".content-wrapper").stop().animate({width: $(window).width() - LEFT_DIV_WIDTH_MAX - 4 + 'px'}, 500);
            $('.btn-wrapper>.btn-arrow').css({background: 'url(imgs/icon-button.png) -114px -31px no-repeat'});
            isClicked = !isClicked;
        }
    });

    //    顶部导航栏active样式控制
    // $('.topNav').on('click', function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    //    工程管理下的导航active样式控制
    // $('.tab').on('click', function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    //    合同段active样式控制
    // $('.contract-name').on('click', function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    //    合同操作按钮active样式控制
    // $('.contract-operate > button').on('click', function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    //    下拉菜单arrow切换
    // $('.menu').on('click', function () {
    //     if ($('.dropdown').hasClass('open')) {
    //         $('.arrow').css({transform: 'rotate(0deg)'});
    //     } else {
    //         $('.arrow').css({transform: 'rotate(180deg)'});
    //     }
    //     $('.dropdown-menu >li').on('click', function () {
    //         $('.menu-name').text($(this).text());
    //         if ($('.dropdown').hasClass('open')) {
    //             $('.arrow').css({transform: 'rotate(0deg)'});
    //         } else {
    //             $('.arrow').css({transform: 'rotate(180deg)'});
    //         }
    //     });
    // });

    // $('.clear').on('click', function () {
    //     $('.input-search').val('');
    // });


}]);