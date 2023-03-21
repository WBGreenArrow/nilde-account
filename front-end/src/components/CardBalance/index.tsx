import React, { useEffect, useState } from 'react'

import './styles.scss'

import moneyImg from '../../assets/moneyIcon.svg'
import arrowUpImg from '../../assets/arrowUp.svg'
import arrowDownImg from '../../assets/arrowDown.svg'

type CardBalanceProps = {
  label: string
  type: string
  value: string
}

export const CardBalance = ({ label, type, value }: CardBalanceProps) => {
  const [iconCard, setIconCard] = useState<string>('')

  useEffect(() => {
    if (type === 'deposit') {
      setIconCard(() => arrowUpImg)
      return
    }

    if (type === 'checkout') {
      setIconCard(() => arrowDownImg)
      return
    }
    setIconCard(() => moneyImg)
  })

  return (
    <div className={type !== 'deposit' && type !== 'checkout' ? 'cardContainer backgroundGreen' : 'cardContainer'}>
      <div className="cardContent">
        <div className="cardInfoType">
          <span>{label}</span>
          <span>
            <img src={iconCard} alt="icon card" />
          </span>
        </div>
        <span>{value}</span>
      </div>
    </div>
  )
}
