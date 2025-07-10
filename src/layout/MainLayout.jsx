import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/navbar/AdminNavbar'
import AdminFooter from '../components/footer/AdminFooter'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-black dark:text-white">
      <AdminNavbar />

      <main className="flex-1">
        <Outlet />
      </main>
      
      <AdminFooter />
    </div>
  )
}

export default MainLayout
