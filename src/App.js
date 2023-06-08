import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';

import Weather from './pages/Weather';
import Signin from './pages/Signin';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          

          <Route path='/signin' element={<Signin />} />
          <Route
            path='/We'
            element={
              <Protected>
                <Weather />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
