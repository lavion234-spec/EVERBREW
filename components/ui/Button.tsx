'use client'

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import type { ButtonVariant, ButtonSize } from '@/types'

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-fire text-white hover:bg-ember hover:-translate-y-px active:translate-y-0',
  secondary: 'bg-transparent text-bone border border-bone/35 hover:border-bone hover:bg-bone/5',
  gold:      'bg-gradient-gold text-void font-bold hover:brightness-110 hover:-translate-y-px',
  ghost:     'bg-transparent text-ash hover:text-bone underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-[10px] text-[0.8rem]',
  md: 'px-8 py-[14px] text-[0.875rem]',
  lg: 'px-11 py-[18px] text-[1rem]',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?:    ButtonSize
  full?:    boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', full, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2',
          'font-body font-semibold tracking-[0.12em] uppercase rounded-none',
          'transition-all duration-200 ease-smooth',
          'relative overflow-hidden',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          full && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?:    ButtonSize
  full?:    boolean
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = 'primary', size = 'md', full, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2',
          'font-body font-semibold tracking-[0.12em] uppercase rounded-none no-underline',
          'transition-all duration-200 ease-smooth',
          'relative overflow-hidden',
          variantClasses[variant],
          sizeClasses[size],
          full && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
LinkButton.displayName = 'LinkButton'
