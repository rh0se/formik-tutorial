import { ErrorMessage, useField } from "formik";
const CustomInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""}/>
      <ErrorMessage name="username"/>
    </>
  )
}

export default CustomInput
