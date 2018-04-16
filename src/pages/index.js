import Home from './Home'

import FellasClub from './FellasClub'

import Experiments from './Experiments'
import experiments from './experiments'

const pages = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: 'conner\'s dungeon',
      name: 'home'
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
      color: 'blue'
    }
  }
]

export default pages
