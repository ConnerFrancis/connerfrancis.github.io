import VueFireTest from './VueFireTest'
import StyleTest from './StyleTest'

import HomeOld from './HomeOld'

const dev = [
  {
    path: '/test/db',
    component: VueFireTest,
    name: 'vuefiretest',
    meta: {
      title: 'db testing',
      name: 'vuefiretest',
      hidden: true
    }
  },
  {
    path: '/test/style',
    component: StyleTest,
    name: 'styletest',
    meta: {
      title: 'style testing',
      name: 'styletest',
      hidden: true
    }
  }
]

const hidden = [
  {
    path: '/homeold',
    component: HomeOld,
    name: 'homeold',
    meta: {
      title: 'older version of this dumb website',
      name: 'homeold',
      hidden: true
    }
  }
]

const debug = process.env.NODE_ENV !== 'production'
const final = (debug) ? (hidden.concat(dev)) : (hidden)

export default final
