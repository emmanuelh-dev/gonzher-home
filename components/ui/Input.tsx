import React from 'react'
interface Props{
    className?:string,
    children?:React.ReactNode,
    type?:string,
    id?:string,
    name?:string,
    placeholder?:string,
    value?:string,
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}
export default function Input({className, ...props}: Props) {
  return (
    <input
    type="email"
    name="email"
    placeholder="ejemplo@tucorreo.com"
    className=" w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4 "
    {...props}
  />
  )
}
