import React from 'react'
import styles from 'styles/Loader.module.scss'
import PropTypes from 'prop-types'

const Loader = ({ type = 1, fixed = false }) => {
  return (
    <div
      className={`${styles.loaderContainer} ${fixed ? styles.fixed : ''}`}
      data-testid="loader"
    >
      {type === 1 ? (
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.ldsEllipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default Loader
