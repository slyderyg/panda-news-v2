import Admin from './pages/Admin';
import Article from './pages/Article';
import Blog from './pages/Blog';
import Auth from './pages/Auth';
import { ADMIN_ROUTE, ARTICLE_ROUTE, BLOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: BLOG_ROUTE,
        Component: Blog
    },
    {
        path: ARTICLE_ROUTE + '/:id',
        Component: Article
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]