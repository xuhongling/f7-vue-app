import HomePage from 'pages/HomePage'
import Login from 'pages/Login'
import DataReport from 'pages/DataReport'
import GoInspection from 'pages/GoInspection'
import EmergencyReport from 'pages/EmergencyReport'

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
    path:'/goInspection/',
    name:'goInspection',
    component: GoInspection
  }, {
    path:'/emergencyReport/',
    name:'emergencyReport',
    component: EmergencyReport
  }, {
    path:'/dataReport/',
    name:'dataReport',
    component: DataReport
  }
]