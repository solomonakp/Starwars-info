import React from 'react'
import styles from 'styles/LandingText.module.scss'

const LandingText = () => {
  return (
    <div className="container">
      <div className={`${styles.landing} text-center`}>
        <header>
          <h1 className="mb-4">Select a path</h1>
        </header>
        <p className="text-dark mx-auto">
          I don't know what you're talking about. I am a member of the Imperial
          Senate on a diplomatic mission to Alderaan-- I call it luck. Don't be
          too proud of this technological terror you've constructed.
        </p>
      </div>
    </div>
  )
}

export default LandingText
