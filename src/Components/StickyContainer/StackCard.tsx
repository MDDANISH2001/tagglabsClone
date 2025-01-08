import React, { ReactNode } from 'react'

interface IStackCard{
  children: ReactNode;
  className: string;
  contentClassName?:string;
}

export const StackCard: React.FC<IStackCard> = ({ children, className, contentClassName }) => {

  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`sticky top-0 rounded-t-[20px] py-10 -z-50 ${className}`}>
      <div className='w-full'>
        {childrenArray[0]}
      </div>

      <div className={`h-full xl:w-1/2 md:w-3/4 ${contentClassName}`}>
        {childrenArray[1]}
      </div>
    </div>
  )
}
