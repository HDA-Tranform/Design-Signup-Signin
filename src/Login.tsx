import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Initialize Firebase authentication and navigation
    const auth = getAuth();
    const navigate = useNavigate();
    
    // State variables for managing authentication state, email, password, and error messages
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle sign-in with Google
    const signInWithGoogle = async () => {
        setAuthing(true);
        
        // Use Firebase to sign in with Google
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            });
    }

    // Function to handle sign-in with email and password
    const signInWithEmail = async () => {
        setAuthing(true);
        setError('');

        // Use Firebase to sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });
    }

        return (
        <div className='w-full h-screen bg-[#1a1a1a] flex items-center justify-center'>
            <div className='w-full max-w-[450px] px-6'>
                {/* Header */}
                <div className='w-full flex flex-col mb-10 text-white'>
                    <h3 className='text-4xl font-bold mb-2'>Đăng nhập</h3>
                    <p className='text-lg mb-4'>Chào mừng bạn trở lại! Vui lòng nhập thông tin của bạn.</p>
                </div>

                {/* Inputs */}
                <div className='w-full flex flex-col mb-6'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type='password'
                        placeholder='Password'
                        className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* Email login */}
                <div className='w-full flex flex-col mb-4'>
                    <button
                        className='w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                        onClick={signInWithEmail}
                        disabled={authing}>
                        Đăng nhập bằng Email và Mật khẩu
                    </button>
                </div>

                {/* Error */}
                {error && <div className='text-red-500 mb-4'>{error}</div>}

                {/* OR Divider */}
                <div className='w-full flex items-center justify-center relative py-4'>
                    <div className='w-full h-[1px] bg-gray-500'></div>
                    <p className='text-lg absolute text-gray-500 bg-[#1a1a1a] px-2'>HOẶC</p>
                </div>

                {/* Google login */}
                <button
                    className='w-full bg-white text-black font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-7'
                    onClick={signInWithGoogle}
                    disabled={authing}>
                    Đăng nhập bằng Google 
                </button>

                {/* Sign up */}
                <div className='w-full flex items-center justify-center mt-10'>
                    <p className='text-sm font-normal text-gray-400'>
                        Bạn chưa có tài khoản? <span className='font-semibold text-white cursor-pointer underline'><a href='/signup'>Đăng ký</a></span>
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Login;