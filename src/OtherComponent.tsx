import { ReactNode, FC } from 'react'

type OtherType = {
    children: ReactNode
}

export const OtherComponent: FC<OtherType> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
