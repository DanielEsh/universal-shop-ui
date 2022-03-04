import React, { forwardRef, ReactNode, useRef } from 'react'
import cn from 'classnames'
import { useMergedRef } from '@/hooks/useMergeRef'

export type ButtonProps = {
    children: ReactNode
    addonLeft?: ReactNode
    addonRight?: ReactNode
    className?: string
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'error' | 'ghost'
    size?: 'small' | 'medium' | 'large' | 'block'
    type?: 'button' | 'submit'
    outline?: boolean
    disabled?: boolean
    loading?: boolean
    onMouseDown?: (event) => void
    onMouseUp?: (event) => void
    onMouseEnter?: (event) => void
    onMouseLeave?: (event) => void
    onClick?: (event) => void
    onFocus?: () => void
    onBlur?: () => void
    id?: string
    title?: string
    role?: string
    href?: string
}

export const Button = forwardRef<HTMLElement, ButtonProps>((props, innerRef) => {
  const {
    children,
    className,
    addonLeft,
    addonRight,
    color = 'primary',
    outline,
    size = 'medium',
    loading,
    disabled,
    onClick,
    onMouseLeave,
    href,
    id,
    title,
    role,
    onBlur,
    onFocus,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    type,
  } = props

  const rootClasses = 'relative flex justify-center items-center rounded-md overflow-hidden ripple-hover__container focus:outline-none focus:ring '

  const colors = {
    primary: 'bg-primary-500 border border-primary-500 text-black ring-offset-1 ring-primary-300',
    secondary: 'bg-dark-500 border text-white border-dark-500 dark:bg-light-500 dark:text-black dark:border-light-500 ring-offset-1 ring-dark-300',
    gray: 'bg-gray-100 border text-black border-gray-100 ring-offset-1 ring-gray-300',
    success: 'bg-success-500 border border-success-500 text-white ring-offset-1 ring-success-500',
    error: 'bg-error-500 border border-error-500 text-white ring-offset-1 ring-error-500',
    ghost: 'bg-transparent color-black',
  }

  const outlineColors = {
    primary: 'bg-white border-primary-500 text-black',
    secondary: 'bg-white border-dark-500 text-black dark:bg-dark-500 dark:text-white dark:border-light-500',
    gray: 'bg-white border-gray-100 text-dark',
    success: 'bg-white border-success text-success',
    danger: 'bg-white border-danger text-danger',
  }

  const sizes = {
    small: 'py-1 px-2',
    medium: 'py-2 px-4',
    large: 'py-4 px-8',
    block: 'w-full h-full',
  }

  const defaultRef = useRef<HTMLButtonElement>(null)
  const mergedRefs = useMergedRef(innerRef, defaultRef)

  const Tag = href ? 'a' : 'button'

  const classes = cn(
    'button',
    className,
    rootClasses,
    sizes[size],
    {
      [' opacity-70 cursor-not-allowed']: disabled,
      [colors[color]]: !outline,
      [outlineColors[color]]: outline,
    })

  const handleClick = (event) => {
    if (onClick) onClick(event)
  }

  const handleMouseEnter = (event) => {
    if (onMouseEnter) onMouseEnter(event)
  }

  return (
    <Tag
      ref={mergedRefs}
      href={href}
      title={title}
      role={role}
      id={id}
      type={type}
      className={classes}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {
        !loading && addonLeft && (
          <span className="z-10 mx-1 mr-2">
            {addonLeft}
          </span>
        )
      }

      {!loading && (
        <span className="z-10">{children}</span>
      )}

      {/* {
        loading && <Loader />
      } */}

      {
        !loading && addonRight && (
          <span className="z-10 mx-1 ml-2">
            {addonRight}
          </span>
        )
      }
    </Tag>
  )
})
