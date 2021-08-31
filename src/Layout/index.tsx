import { ReactNode } from 'react'
import type {} from 'styled-components/cssprop'
import styled from 'styled-components/macro'

export const Layout = styled.div`
  height: 100%;
  display: flex;
`

const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
`

export function Content({children}: {children: ReactNode}) {
  return (
    <ContentWrapper>
      <div css={`
        display: flex;
        flex-direction: column;
      `}>
        {children}
      </div>
    </ContentWrapper>
  )
}

export const Header = styled.header`
  position: fixed;
  height: 128px;
  width: 100%;
  padding: 40px;
  background-color: var(--white);
`

export const Main = styled.main`
  margin-top: 128px;
  padding: 40px;
  height: calc(100vh - 128px);
  overflow-y: auto;
`