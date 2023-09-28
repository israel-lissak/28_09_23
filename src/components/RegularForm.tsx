import {useForm, SubmitHandler} from 'react-hook-form'

interface FormData {
  username: string;
  email: string;
  password:string;
}

function RegularForm() {
  const {register, 
         handleSubmit, 
         formState: {errors}
        } = useForm<FormData>({
          defaultValues:{
            username:'',
            password:'',
            email:''
          }
        })

  const submit: SubmitHandler<FormData> = (data) => {
      alert(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h1>I Have Changed This To React Hook Form</h1>
      <div>
        <input
          type="text"
          id="username"
          {...register("username",
           {required: "this is required fild" ,
            minLength:{value: 2, message: "must be longer then 2"}})}
          placeholder='Enter UserName'
        />
      </div>
      <p>{errors.username?.message}</p>
      <div>
        <input
          type="text"
          id="email"
          {...register('email', 
          { required: 'This field is required', 
            pattern: { value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'enter valid email' } })}
          placeholder='Enter Email'
        />
      </div>
      <p>{errors.email?.message}</p>
      <div>
        <input
          type="text"
          id="password"
          {...register("password", 
          {required: 'This field is required', 
           pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/,
             message:'enter valid password'}
          })}
          placeholder='Enter Password'
        />
      </div>
      <p>{errors.password?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
