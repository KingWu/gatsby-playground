import React from 'react'
import { Button } from '@material-ui/core'
import styles from './button.module.css' 

const PlatButton = ({ text, className = '', onClick = null}) => {
  return (
    <Button
      className={`${styles['plain-button']} ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default PlatButton