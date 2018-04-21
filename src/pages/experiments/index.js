import List from './List'

import FollowsYou from './FollowsYou'

const experiments = [
  {
    path: '/',
    component: List,
    name: 'list',
    meta: {
      title: 'List',
      name: 'list'
    }
  },
  {
    path: 'follows-you',
    component: FollowsYou,
    name: 'follows-you',
    meta: {
      title: 'Follows You',
      name: 'follows you'
    }
  }
]

export default experiments
