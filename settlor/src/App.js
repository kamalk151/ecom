import React from 'react'
import { Box } from '@mui/material'
import Team from './scenes/team'
import { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import Dashboard from './scenes/dashboard'
import Contacts from './scenes/contacts'
import Sidebar from './scenes/global/Sidebar'
import Invoices from './scenes/invoices'
import Form from './scenes/form'
import UsersManagement from './scenes/UsersManagement/index'
import ProductsManagement from './scenes/ProductsManagement'
import OrdersManagement from './scenes/OrdersManagement'
import Inventory from './scenes/InventoryManagement/'



function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Topbar setIsSidebar={setIsSidebar} />
          <main className='content' style={{ display: 'flex' }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/team' element={<Team />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/form' element={<Form />} />
                <Route path='/users' element={<UsersManagement />} />
                <Route path='/orders' element={<OrdersManagement />} />
                <Route path='/inventory' element={<Inventory />} />
                <Route path='/products' element={<ProductsManagement />} />
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}


export default App
