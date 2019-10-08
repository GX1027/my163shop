//路由懒加载
const Home = () => import('../pages/Home')

const Category = () => import('../pages/Category')

const GoodThings = () => import('../pages/GoodThings')

const ShopCar = () => import('../pages/ShopCar')

const Personal = () => import('../pages/Personal')
const EmailLogin = () => import('../pages/Personal/EmailLogin')
const PhoneLogin = () => import('../pages/Personal/PhoneLogin')

export default [
    {
        path: '/home',
        component: Home,
        meta: {
            showHeader: true,
            showFooter: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/goodthings',
        component: GoodThings,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/personal',
        component: Personal,
        children: [
            {
                path: 'emaillogin',
                component: EmailLogin
            },
            {
                path: 'phonelogin',
                component: PhoneLogin
            }
        ]
    },
    {
        path: '/shopCar',
        component: ShopCar,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/',
        redirect: '/home'
    }
]
