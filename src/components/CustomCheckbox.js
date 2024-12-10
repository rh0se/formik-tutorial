import { useField, ErrorMessage } from "formik";

const CustomCheckbox = ({...props}) => {
    const [field, meta] = useField(props);

  return (
    <>
    <div className="checkbox">
    <input type="checkbox" {...field} {...props} id={props.id} className={meta.touched && meta.error? "input-error" : ""}/>
      <span>I accept the terms of service</span>
      <ErrorMessage name="acceptedTo"/>
      </div>
    </>
  )
}

export default CustomCheckbox
