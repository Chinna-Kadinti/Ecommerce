
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import About from './component/About';
import ProductDetails from './component/ProductDetails';
import ProductData from './component/ProductData';
import MensFashion from './component/MensFashion';
import Electronics from './component/Electronics';
import BestSeller from './component/BestSeller';
import WomenFashion from './component/WomenFashion';
import ContactUs from './component/ContactUs';
import Table from './component/Table';
// import ScrollableTable from './component/ScrollableTable';

function App() {
  

  const AppLayout = () => {
   return <>
            <Header/>
           
            <Outlet/>
          </>
   
  }
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[{
        path:'/',
        element:<Body/>
      },{
        path:'/home',
        element:<Body/>
      },
      {
        path:'/home:/productID',
        element:<Body/>
        
      },
      {
        path:'/products/:id',
        element:<ProductData/>
      },
      {
        path:'details',
        element:<ProductDetails/>
      },
      {
        path:'/menproduct',
        element:<MensFashion/>
      },
      {
        path:'/womenproduct',
        element:<WomenFashion/>
      },
      {
        path:'/electronicsproduct',
        element:<Electronics/>
      },
      {
        path:'/bestseller',
        element:<BestSeller/>
      },
      // {
      //   path:'/contactus',
      //   element:<ContactUs/>
      // },
      // {
      //   path:'/audit_table',
      //   element:<Table/>
      // },
      // {
      //   path:'/scrollable_table',
      //   element:<ScrollableTable/>
      // }

    
    ],
      // errorElement:<Error/>
    }
  ])

  return (
    <div className="App">
      {/* <AppLayout/> */}
      <RouterProvider router = {appRouter}></RouterProvider>
    </div>

  );
}

export default App;
