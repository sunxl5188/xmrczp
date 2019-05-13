import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import About from "@/components/About"
import AboutDetail from "@/components/AboutDetail"

import Article from "@/components/Article"
import ArticleList from "@/components/ArticleList"
import ArticleDetail from "@/components/ArticleDetail"

import Business from "@/components/Business"

import Join from "@/components/Join"
import JoinDetail from "@/components/JoinDetail"
import Contact from "@/components/Contact"

import Login from "@/components/Login"

import Link from "@/components/Link"

import Error from "@/components/Error"

Vue.use(Router)

export default new Router({
	mode: "history",
	//base: "/distWap/",
	linkActiveClass: "router-link-active",
	linkExactActiveClass: "router-link-exact-active",
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop
			}
			return {x: 0, y: to.meta.savedPosition || 0}
		}
	},
	routes: [
		{
			path: "/", name: "Home", component: Home, meta: {
				title: "厦门高新人才开发有限公司"
			}
		},
		{
			path: "/about", name: "about", component: About, meta: {
				title: "厦门高新人才-公司简介"
			}, children: [
				{
					path: "honor", name: "honor", component: About, meta: {
						title: "厦门高新人才-公司荣誉"
					}
				},
				{path: "staff", name: "staff", component: About, meta: {
					title: "厦门高新人才-员工风采"
				}},
				{path: "staff/StaffDetail", name: "staffdetail", component: AboutDetail}
			]
		},
		{
			path: "/article", name: "Article", component: Article, redirect: "/article/list1", children: [
				{
					path: "list1", name: "list1", component: ArticleList, meta: {
						title:"厦门高新人才-企业动态",
						keepAlive: true
					}, children: [
						{path: "detail", name: "ADetail1", component: ArticleDetail}
					]
				},
				{
					path: "list2", name: "list2", component: ArticleList, meta: {
						title:"厦门高新人才-资讯动态",
						keepAlive: true
					}, children: [
						{path: "detail", name: "ADetail2", component: ArticleDetail}
					]
				},
			]
		},
		{
			path: "/business", name: "Business", component: Business, redirect: "/business/detail3", children: [
				{path: "detail1", name: "detail1", component: Business, meta:{ title:"厦门高新人才-人才派遣" }},
				{path: "detail2", name: "detail2", component: Business, meta:{ title:"厦门高新人才-考试测评" }},
				{path: "detail3", name: "detail3", component: Business, meta:{ title:"厦门高新人才-培训咨询" }},
				{path: "detail4", name: "detail4", component: Business, meta:{ title:"厦门高新人才-人力资源服务外包" }},
				{path: "detail5", name: "detail5", component: Business, meta:{ title:"厦门高新人才-猎头服务" }}
			]
		},
		{
			path: "/join", name: "Join", component: Join, meta: {
				title:"厦门高新人才-加入我们",
				keepAlive: true
			}, children: [
				{path: "joinDetail", name: "JoinDetail", component: JoinDetail}
			]
		},
		{path: "/contact", name: "Contact", component: Contact, meta: {title: "厦门高新人才-联系我们"}},
		{path: "/Login", name: "Login", component: Login, meta: {title: "厦门高新人才-登录"}},
		{path: "/link", name: "Link", component: Link, meta: {title: "厦门高新人才-友情链接"}},
		{path: "*", name: "Error", component: Error, meta: {title: "厦门高新人才-404没有找到页面"}}
	]
})
