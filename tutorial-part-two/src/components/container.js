import React from 'react'
import containerStyles from './container.module.css'

// styling using module.css
export default function Container({ children }) {
  return <div className={ containerStyles.container }>
    { children }
  </div>
}