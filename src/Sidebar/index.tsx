import React, {
  useState,
  ReactNode,
  ComponentType,
  useEffect,
  useRef,
} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {
  BiCalendarCheck,
  BiChevronDown,
  BiChevronLeft,
  BiFile,
  BiHomeAlt,
  BiPieChart,
  BiPurchaseTagAlt,
  BiUserCircle,
} from 'react-icons/bi'
import {IconBaseProps} from 'react-icons/lib'
import {Link, useMatch} from 'react-router-dom'
import {
  Container,
  NavItemContainer,
  NavSectionContainer,
  NavSubItemContainer,
} from './styles'

import smallLogo from './logo-small.svg'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Container isSidebarOpen={isOpen}>
      <header>
        <div className="logo">
          <img src={smallLogo} alt="Freelas" />
          <AnimatePresence>
            {isOpen ? <motion.p {...fadeOut}>freelas</motion.p> : null}
          </AnimatePresence>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <BiChevronLeft size={24} />
        </button>
      </header>
      <nav>
        <ul>
          <NavItem
            icon={BiHomeAlt}
            name="Dashboard"
            isSidebarOpen={isOpen}
            to="/"
          />
          <NavSection
            name="Contacts"
            icon={BiUserCircle}
            isSidebarOpen={isOpen}
          >
            <NavSubItem name="Clients" to="/contacts/clients" />
            <NavSubItem name="Providers" to="/contacts/providers" />
          </NavSection>
          <NavItem
            icon={BiFile}
            name="Projects"
            isSidebarOpen={isOpen}
            to="/projects"
          />
          <NavItem
            icon={BiCalendarCheck}
            name="Schedules"
            isSidebarOpen={isOpen}
            to="/schedules"
          />
          <NavSection name="Finance" icon={BiPieChart} isSidebarOpen={isOpen}>
            <NavSubItem name="Income" to="/finance/income" />
            <NavSubItem name="Expenses" to="/finance/expenses" />
            <NavSubItem name="Refunds" to="/finance/refunds" />
          </NavSection>
          <NavItem
            icon={BiPurchaseTagAlt}
            name="Marketing"
            isSidebarOpen={isOpen}
            to="/marketing"
          />
        </ul>
      </nav>
    </Container>
  )
}

interface NavItemProps {
  isSidebarOpen: boolean
  to: string
  icon: ComponentType<IconBaseProps>
  name: string
}

function NavItem({isSidebarOpen, to, name, icon: Icon}: NavItemProps) {
  let match = useMatch(to)
  return (
    <NavItemContainer isActive={!!match}>
      <Link to={to}>
        <Icon size={24} />
        <AnimatePresence>
          {isSidebarOpen ? <motion.p {...fadeOut}>{name}</motion.p> : null}
        </AnimatePresence>
      </Link>
    </NavItemContainer>
  )
}

interface NavSubItemProps {
  name: string
  to: string
}

function NavSubItem({name, to}: NavSubItemProps) {
  const match = useMatch(to)

  return (
    <NavSubItemContainer variants={itemFadeIn} isActive={!!match}>
      <div className="circle">&nbsp;</div>
      <Link to={to}>
        <p>{name}</p>
      </Link>
    </NavSubItemContainer>
  )
}

interface NavSectionProps {
  name: string
  icon?: ComponentType<IconBaseProps>
  children: ReactNode
  isSidebarOpen: boolean
}

function NavSection({
  icon: Icon,
  name,
  children,
  isSidebarOpen,
}: NavSectionProps) {
  const sectionRef = useRef<HTMLLIElement>(null)
  const [isToggled, setIsOpen] = useState(false)
  const [showFloaters, setShowFloaters] = useState(false)
  const match = useMatch(name.toLowerCase() + '/*')

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsOpen(false)
    }
  }, [isSidebarOpen])

  function handleSectionToggle() {
    if (!isSidebarOpen) return
    setIsOpen(!isToggled)
  }

  function shouldShowFloaters() {
    if (isSidebarOpen) return
    setShowFloaters(true)
  }

  function shouldHideFloaters() {
    if (isSidebarOpen) return
    setShowFloaters(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (isSidebarOpen) return
    if (e.code === 'Enter') {
      setShowFloaters(!showFloaters)
    }
  }

  return (
    <NavSectionContainer
      onMouseEnter={shouldShowFloaters}
      onMouseLeave={shouldHideFloaters}
      isToggled={isToggled}
      isActive={!!match}
      ref={sectionRef}
    >
      <button
        className="toggle"
        onClick={handleSectionToggle}
        onKeyDown={handleKeyDown}
      >
        <div className="info">
          {Icon && <Icon size={24} />}
          <AnimatePresence>
            {isSidebarOpen ? <motion.p {...fadeOut}>{name}</motion.p> : null}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isSidebarOpen ? (
            <motion.div className="icon">
              <BiChevronDown size={24} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isToggled ? (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={listFadeIn}
            className="list"
          >
            {children}
          </motion.ul>
        ) : null}

        {showFloaters ? (
          <motion.div
            className="floating-list"
            {...floatingListFadeIn}
            key={`floating-list-${name}`}
          >
            <ul>{children}</ul>
          </motion.div>
        ) : null}

        {showFloaters ? (
          <motion.div {...labelFadeIn} key={`label-${name}`} className="label">
            <p>{name}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </NavSectionContainer>
  )
}

const fadeOut = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0},
  transition: {
    duration: 0.2,
  },
}

const labelFadeIn = {
  initial: {opacity: 0, x: -10},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: -10},
  transition: {duration: 0.15},
}

const floatingListFadeIn = {
  initial: {opacity: 0, y: -10},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -10},
  transition: {duration: 0.2},
}

const listFadeIn = {
  visible: {
    height: 'auto',
    marginTop: 8,
    opacity: 1,
    transition: {
      duration: 0.15,
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  hidden: {
    marginTop: 0,
    height: 0,
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {
    marginTop: 0,
    height: 0,
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const itemFadeIn = {
  visible: {opacity: 1, x: 0, transition: {duration: 0.2}},
  hidden: {opacity: 0, x: -10},
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
}
