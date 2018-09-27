// Router color shanigans, don't ask
// import style from '@/services/scssjson'

import hidden from './hidden'

import Home from './Home'
import LoginScreen from './LoginScreen'

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
      title: 'login or signup',
      name: 'LoginScreen'
    }
  }
].concat(hidden)

export default pages
