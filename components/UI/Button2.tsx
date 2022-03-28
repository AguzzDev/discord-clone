type Value = {
  text: string
}

export const Button2 = ({ text }: Value) => {
  return (
    <button className="bg-gray3 w-full text-left m-2 px-2 py-[.35rem] text-graylight text-xs rounded-sm">
      {text}
    </button>
  )
}
