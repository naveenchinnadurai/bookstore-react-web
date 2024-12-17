import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LoginFormValues } from '@/utils/types';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEye as Eye, FaEyeSlash as EyeOff } from "react-icons/fa";
import { IoClose as Close } from "react-icons/io5";
import { Link } from 'react-router-dom';
import bg from '../../assets/banner1.jpg';
import { useUser } from '../../context/userContext';
import { login } from '../../utils/supabase/apiFunctions';



export default function Login() {
    const { navigateTo, setLoggedIn, setUserState } = useUser();

    // useEffect(() => {
    //     if (!user) return navigateTo('/');
    // }, [])




    const [popupData, setPopupData] = useState({
        state: false,
        text: ""
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPopupData({ state: false, text: "" });
        }, 6000);

        return () => clearTimeout(timeoutId);
    }, [popupData]);

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

    const onSubmit: SubmitHandler<LoginFormValues> = async (data: any) => {
        const res: any = await login(data);
        if (res.status) {
            setLoggedIn(true)
            setUserState(res.user);
            navigateTo('/');
        } else {
            setPopupData({
                state: true,
                text: res.error
            })
        }
    };

    return (
        <div className="grid md:grid-cols-2 place-content-evenly gap-5 lg;gap-0 min-h-screen bg-[#090818] p-5 md:p-10">
            {
                popupData.state ? (
                    <Alert className='absolute bottom-3 md:bottom-10 right-3 md:right-10 w-4/5 md:w-2/5 z-10 bg-gray-950 text-white border-zinc-800'>
                        <AlertTitle>Login error</AlertTitle>
                        <AlertDescription className='mt-3'>
                            {popupData.text}
                            <Close className='absolute right-5 top-5' onClick={() => setPopupData({ state: false, text: "" })} />
                        </AlertDescription>

                    </Alert>
                ) : null
            }

            {/* Left Section - Image Slider */}
            <div className="col-span-2 md:col-span-1 h-48 md:h-full md:flex relative md:order-2">
                <div className="relative w-full xlp-10 h-full rounded-3xl md:rounded-r-none overflow-hidden bg-black">
                    <img
                        src={bg}
                        alt="Background"
                        className="h-full w-full z-10 opacity-55 "
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5 md:p-12">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold md:mb-4 text-center">zween Online <br /> Book Store</h1>
                        <div className="text-center">
                            <p className="text-sm md:text-md text-gray-300">
                                New to Zween Books <br className='hidden md:flex' /> create an account now!
                                <Link to="/signup" className="text-slate-200 ml-2 underline hover:text-purple-400 cursor-pointer">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Sign Up Form */}
            <div className="col-span-2 md:col-span-1 flex items-center justify-center md:order-1 lg:px-16 ">
                <div className="w-full max-w-md space-y-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">Login</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 my-5">
                        <div className="relative">
                            <input
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                className="peer w-full border-b border-slate-500 bg-transparent text-lg p-1 focus:outline-none focus:ring-0 focus:border-gray-800"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-1 text-gray-400 transform transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-gray-800 peer-focus:text-[15px]"
                            >
                                Email Address
                            </label>
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>

                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                {...register('password', { required: 'Password is required' })}
                                className="peer w-full border-b border-slate-500 bg-transparent text-lg p-1 focus:outline-none focus:ring-0 focus:border-gray-800"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2 text-gray-400"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            <label
                                htmlFor="password"
                                className="absolute left-0 top-1 text-gray-400 transform transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-gray-800 peer-focus:text-[15px]"
                            >
                                Password
                            </label>
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-gradient-to-tr from-[#1b0f25] to-[#4b206c] py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-[#0a0a14] px-2 text-gray-400">Or Login with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center rounded-lg border border-gray-600 p-2 hover:bg-gray-800">
                            <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center rounded-lg border border-gray-600 p-2 hover:bg-gray-800">
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}