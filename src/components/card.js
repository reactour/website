import React from 'react'

const Card = ({header, text, classes, children}) => (
    <div className={classes}>
      <h3 className="card-header">
        {header}
      </h3>
      {text}
      {children}
      </div>
)

export default Card
