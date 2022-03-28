type Value = {
  text: string
  event: () => {}
}

export const Button1 = ({ text, event }: Value) => {
  return (
    <button
      onClick={event}
      className="hover:shadow-xl text-blue-dark py-2 px-4 rounded-full bg-white"
    >
      {text}
    </button>
  )
}
