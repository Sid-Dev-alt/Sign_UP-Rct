import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const{
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data);
  }


  return (


    <form  onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up </h1>
     <div className="mb-3 row">
    <label htmlFor='email'>Email:</label>
    {/* <placeholder>enter your email </placeholder> */}
    <input className={errors.email ? 'input-error': "form-control"}
    {...register('email',
      {
        required: true,
        pattern:
        { value: /\S+@\S+\.\S+/,
          message: "Enter a valid email address"
        },
      }
      )}/>
      {errors.email && <p className='error-mssg'>{errors.email.message}</p>}
      {errors.email && <span className='error-mssg'>This field is required</span>}

  </div>

  <div className="mb-3 row">
  <label htmlFor='password'>Password:</label>
        <input type = 'password'className={errors.password ? 'input-error': "form-control"}
    {...register('password',
      {required: true}
    )}/>
    {errors.password && <p className='error-mssg'>{errors.password.message}</p>}
    {errors.password && <span className='error-mssg'>This field is required</span>}

  </div>



  <div className="col-auto" >
  <input className="btn btn-primary mb-3" type ='submit' disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />

  </div>
  {/* </div> */}
  {/* </div> */}
    </form>

)
}

export default App
