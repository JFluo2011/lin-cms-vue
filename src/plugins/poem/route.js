const Poem = () => import('./views/Poem')

const poemsRouter = {
  path: '/poems',
  component: Poem,
  meta: {
    title: '插件示例',
    // menuTab: true,
    icon: 'iconfont icon-schedule2',
  },
}

export default poemsRouter