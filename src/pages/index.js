// Router color shanigans, don't ask
// import style from '@/services/scssjson'

import hidden from './hidden'

import Home from './Home'
import LoginScreen from './LoginScreen'

import Profile from './Profile'

const pages = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'the cobbler experience',
      name: 'Home'
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
  }
].concat(hidden)

export default pages
