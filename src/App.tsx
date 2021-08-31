import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {GlobalStyles} from './styles/global'
import {Content, Header, Layout, Main} from './Layout'
import {Sidebar} from './Sidebar'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <div style={{background: 'red', height: '1000px'}}>ae</div>
    </>
  )
}

function App() {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <Sidebar />
        <Content>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<h1>About</h1>} />
            </Routes>
          </Main>
        </Content>
      </Layout>
    </div>
  )
}

export default App
