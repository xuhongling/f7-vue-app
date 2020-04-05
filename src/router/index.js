import HomePage from 'pages/HomePage'
import Login from 'pages/Login'
import DataQuery from 'pages/DataQuery'
import InfoManage from 'pages/InfoManage'
import MyProfile from 'pages/MyProfile'
import DataReport from 'pages/DataReport'
import GoInspection from 'pages/GoInspection'
import EmergencyReport from 'pages/EmergencyReport'
import ContactsList from 'pages/ContactsList'
import MyMessage from 'pages/MyMessage'
import NotFoundPage from 'pages/404'

var routes = [
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
    path:'/dataQuery/',
    name:'dataQuery',
    component: DataQuery
  },{
    path:'/infoManage/',
    name:'infoManage',
    component: InfoManage
  },{
    path:'/myProfile/',
    name:'myProfile',
    component: MyProfile
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
  }, {
    path:'/contactsList/',
    name:'contactsList',
    component: ContactsList
  }
  , {
    path:'/myMessage/',
    name:'myMessage',
    component: MyMessage
  }, {
    path: '(.*)',
    component: NotFoundPage,
  }
]

export default routes