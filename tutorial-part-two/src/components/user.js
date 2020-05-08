import React from 'react'
import styles from  './user.module.css'

// example of how to style a comp using CSS Modules
console.log(styles)

const User = ({ username, avatar, excerpt }) => {
  return (
    <div className={ styles.user }>
      <img src={ avatar } className={ styles.avatar } alt='' />
      <div className={ styles.description }>
        <h2 className={ styles.username }>{ username }</h2>
        <p className={ styles.excerpt }>{ excerpt }</p>
      </div>
    </div>
  )
}

export default User