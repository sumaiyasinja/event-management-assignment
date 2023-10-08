import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {
    const {createUserWithEmail} = useContext(AuthContext)

    const handleSignUp=(e) =>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoUrl = form.get('photoUrl')
        const email = form.get('email')
        const password = form.get('password')
        console.log('Register Email:' + email + "Name : " +name, photoUrl)

        const passwordRequirements = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/

        if(!passwordRequirements.test(password))
          { 
            toast.error("Your password must have at least  one capital letter, one small letter and 8 or more character.",
            {     style: {
                  borderRadius: '10px',
                  background: 'white',
                  color: 'red',
                },}
            )
            return
        }
        
        createUserWithEmail(email,password)
        .then(() => {
            toast.success("Registration Successful !")
        })
        .catch(error => {
            toast.error(error.message)
        })
        

    }

  
    return (
        <section>

<Toaster
    position="top-right"
    toastOptions={{   
    success: {
      style: {
        background: 'green',
        color: '#fff',

      },
    },
    error: {
      style: {
        background: 'red',
        color: '#fff',

      },
    },
     }}
/>      
            <div  className="container mx-auto flex justify-center md:h-[100%] md:border-4 border-light-navy-blue border-x-fuchsia-100 rounded-xl	">

<div className="flex gap-3 justify-center items-center flex-col rounded-lg">
    <h1 className="text-3xl font-bold text-light-navy-blue text-center">Sign Up!</h1>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 ">
    <form onSubmit={handleSignUp} className=" md:p-5 " >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span  className="label-text">Password</span>
        </label>
        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span  className="label-text">Photo Link</span>
        </label>
        <input name="photoUrl" type="photoUrl" placeholder="Photo Link" className="input input-bordered" required />
      </div>
      <div className="form-control mt-6">
        <button className="hover:bg-transparent hover:text-black hover:border hover:border-light-navy-blue cursor-pointer p-3 rounded-lg text-base  bg-light-navy-blue text-white font-bold">Register</button>
      </div>
      <div className="form-control mt-6">
        {/* <button onClick={handleGoogleSignIn} className="hover:bg-light-navy-blue hover:text-white flex justify-center gap-2 items-center cursor-pointer p-3 rounded-lg text-base border border-light-navy-blue  text-black font-bold">
          <FcGoogle></FcGoogle>Register with Google</button> */}
          <p className="text-center mt-4">Already have an account? 
          <Link className="text-blue-600 font-bold" to="/login"> Sign In</Link></p>
      </div>
    </form>
  </div>
</div>
</div>
        </section>

    );
};

export default Register;