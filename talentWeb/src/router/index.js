import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"

import About from "@/components/About"
import Introduce from "@/components/Introduce"
import Honor from "@/components/Honor"
import Staff from "@/components/Staff"
import StaffList from "@/components/StaffList"
import StaffDetail from "@/components/StaffDetail"

import Article from "@/components/Article"
import ArticleList1 from "@/components/ArticleList1"
import ArticleList2 from "@/components/ArticleList2"
import ArticleDetail from "@/components/ArticleDetail"
import Search from "@/components/Search"

import Business from "@/components/Business"

import Join from "@/components/Join"
import JoinList from "@/components/JoinList"
import JoinDetail from "@/components/JoinDetail"

import Contact from "@/components/Contact"
import Link from "@/components/Link"
import Login from "@/components/Login"
import Error from "@/components/Error"

Vue.use(Router)

export default new Router({
	mode: "history",
	base: "/",
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
			path: "/about", name: "About", component: About, redirect: "/about/introduce", meta: {}, children: [
				{
					path: "introduce", component: Introduce, alias: "/about", meta: {
						title: "厦门高新人才-公司简介"
					}
				},
				{
					path: "honor", component: Honor, meta: {
						title: "厦门高新人才-公司荣誉"
					}
				},
				{
					path: "staff", component: Staff, redirect: "/about/staff/staffList", meta: {}, children: [
						{
							path: "staffList", component: StaffList, alias: "/about/staff", meta: {
								title: "厦门高新人才-员工风采"
							}
						},
						{path: "staffDetail", name: "StaffDetail", component: StaffDetail, meta: {}}
					]
				}
			]
		},
		{
			path: "/article", name: "Article", component: Article, redirect: "/article/list1", meta: {}, children: [
				{
					path: "list1", name: "list1", component: ArticleList1, meta: {keepAlive: true}, children: [
						{
							path: "detail", name: "detailA", component: ArticleDetail, meta: {
								title: "厦门高新人才-企业动态"
							}
						}
					]
				},
				{
					path: "list2", name: "list2", component: ArticleList2, meta: {keepAlive: true}, children: [
						{
							path: "detail", name: "detailB", component: ArticleDetail, meta: {
								title: "厦门高新人才-资讯动态"
							}
						}
					]
				},
				{path: "search", name: "search", component: Search, meta: {}}
			]
		},
		{
			path: "/business", name: "Business", component: Business, redirect: "/business/detail3", children: [
				{path: "detail1", name: "detail1", component: Business, meta: {title: "厦门高新人才-人才派遣"}},
				{path: "detail2", name: "detail2", component: Business, meta: {title: "厦门高新人才-考试测评"}},
				{path: "detail3", name: "detail3", component: Business, meta: {title: "厦门高新人才-培训咨询"}},
				{path: "detail4", name: "detail4", component: Business, meta: {title: "厦门高新人才-人力资源服务外包"}},
				{path: "detail5", name: "detail5", component: Business, meta: {title: "厦门高新人才-猎头服务"}}
			]
		},
		{
			path: "/join", name: "Join", component: Join, meta: {}, children: [
				{
					path: "joinList", name: "JoinList", component: JoinList, alias: "/join", meta: {
						title: "厦门高新人才-加入我们",
						keepAlive: true
					}
				},
				{path: "joinDetail", name: "JoinDetail", component: JoinDetail, meta: {}}
			]
		},
		{path: "/contact", name: "Contact", component: Contact, meta: {title: "厦门高新人才-联系我们"}},
		{path: "/link", name: "Link", component: Link, meta: {title: "厦门高新人才-友情链接"}},
		{path: "/login", name: "login", component: Login, meta: {title: "厦门高新人才-登录"}},
		{path: "*", component: Error, meta: {title: "厦门高新人才-404没有找到页面"}}
	]
})
