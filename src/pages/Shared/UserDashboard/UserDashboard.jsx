import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Navbar from './../Navbar';

const UserDashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="">
            <Navbar></Navbar>
            <p className="text-4xl text-lavender font-bold text-center m-7 mb-12">Dashboard</p>
            <div className="card card-body shadow-lg shadow-gray-400 bg-base-100 ">
                <p className="card-title text-xl"><span className="text-2xl text-purple-500">Name: </span> {user?.displayName} </p>
                <p className="card-title text-xl"><span className="text-2xl text-purple-500">Email: </span> {user?.email} </p>
                <p className="card-title text-xl"><span className="text-2xl text-purple-500">phoneNumber: </span> {user?.phoneNumber || "Not Provided"} </p>
                <p className="card-title text-xl"><span className="text-2xl text-purple-500">Profile created on: </span> {user?.metadata?.creationTime} </p>
                <p className="card-title text-xl"><span className="text-2xl text-purple-500">Loged in at: </span> {user?.metadata?.lastSignInTime} </p>
            <div className="avatar">
                <div className="rounded-full">
                    <img src={user?.photoURL} alt="Profile picture is not found" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default UserDashboard;