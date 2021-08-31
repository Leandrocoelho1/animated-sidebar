import {ReactNode} from 'react'
import {BiBell, BiMessageDetail, BiSearch} from 'react-icons/bi'
import type {} from 'styled-components/cssprop'
import styled from 'styled-components/macro'

import avatar from './avatar.svg'

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
      <div
        css={`
          display: flex;
          flex-direction: column;
        `}
      >
        {children}
      </div>
    </ContentWrapper>
  )
}

export function Header() {
  return (
    <HeaderContainer>
      <label htmlFor="search">
        <BiSearch size={24} />
        <input type="text" id="search" placeholder="Search" />
      </label>

      <div className="actions">
        <button>
          <BiMessageDetail size={24} />
        </button>
        <button>
          <BiBell size={24} />
        </button>
        <div className="avatar">
          <img src={avatar} alt="User profile" />
        </div>
      </div>
    </HeaderContainer>
  )
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 128px;
  width: 100%;
  padding: 40px;
  background-color: var(--white);

  label {
    display: flex;
    align-items: center;
    width: 340px;
    height: 48px;
    padding: 12px;
    border: 2px solid var(--gray-100);
    border-radius: 12px;

    :focus-within {
      border: 2px solid var(--gray-600);
    }

    svg {
      fill: var(--gray-600);
    }

    input {
      margin-left: 12px;
      border: none;
      flex: 1;
      height: 24px;
      outline: none;

      ::placeholder {
        color: var(--gray-600);
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      height: 48px;
      width: 48px;
      border-radius: 24px;
      border: none;
      background-color: transparent;
      color: var(--gray-600);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 200ms;

      &:hover {
        color: var(--gray-900);
        background-color: var(--gray-100);
      }

      & + button {
        margin-left: 8px;
      }
    }

    .avatar {
      margin-left: 8px;
      height: 48px;
      width: 48px;
      border-radius: 24px;
      background-color: var(--orange);
      overflow: hidden;
    }
  }
`

export const Main = styled.main`
  padding: 40px;
  height: calc(100vh - 128px);
  overflow-y: auto;
`
