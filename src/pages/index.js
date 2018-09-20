// Router color shanigans, don't ask
// import style from '@/services/scssjson'

import hidden from './hidden'

import Home from './Home'

import HomeOld from './HomeOld'

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
    path: '/homeold',
    component: HomeOld,
    name: 'HomeOld',
    meta: {
      title: 'conner\'s dungeon',
      name: 'HomeOld'
    }
  }
].concat(hidden)

export default pages
