import React from 'react'

const button = ({child}) => {
  return (
    <div>
      <button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
        {child}
      </button>
    </div>
  )
}

export default button
