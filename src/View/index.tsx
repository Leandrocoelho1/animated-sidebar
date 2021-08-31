import {motion} from 'framer-motion'
import {useLocation} from 'react-router'
import styled from 'styled-components/macro'

export function Dashboard() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      key={'page-dashboard'}
    >
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{marginLeft: '24px'}}>Dashboard</h1>
      </div>
      <Grid />
    </motion.div>
  )
}

export function Page() {
  const location = useLocation()
  const locationpaths = location.pathname.split('/')
  const title = locationpaths[locationpaths.length - 1]

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      key={'page-' + title}
    >
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{marginLeft: '24px', textTransform: 'capitalize'}}>
          {title}
        </h1>
      </div>
      <Grid />
    </motion.div>
  )
}

function Grid() {
  return (
    <GridContainer>
      <div className="panel panel-1">
        <div className="title"></div>
        <div className="chart">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="panel panel-2">
        <div className="title"></div>
        <Card />
        <Card />
        <Card />
        <div className="button"></div>
      </div>
      <div className="panel panel-3">
        <div className="title"></div>
        <div className="columns">
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="panel panel-4">
        <div className="title"></div>
        <Card />
        <div className="button"></div>
      </div>
    </GridContainer>
  )
}

function Card() {
  return (
    <div className="card">
      <div className="content">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="image"></div>
    </div>
  )
}

const GridContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: clamp(300px, 70% - 8px, 800px) 1fr;
  grid-template-rows: 360px 244px 280px;
  grid-gap: 16px;
  margin-top: 32px;

  .panel {
    background-color: var(--white);
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.panel-1 {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    &.panel-2 {
      grid-column: 2/3;
      grid-row: 1/3;
    }
    &.panel-3 {
      grid-column: 1/2;
      grid-row: 2/4;

      .columns {
        flex: 1;
        display: flex;

        > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        > div + div {
          margin-left: 24px;
        }
      }
    }
    &.panel-4 {
      grid-column: 2/3;
      grid-row: 3/4;
    }
  }

  .title {
    height: 24px;
    width: 40%;
    background-color: var(--gray-100);
    border-radius: 4px;
    margin-bottom: 24px;
  }

  .chart {
    flex: 1;
    display: flex;
    align-items: flex-end;

    div {
      flex: 1;
      opacity: 0.25;
      border-radius: 4px;

      & + div {
        margin-left: 24px;
      }
    }

    div:nth-child(1) {
      height: 20%;
      background-color: var(--green);
    }
    div:nth-child(2) {
      height: 40%;
      background-color: var(--green);
    }
    div:nth-child(3) {
      height: 50%;
      background-color: var(--green);
    }
    div:nth-child(4) {
      height: 25%;
      background-color: var(--orange);
    }
    div:nth-child(5) {
      height: 90%;
      background-color: var(--green);
    }
  }

  .button {
    height: 48px;
    width: 70%;
    border-radius: 24px;
    background-color: var(--gray-100);
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      > div {
        height: 16px;
        width: 40%;
        background-color: var(--gray-100);
        border-radius: 4px;

        &:nth-child(2) {
          width: 80%;
        }
        &:nth-child(3) {
          width: 60%;
        }
      }
    }

    .image {
      height: 64px;
      width: 64px;
      border-radius: 8px;
      background-color: var(--gray-100);
    }
  }
`
