import React from 'react';
import { Provider } from 'react-redux';
import Body from "./components/Body"
import Head from "./components/Head"
import Store from "./utils/Store";
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import MainContainor from "./components/MainContainor";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import SearchResults from "./components/SearchResults";
// import Footer from './components/Footer';


const appRouter = createBrowserRouter([{
  path:"/",
  element:(
    <>
    <Head/>
  <Body/>
 
  </>
  ),
  children:[
    {
      path:"/",
      element:<MainContainor/>
    },
    {
      path:"watch",
      element:<WatchPage/>

    },
    {
      path:"/search",
      element:<SearchResults/>

    },

    {
      path:"demo",
      element:<Demo/>

    },

  ]
}])

function App() {
  return (
    <Provider store={Store}>
    <div>
      
   
    <RouterProvider router={appRouter}/>
  
     
    </div>
    </Provider>
  );
}

export default App;

