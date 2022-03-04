import { ForwardedRef } from 'react'

export const assignRef = <T = any>(ref: ForwardedRef<T>, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value)
  } else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
    ref.current = value
  }
}
