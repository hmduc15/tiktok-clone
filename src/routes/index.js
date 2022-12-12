
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import ProfilePage from '@/pages/Profile';
import UploadPage from '@/pages/Upload';

export const publicRoutes = [
    { path: '/', component: Home, },
    { path: '/following', component: Following },
    { path: '/profile', component: ProfilePage },
    { path: '/upload', component: UploadPage, Layout: null },
]


export const privateRoutes = []