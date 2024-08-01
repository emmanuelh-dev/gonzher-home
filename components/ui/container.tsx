import React from 'react'

export default function Container({ children, className = '' }) {
  return (
    <div className={`container mx-auto px-4 md:px-6 w-full ${className}`}>{children}</div>
  )
}
