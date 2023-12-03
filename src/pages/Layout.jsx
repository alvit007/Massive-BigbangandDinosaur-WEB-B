import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

function Layout({children}) {
  return (
    <>
      <React.Fragment>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navbar />
            <div className="flex-1 p-4">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default Layout