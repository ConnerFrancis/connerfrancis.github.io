import style from '@/services/scssjson'

import Home from './Home'

import HomeOld from './HomeOld'

import FellasClub from './FellasClub'

import Experiments from './Experiments'
import experiments from './experiments'

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
  },
  {
    path: '/fellasclub',
    component: FellasClub,
    name: 'fellasclub',
    meta: {
      title: 'F E L L A \' S   C L U B',
      name: 'Fella\'s club',
      color: 'red'
    }
  },
  {
    path: '/experiments',
    component: Experiments,
    name: 'experiments',
    children: experiments,
    meta: {
      title: 'Experiments',
      name: 'Experiments',
      color: style.cyan
    }
  }
]

export default pages
