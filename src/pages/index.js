import Home       from './Home'
import FellasClub from './FellasClub'

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
        name: 'fella\'s club'
      }
    },
]

export default pages