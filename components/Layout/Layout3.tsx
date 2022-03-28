type Props = {
  children: JSX.Element | JSX.Element[]
}

export const Layout3 = ({ children }: Props) => {
  return <div className="w-full bg-gray1">{children}</div>
}
