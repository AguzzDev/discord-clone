type Props = {
  children: JSX.Element | JSX.Element[]
}

export const Layout2 = ({ children }: Props) => {
  return <div className="flex flex-col w-[18vw] bg-gray4">{children}</div>
}
