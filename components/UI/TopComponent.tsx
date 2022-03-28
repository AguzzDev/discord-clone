type Props = {
  children: JSX.Element | JSX.Element[]
}

export const TopComponent = ({ children }: Props) => {
  return <div className="flex border-b border-black1 py-1 h-[3.2rem]">{children}</div>
}
