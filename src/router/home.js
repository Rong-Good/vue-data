import home from '../components/home';
import yisi from '../components/yisi';

const tt=[
    {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/home',
        name: 'home',
        component: home,
        children:[
          {
            path: '/home/yisi',
            name: 'yisi',
            component: yisi,
            meta:{de:true}
          },
        ]
      }
]
export default  tt
