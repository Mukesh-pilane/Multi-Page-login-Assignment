import React, { useState } from 'react';
import SignUpDesk from "../assets/SignUpDesk.png"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
const Input = ({ label, val, onChange, error, placeholder }) => {
    return (
        <div>
            {error &&
                <FontAwesomeIcon className='text-orange-500 mr-2' icon={faTriangleExclamation} />
            }
            <label htmlFor={label} className="font-bold">
                {label}
            </label>
            <br />
            <input
                type="text"
                value={val}
                onChange={onChange}
                className={(error ? "bg-red-200 placeholder:text-white" : "bg-gray-200") + " w-full rounded-md p-2"}
                placeholder={placeholder}
            />
        </div>
    )
}



const SignUpForm = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState({
        flag: false,
        des: ''
    });
    const [emailErr, setEmailErr] = useState({
        flag: false,
        des: ''
    });
    const [usernameErr, setUserNameErr] = useState({
        flag: false,
        des: ''
    })

    const [nameErr, setNameErr] = useState({
        flag: false,
        des: ''
    })

    const [termsErr, setTermsErr] = useState({
        flag: false,
        des: ''
    })


    const [isChecked, setIsChecked] = useState(false);
    const [err, setErr] = useState();
    const navigate = useNavigate();

    const validateUserName = (name) => {
        if (name.length === 0) {
            setUserNameErr({ flag: true, des: 'Username is empty' });
            return false;
        } else {
            return true;
        };
    };

    const validateName = (name) => {
        if (name.length === 0) {
            setNameErr({ flag: true, des: 'Name is empty' });
            return false;
        } else {
            return true;
        };
    };

    const validateEmail = (mail)=>{
        if(mail.length===0){
          setEmailErr({flag:true, des:'Email is field'})
          return false
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)))
         {
           setEmailErr({flag:true, des:'Please Enter valid email address'})
           return false
         }else{
           return true
         }
       }

    const validatePassword = (pass) => {
        if (pass.length === 0) {
            setPasswordErr({ flag: true, des: 'Password is empty' });
            return false;
        } else if (pass.length <= 6) {
            setPasswordErr({
                flag: true, des: 'password must be atleast of 6 character'
            })
            return false
        } else if (!(pass.match(/[a-z]/g))) {
            setPasswordErr({
                flag: true,
                des: 'Password must contain lowercase letter'
            })
            return false
        } else if (!(pass.match(/[A-Z]/g))) {
            setPasswordErr({
                flag: true,
                des: 'Password must contain uppercase letter'
            })
            return false
        } else if (!(pass.match(/[0-9]/g))) {
            setPasswordErr({
                flag: true,
                des: 'Password must contain a number'
            })
            return false
        }
        else {
            return true
        }
    };

    const removeErr = () => {
                setPasswordErr({ flag: false, des: '' });
                setUserNameErr({ flag: false, des: '' })
                setNameErr({ flag: false, des: '' })
                setEmailErr({ flag: false, des: '' })
                setTermsErr({ flag: false, des: '' })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        removeErr()
        validateUserName(userName)
        validateName(name)
        validatePassword(password)
        validateEmail(email)
        console.log(isChecked);
        if(!isChecked){
            setTermsErr({ flag: true, des: 'Please agree terms and conditions' });
        }
        // For example, you might want to log the form data:
        console.log({ name, userName, email, });
        if(validateEmail(email) && validateName(name) && validateUserName(userName) && validatePassword(password)){
            try {
                // const res = await axios.post(baseURL + '/users/register',{
                //     name,
                //     userName,
                //     email,
                //     password
                // })
                // localStorage.setItem('tokenStore', res.data.token)
                // setIsLogin(true)
                localStorage.setItem('userSession', JSON.stringify({ name, userName, email }));
                navigate("/getStarted")
            } catch (err) {
                err.response.data.msg && setErr(err.response.data.msg)
            }
        }
    }

    


    return (
        <section className="flex h-[100vh] w-[100vw] grid-cols-[50%_50%]">
            <div className="bg-[#F2D184] hidden  md:block">
                <div className="p-9">
                    <h1 className="text-amber-600 font-serif">Dribble</h1>
                    <h2 className="font-bold text-amber-600">Discover the world's top
                        Designers& Creatives .</h2>
                </div>
                <img src={SignUpDesk} alt="desk"
                    className='w-full'
                />
            </div>

            <div className="bg-white w-full flex flex-col justify-center items-center relative px-4">
                <p className="absolute top-5 right-10">
                    Already a member? <span className="text-blue-500">Sign In</span>
                </p>
                <div className="flex flex-col items-start max-w-[416px]">
                    <h2 className="text-2xl font-semibold text-gray-800  text-left">Sign Up to Dribbble</h2>
                    <ul>
                        <li className="text-red-600">{nameErr.des}</li>
                        <li className="text-red-600">{usernameErr.des}</li>
                        <li className="text-red-600">{emailErr.des}</li>
                        <li className="text-red-600">{passwordErr.des}</li>
                        <li className="text-red-600">{termsErr.des}</li>
                    </ul>
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div className="flex space-x-2">
                            <Input
                                label="Name"
                                error={nameErr.flag}
                                val={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder=""
                            />
                            <Input
                                label="UserName"
                                error={usernameErr.flag}
                                val={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <Input
                            label="Email"
                            val={email}
                            error={emailErr.flag}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                        />
                        <Input
                            label="Password"
                            val={password}
                            error={passwordErr.flag}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="6+ characters"
                        />

                        <div class="flex ">
                            <input id="terms" type="checkbox"
                                value={isChecked}
                                onClick={(e) => {
                                    setIsChecked(!isChecked)
                                }}
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-pink-500" />
                            <label for="terms" class="ms-2 text-sm font-medium text-gray-900">
                                Creating an account means you're okay with our
                                <span className="text-blue-500"> Terms of Service Privacy Policy</span>, and our default <br />
                                <span className="text-blue-500"> Notification Settings</span>.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className=" bg-[#EA4B8B] rounded-md text-white py-2 px-4"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div >
        </section >
    );
};

export default SignUpForm;