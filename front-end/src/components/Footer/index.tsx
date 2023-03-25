import React from 'react'
import './styles.scss'

import { ReactComponent as ArrowLeftIcon } from '../../assets/arrowLeft.svg'
import { ReactComponent as ArrowRightIcon } from '../../assets/arrowRight.svg'

export const Footer = () => {
  return (
    <div className="footerContainer">
      <span>{<ArrowLeftIcon />}</span>
      <div className="footerPaginationContainer">
        <span>1</span>
        <span className="active">2</span>
        <span>3</span>
      </div>
      <span>{<ArrowRightIcon />}</span>
    </div>
  )
}
