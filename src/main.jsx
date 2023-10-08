import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './routes/Routes';
import AuthProvider from './provider/AuthProvider';
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>

     {/* context provider linked */}
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
  
)
