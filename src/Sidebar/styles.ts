import {motion} from 'framer-motion'
import styled, {css} from 'styled-components/macro'

const baseStyles = css<{isActive: boolean}>`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px;
  border-radius: 12px;
  color: ${props => (props.isActive ? 'var(--gray-900)' : 'var(--gray-600)')};
  background-color: ${props =>
    props.isActive ? 'var(--gray-100)' : 'transparent'};
  transition: color 150ms ease-out, background-color 150ms ease-out;
`

const baseHoverStyles = css`
  background-color: var(--gray-100);
  color: var(--gray-900);
`

export const Container = styled.div<{isSidebarOpen: boolean}>`
  background-color: var(--white);
  width: ${props => (props.isSidebarOpen ? '340px' : '98px')};
  border-right: 2px solid var(--gray-50);
  min-height: 100vh;
  box-shadow: 0px 0px 14px rgba(31, 51, 71, 0.1);
  z-index: 1;
  transition: width 250ms cubic-bezier(0, 0, 0.2, 1)
    ${props => (props.isSidebarOpen ? '0ms' : '200ms')};

  header {
    position: relative;
    padding: 40px 24px;

    .logo {
      overflow: hidden;
      display: flex;
      align-items: center;

      p {
        margin-left: 12px;
        font-weight: 700;
        font-size: 1.4rem;
      }
    }

    button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(50%, -50%);
      width: 34px;
      height: 34px;
      border: none;
      border-radius: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--white);
      box-shadow: 0px 3px 20px rgba(31, 51, 71, 0.14);
      transition: all 200ms;

      svg {
        transition: transform 200ms;
        transform: rotate(${props => (props.isSidebarOpen ? 0 : '180deg')});
      }

      &:hover {
        box-shadow: 0px 5px 24px rgba(31, 51, 71, 0.12);
        transform: translate(50%, calc(-50% - 2px));
      }
    }
  }

  nav {
    padding: 0 24px;

    > ul {
      list-style: none;

      li + li {
        margin-top: 8px;
      }
    }
  }
`

export const NavItemContainer = styled.li<{isActive: boolean}>`
  position: relative;

  a {
    ${baseStyles};

    svg {
      flex-shrink: 0;
    }

    svg + p {
      margin-left: 12px;
    }

    &:hover {
      ${baseHoverStyles};
    }
  }
`
export const NavSubItemContainer = styled(motion.li)<{isActive: boolean}>`
  display: flex;
  align-items: center;

  .circle {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    margin: 0 9px 0 21px;
    background-color: ${props =>
      props.isActive ? 'var(--gray-900)' : 'var(--gray-600)'};
    transition: background-color 150ms ease-out;
  }

  a {
    flex: 1;
    ${baseStyles};
  }

  &:hover {
    .circle {
      background-color: var(--gray-900);
    }

    a {
      ${baseHoverStyles};
    }
  }
`

export const NavSectionContainer = styled.li<{
  isToggled: boolean
  isActive: boolean
}>`
  position: relative;

  .toggle {
    width: 100%;
    justify-content: space-between;
    border: none;
    ${baseStyles};

    .info {
      display: flex;
      align-items: center;

      svg + p {
        margin-left: 12px;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      svg {
        transform: rotate(${props => (!props.isToggled ? 0 : '180deg')});
      }
    }
  }

  &.active .toggle {
    ${baseHoverStyles};
  }

  .list {
    list-style: none;
    margin: 8px 0;

    li + li {
      margin-top: 8px;
    }
  }

  .floating-list {
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;

    ul {
      margin-top: 56px;
      width: 240px;
      border-radius: 16px;
      background: var(--white);
      box-shadow: 0px 8px 32px rgba(31, 51, 71, 0.12);
      padding: 8px 8px 8px 0;
    }
  }

  .label {
    position: absolute;
    top: 6px;
    left: calc(100% + 8px);
    height: 36px;
    border-radius: 8px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    background: var(--gray-900);
    color: var(--white);
  }

  &:hover > .toggle {
    ${baseHoverStyles};
  }
`

export const Label = styled(motion.div)`
  position: absolute;
  top: 6px;
  left: calc(100% + 8px);
  height: 36px;
  border-radius: 8px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  background: var(--gray-900);
  color: var(--white);
`

export const NotificationContainer = styled(motion.div)<{
  color: 'green' | 'orange'
}>`
  position: absolute;
  top: 50%;
  right: -12px;
  width: 24px;
  height: 24px;

  background-color: ${props => `var(--${props.color})`};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
