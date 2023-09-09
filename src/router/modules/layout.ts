const layout = () => import('@/layout/index.vue')
import home from './home'
import contact from './contact'
import blogs from './blogs'
import packages from './packages'

const routes: any[] = []
routes.push(home)
routes.push(contact)
routes.push(blogs)
routes.push(packages)

console.log(routes)

export default {
  path: '/',
  name: 'Layout',
  redirect: { name: 'Home' },
  component: layout,
  children: [...routes],
}
