type Props = {
  children: JSX.Element | JSX.Element[]
}

export const Layout2 = ({ children }: Props) => {
  return (
  
      <div className="w-3/12 bg-gray4">{children}</div>
    
  )
}
