import GridTest from './GridTest'
import Firebase from './Firebase'

const hidden = [
  {
    path: '/gridtest',
    component: GridTest,
    name: 'gridtest',
    meta: {
      title: 'Grid Test',
      name: 'gridtest',
      hidden: true
    }
  },
  {
    path: '/firebase',
    component: Firebase,
    name: 'firebase',
    meta: {
      title: 'Firebase Testing',
      name: 'firebase',
      hidden: true
    }
  }
]

export default hidden
