import React from "react"
import MainForm from "./MainForm"
import FormImg from "../../ImagesPreload/form1"

const FormSection = () => {
  return (
    <div className="form-section">
      <div className="form-img-container">
        <FormImg width={640} />
      </div>
      <MainForm />
    </div>
  )
}

export default FormSection
