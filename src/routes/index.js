import config from '@/config';

import Home from '@/pages/Home';
import Following from '@/pages/Following';
import ProfilePage from '@/pages/Profile';
import UploadPage from '@/pages/Upload';
import SignIn from '@/Auth/Pages/Sign';

export const publicRoutes = [
    { path: config.routes.home, component: Home, },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.upload, component: UploadPage, Layout: null },
    { path: config.routes.signin, component: SignIn }
]


export const privateRoutes = []