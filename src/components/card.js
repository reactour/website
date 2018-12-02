import React from 'react'


// TODO: image grid
const cardWrapperStyle = (last) => ({
  width: last ? '33.34%' : '33.33%',
  padding: '1rem',
  backgroundColor: 'red',
  float: 'left',
  height: '60vh',
})

const Card = ({header, text, last}) => (
  <div style={cardWrapperStyle(last)}>
    <h3>
      {header}
    </h3>
    {text}
    </div>
)
export default Card
