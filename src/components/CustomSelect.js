import { ErrorMessage, useField } from "formik"
const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

  return (
    <>
    <label>{label}</label>
    <select {...field} {...props} className={meta.touched && meta.error? "input-error" : ""}/>
      <ErrorMessage name="jobType" className=""/>
    </>
  )
}

export default CustomSelect
