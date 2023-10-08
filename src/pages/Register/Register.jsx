import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const handleSignIn=(e) =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log('Register Email:' + email)
    }
    const handleGoogleSignIn=(e) =>{
        e.preventDefault()
    }
    return (
<div  className="container mx-auto flex justify-center md:h-[96vh] md:border-4 border-light-navy-blue border-x-fuchsia-100 rounded-xl	">
  <div className="flex gap-3 justify-center items-center flex-col rounded-lg">
      <h1 className="text-3xl font-bold text-light-navy-blue text-center">Sign Up!</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 ">
      <form onSubmit={handleSignIn} className=" md:p-5 card-body" >
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
        <div className="form-control mt-6">
          <button className="hover:bg-transparent hover:text-black hover:border hover:border-light-navy-blue cursor-pointer p-3 rounded-lg text-base  bg-light-navy-blue text-white font-bold">Register</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleSignIn} className="hover:bg-light-navy-blue hover:text-white flex justify-center gap-2 items-center cursor-pointer p-3 rounded-lg text-base border border-light-navy-blue  text-black font-bold">
            <FcGoogle></FcGoogle>Register with Google</button>
            <p className="text-center mt-4">Already have an account? 
            <Link className="text-blue-600 font-bold" to="/login"> Sign In</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;