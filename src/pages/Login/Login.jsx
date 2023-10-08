import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const handleSignIn=(e) =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log('Login Email:' + email)
    }
    const handleGoogleSignIn=(e) =>{
        e.preventDefault()
    }
    return (
<div  className="container mx-auto flex justify-center h-[95vh] border-4 border-lavender border-x-fuchsia-100 rounded-xl	">
  <div className="flex gap-3 justify-center items-center flex-col rounded-lg">
      <h1 className="text-4xl font-bold text-light-navy-blue text-center">Sign In!</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 ">
      
      <form onSubmit={handleSignIn} className="card-body " >
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
          <button className="hover:bg-transparent hover:text-black hover:border hover:border-lavender cursor-pointer p-3 rounded-lg text-base  bg-lavender text-white font-bold">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleSignIn} className="hover:bg-lavender hover:text-white flex justify-center gap-2 items-center cursor-pointer p-3 rounded-lg text-base border border-lavender  text-black font-bold">
            <FcGoogle></FcGoogle>Login with Google</button>
                        <p className="text-center mt-4">Do not have an account? 
            <Link className="text-blue-600 font-bold" to="/register"> Sign Up</Link></p>
        </div>
      </form>

      
    </div>
  </div>
</div>
    );
};

export default Login;