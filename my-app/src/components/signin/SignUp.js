import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './SignUp.css';
import axios from 'axios';

export function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, password });
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (


        // <div className="bg-white h-screen flex justify-between items-center p-36">
        //     <div className="w-[700px] ">
        //         <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
        //     </div>
        //     <div className="columns-1 h-96">

        //         <form
        //             onSubmit={handleSubmit}
        //             className="flex text-black h-"
        //         >
        //             <div>
        //                 Your Name
        //             <input type='text' onChange={(e) => setName(e.target.value)} />
        //             </div>
        //             Your email
        //             <input type='text' onChange={(e) => setEmail(e.target.value)} />
        //             Your password
        //             <input type='password' onChange={(e) => setPassword(e.target.value)} />

        //             <button type="submit">Submit</button>
        //         </form>
        //     </div>
        // </div>





        <div className="min-h-screen flex items-center justify-center bg-gray-500 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {/* <input type="hidden" name="remember" defaultValue="true" /> */}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}