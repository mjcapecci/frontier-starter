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
          <label for="service">Service Type:</label>
          <select
            name="service"
            class="form-control"
            ref={register({
              required: true,
            })}
          >
            <option value="" hidden>
              Click to Select
            </option>
            <option value="Estimate">Estimate</option>
            <option value="Design">Design</option>
            <option value="Repair">Repair</option>
            <option value="Build">Build</option>
          </select>
          {errors.service && (
            <p className="error">This field must include a selected service.</p>
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
