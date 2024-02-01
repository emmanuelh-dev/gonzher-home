import React from 'react'
interface Props{
  className?:string
}
export default function Label({className,...props}:Props) {
  return (
    <label className={`block text-xs text-dark ${className}`} {...props}/>
  )
}