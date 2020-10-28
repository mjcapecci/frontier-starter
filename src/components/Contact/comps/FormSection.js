import React from "react"
import MainForm from "./MainForm"
import FormImg from "../../ImagesPreload/form1"

const FormSection = () => {
  return (
    <section className="form-section pattern">
      <div className="form-img-container m-hidden">
        <FormImg width={640} />
      </div>
      <MainForm />
    </section>
  )
}

export default FormSection
