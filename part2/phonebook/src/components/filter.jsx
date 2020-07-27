import React from 'react'

const Filter = (props) => {
    return (
        <div>
        show names with: <input value={props.filter} onChange={props.handleFilterChange} />
      </div>
    )
}

export default Filter