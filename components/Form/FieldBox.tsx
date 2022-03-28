import { Field } from "formik"

type Props = {
  type: string
  value: string
  placeholder: string
  inputType: string
  handleChange:(e: React.ChangeEvent<any>) => void
}

export const FieldBox = ({
  type,
  value,
  handleChange,
  placeholder,
  inputType,
}: any) => {
  return (
    <Field
      name={type}
      autoComplete="off"
      type={inputType}
      value={value}
      onChange={handleChange}
      className="w-full px-5 py-2 border border-gray-300 rounded-md"
      placeholder={placeholder}
    />
  )
}
