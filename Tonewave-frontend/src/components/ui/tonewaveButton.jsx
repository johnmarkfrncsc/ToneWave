import React, { Children } from 'react'

const TonewaveButton = ({children}) => {
  return (
    <div className="btn shadow-none bg-transparent text-md font-semibold py-5">
           {
            children
           }
        </div>
  )
}

export default TonewaveButton