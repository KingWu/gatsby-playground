import React from 'react'
import PlatButton from 'components/presenter/buttons/PlatButton'
import LampOn from 'assets/icon/idea-on.svg'
import LampOff from 'assets/icon/idea-off.svg'
import styles from './header.module.css'

const Header = ({isLampOn, onLampClick}) => {
  console.log(styles)
  const lampCmp = isLampOn ? <LampOn className={styles['lamp--icon']} /> : <LampOff className={styles['lamp--icon']} />
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles['header-bar']}>
          <h3 className={styles['header--title']}>App</h3>
          <PlatButton text="合作伙伴" onClick={() => console.log('here')} />
          <PlatButton text="留言" />
          <PlatButton text="購買" />
        </div>
        <div className={styles['lamp--container']}>
          <div className={styles.lamp}>
            <button type="button" className={`${!isLampOn ? 'svg-fill' : ''} button-icon`} onClick={onLampClick}>
              {lampCmp}
            </button>
            <div 
              className={`button-icon ${styles['lamp--tail']}`} 
              onClick={onLampClick} 
              onKeyDown={onLampClick} 
              role="button"
              tabIndex={0} 
            />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header