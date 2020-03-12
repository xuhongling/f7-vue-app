import HomePage from 'pages/HomePage'

export default [
	{
		path: '/',
		name:'home',
		redirect: '/home'
	},{
		path:'/home',
		name:'home',
		component: HomePage
	}, {
    path:'/login',
    name:'login',
    component: () => import('pages/Login')
  }
]