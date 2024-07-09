import React from 'react'

function Button({children,className,...props}) {
  return (
    <div className={className} {...props}>{children}</div>
  )
}

export default Button