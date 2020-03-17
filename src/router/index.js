import HomePage from 'pages/HomePage'
import Login from 'pages/Login'

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
  }
]