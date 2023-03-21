import React from 'react'

import './styles.scss'
import arrowUpImg from '../../assets/arrowUp.svg'
import arrowDownImg from '../../assets/arrowDown.svg'

type TransitionTypeCardProps = {
  label: string
  transitionType: string
}

export const TransitionTypeCard = ({ label, transitionType }: TransitionTypeCardProps) => {
  return (
    <div className="transitionTypeCardWrapper">
      <div>
        <span>
          <img src={transitionType === 'deposit' ? arrowUpImg : arrowDownImg} alt="logo transition type" />
        </span>
        <label>{label}</label>
      </div>
    </div>
  )
}
