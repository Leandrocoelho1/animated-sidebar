import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {GlobalStyles} from './styles/global'
import {Content, Header, Layout, Main} from './Layout'
import {Sidebar} from './Sidebar'
import {Dashboard, Page} from './View'
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <Sidebar />
        <Content>
          <Header />
          <Main>
            <AnimatePresence exitBeforeEnter={true}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/*" element={<Page />} />
              </Routes>
            </AnimatePresence>
          </Main>
        </Content>
      </Layout>
    </div>
  )
}

export default App
