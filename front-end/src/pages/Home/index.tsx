import React from 'react'

import './styles.scss'

import { TransitionTypeCard } from '../../components/TransitionTypeCard'

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeBackgroundHeader"></div>
      <div className="homeBackgroundBody"></div>
      <div className="homeContentWrapper">
        <div className="homeContent"></div>
      </div>
      {/* <TransitionTypeCard label="Entrada" transitionType="deposit" /> */}
    </div>
  )
}
