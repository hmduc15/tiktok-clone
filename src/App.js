import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import DefaultLayout from '@/components/Layout/Default';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          publicRoutes.map((route, index) => {
            let Page = route.component
            let Layout = DefaultLayout;
            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = Fragment;
            }

            return <Route key={index} path={route.path}
              element={<Layout>
                <Page />
              </Layout>}
            />
          })
        }
      </Routes>
    </div>
  );
}

export default App;
