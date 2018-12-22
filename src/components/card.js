import React from 'react'

const Card = ({header, text, classes}) => (
  <div className={classes}>
    <h3>
      {header}
    </h3>
    {text}
    </div>
)
export default Card
