import React from "react"
import { useForm } from "react-hook-form"

const MainForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="main-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            name="name"
            class="form-control"
            ref={register({ required: true })}
          />
          {errors.name && (
            <p className="error">This field must include your name.</p>
          )}
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input
            name="phone"
            class="form-control"
            ref={register({ required: true })}
          />
          {errors.phone && (
            <p className="error">This field must include your phone number.</p>
          )}
        </div>
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input
            name="email"
            class="form-control"
            ref={register({
              required: true,
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            })}
          />
          {errors.email && (
            <p className="error">
              This field must include a valid email address.
            </p>
          )}
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            name="message"
            class="form-control"
            ref={register({ required: true })}
          />
          {errors.message && (
            <p className="error">This field must include a message.</p>
          )}
        </div>
        <div class="form-group">
          <label for="materials">Materials Information:</label>
          <textarea name="materials" class="form-control" ref={register} />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary main-form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default MainForm
