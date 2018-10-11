// Router color shanigans, don't ask
// import style from '@/services/scssjson'

import hidden from './hidden'

import Home from './Home'
import LoginScreen from './LoginScreen'

import Profile from './Profile'
import Users from './Users'

const pages = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'the cobbler experience',
      name: 'Home',
      theme: 'dark'
    }
  },
  {
    path: '/login',
    component: LoginScreen,
    name: 'LoginScreen',
    meta: {
      title: 'Login or signup',
      name: 'LoginScreen'
    }
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    meta: {
      title: 'Profile',
      name: 'Profile'
    }
  },
  {
    path: '/users',
    component: Users,
    name: 'Users',
    meta: {
      title: 'Users',
      name: 'Users'
    }
  }
].concat(hidden)

export default pages
