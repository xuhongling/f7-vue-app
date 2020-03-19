import HomePage from 'pages/HomePage'
import Login from 'pages/Login'
import DataReport from 'pages/DataReport'

export default [
	{
		path: '/',
		name:'home',
		redirect: '/home/'
	},{
		path:'/home/',
		name:'home',
		component: HomePage
	}, {
    path:'/login/',
    name:'login',
    component: Login
  }, {
    path:'/dataReport/',
    name:'dataReport',
    component: DataReport
  }
]