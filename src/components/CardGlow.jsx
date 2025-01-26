import React from 'react'

const CardGlow = ({Feature}) => {
  return (
    <div class="card-wrapper h-1/4 w-full md:h-full">
          <div class="card-content flex items-center justify-center text-xs">
            <div class="max-w-[60%] text-center">
                {Feature}
            </div>
          </div>
    </div>
  )
}

export default CardGlow