import React from 'react'
import { useTranslation  } from 'gatsby-plugin-react-i18next'
import styles from './footer.module.css'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <p className={styles.content}>
        {t('footer.license')}
      </p>
    </footer>
  )
}

export default Footer