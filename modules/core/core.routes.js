'use strict';
/*1、工程划分的树：【工程管理】模块下“工程划分”、“清单管理”，【质检评定】下“开工报告”、“检验评定”，【计量支付】下“中间计量”-“合同”
 2、合同树：【工程管理】合同管理
 3、变更的树：【变更管理】，【计量支付】下“中间计量”-“变更”
 4、计量的树：【计量支付】下“计量支付”*/
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/first');
		//路由按左侧树结构划分(第一类，第二类)
		$stateProvider.
		 state('login', {
			url:'/login',
			templateUrl: 'template/core/login.html',
			data: {
				displayName: 'login'
			}
		}).state('first', {
			url:'/first',//第一类-合同管理
			templateUrl: 'template/category_first/contract_manage.html',
			controller:'constractManageCtrl',
			data: {
				displayName: 'constractManageCtrl'
			}
		}).state('second',{
			url:'/second',//第二类 second.html暂时没用到
			templateUrl:'template/category_second/second.html',
			controller:'secondCtrl',
			displayName:{
				displayName:"second"
			}
		}).state('second.projectDivisionContract',{
			url:'/projectDivisionContract',//第二类-工程管理-工程划分-合同
			controller:'projectDivisionContractCtrl',
			templateUrl:'template/category_second/project_division_contract.html',
			displayName:{
				displayName:"projectDivisionContract"
			}
		}).state('second.projectDivisionStake',{
			url:'/projectDivisionContract',//第二类-工程管理-工程划分-桩号
			controller:'projectDivisionStakeCtrl',
			templateUrl:'template/category_second/project_division_stake.html',
			displayName:{
				displayName:"projectDivisionStake"
			}
		}).state('second.listManageContract',{
			url:'/listManageContract',//第二类-清单管理
			controller:'listManageContractCtrl',
			templateUrl:'template/category_second/list_manage_contract.html',
			displayName:{
				displayName:"listManageContract"
			}
		})
	}
]);