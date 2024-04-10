import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import inspiration from "../assets/inspiration.png"
import share from "../assets/share.png"
import designer from "../assets/designer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { profile1, profile2, profile3, profile4, profile5, profile6 } from "../assets/defaultProfileImg"
import {useNavigate} from "react-router-dom"

const SignupStep = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [location, setLocation] = useState("");
    const [showNext, setShowNext] = useState(false);
    const navigate = useNavigate();

    const [checkboxes, setCheckboxes] = useState({
        designerShare: false,
        anotherDesignerShare: false,
        inspirationShare: false
    });
    const handleDefaultImg = () => {
        setIsVisible(!isVisible)
    }

    const handleCheckboxChange = (name) => {
        setCheckboxes({
            ...checkboxes,
            [name]: !checkboxes[name]
        });
    };

    
    const handleSubmit = () => {
        // Use the checkboxes state for further processing
        // console.log(checkboxes, location, profilePic);
        if(checkboxes.designerShare || checkboxes.anotherDesignerShare || checkboxes.inspirationShare){
            navigate("/")
        }
        // You can send this state to the backend or perform any other action
    };
    return (
        <>
            <div className="flex px-4 sm:px-[4rem] pt-[4rem] pb-[1rem] items-center space-x-5">
                <svg width="76" height="18" viewBox="0 0 210 59" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" class="dribbble-logo fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M206.622 31.928a1.032 1.032 0 011.631.058h-.003l1.534 2.097c.291.403.289.96-.015 1.352-2.663 3.454-7.329 6.78-12.959 7.1-4.444.254-8.109-1.43-10.104-4.613a1.025 1.025 0 00-1.709-.07c-2.367 3.177-5.231 5.661-8.215 5.833-5.315.303-6.816-3.262-5.502-11.122.132-.783-.554-1.444-1.293-1.249a10.101 10.101 0 01-3.459.319 1.056 1.056 0 00-1.106.748c-1.967 6.46-6.648 12.47-12.707 12.819-3.868.221-9.646-1.995-9.068-11.254.048-.753-.628-1.346-1.324-1.135a10.249 10.249 0 01-3.849.43 1.053 1.053 0 00-1.103.748c-1.967 6.46-6.648 12.47-12.707 12.818-3.868.221-9.646-1.995-9.068-11.253.048-.754-.628-1.347-1.324-1.136-1.213.369-2.519.545-3.849.43a1.054 1.054 0 00-1.103.748c-1.968 6.46-6.648 12.47-12.707 12.818-2.752.158-6.473-.92-8.182-4.888a1.034 1.034 0 00-1.805-.216c-2.393 3.265-5.307 5.842-8.35 6.016-3.119.179-4.825-1.072-5.567-3.304a1.033 1.033 0 00-1.78-.35c-2.129 2.502-4.554 4.336-7.007 4.476-3.783.219-5.96-2.585-6.14-5.981-.207-3.963 1.507-8.603 3.42-13.667.266-.704-.215-1.465-.941-1.497a25.86 25.86 0 01-3.55-.384c-.534-.103-1.053.229-1.205.772-2.263 8.08-5.729 16.001-8.653 20.683-.327.524-1.003.664-1.494.303l-2.233-1.644a1.123 1.123 0 01-.276-1.486c4.226-6.769 7.978-17.366 9.271-25.205.081-.5.489-.872.978-.901l2.97-.171c.68-.04 1.217.595 1.093 1.293l-.013.074c-.111.622.304 1.207.904 1.289 2.663.366 6.643.41 9.344.305.76-.029 1.297.756 1.02 1.492-2.166 5.765-5.07 13.753-4.903 16.915.076 1.428.706 2.208 1.815 2.145 2.122-.121 5.385-4.387 7.859-9.137.045-.085.078-.177.098-.272.834-3.72 2.07-7.867 3.32-12.058l.078-.26a1.06 1.06 0 01.947-.77l3.557-.202c.734-.042 1.283.696 1.06 1.425l-.546 1.792c-3.13 10.26-5.758 18.875-2.218 18.673 2.314-.132 5.592-4.058 8.413-9.646.045-.092.078-.19.098-.292.142-.73.314-1.494.524-2.293 1.645-6.568 3.51-13.074 5.376-19.588.577-2.01 1.153-4.022 1.723-6.036.127-.445.507-.758.952-.785l3.651-.208c.742-.042 1.291.704 1.058 1.439a1647.233 1647.233 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.145 7.174 8.239.015.268.031.558.038.853.015.564.438 1.02.978 1.067 1.934.172 3.911-.403 5.438-1.765.157-.14.263-.33.316-.535 1.514-5.878 3.185-11.713 4.857-17.555.573-2 1.146-4.001 1.713-6.005.126-.446.506-.76.952-.786l3.65-.208c.742-.042 1.292.704 1.059 1.439a1619.481 1619.481 0 00-4.431 14.136c-.304.988.755 1.81 1.59 1.24 1.441-.985 3.107-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.268.03.559.038.854.012.563.438 1.02.977 1.067 1.934.17 3.911-.404 5.438-1.766.157-.14.263-.33.317-.535 1.514-5.878 3.184-11.713 4.857-17.555.573-2 1.145-4.001 1.712-6.005.127-.446.507-.76.952-.786l3.651-.208c.742-.042 1.291.704 1.058 1.439a1654.28 1654.28 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.271.03.558.037.854.016.56.436 1.02.975 1.067 1.871.166 3.785-.367 5.289-1.634.167-.14.283-.337.339-.553 1.724-6.645 4.256-15.35 6.697-23.682a1.06 1.06 0 01.949-.772l3.618-.208c.734-.042 1.283.69 1.063 1.42-3.36 11.156-6.099 20.915-7.61 26.672-2.008 7.81-2.086 10.063.197 9.931 1.917-.11 4.499-2.83 6.934-6.94a1.12 1.12 0 00.155-.532c.319-8.229 5.364-15.715 12.863-16.144 5.023-.287 7.775 3.507 7.972 7.24.375 7.128-6.67 11.683-13.498 11.262-.795-.05-1.373.803-1.023 1.546.954 2.04 2.962 3.178 6.39 2.98 3.261-.184 6.681-2.998 8.835-5.509zm-112.867 2c-1.62 6.495.347 9.037 2.891 8.892 4.177-.24 8.218-7.894 7.907-13.801-.137-2.58-1.646-3.923-3.408-3.823-2.934.169-6.094 3.549-7.39 8.732zm28.053-1.607c-1.62 6.494.347 9.037 2.892 8.892h-.003c4.177-.24 8.22-7.894 7.909-13.801-.134-2.58-1.646-3.923-3.408-3.823-2.934.168-6.093 3.549-7.39 8.732zm28.054-1.608c-1.62 6.495.347 9.038 2.891 8.893h-.002c4.174-.24 8.22-7.894 7.909-13.801-.135-2.58-1.646-3.924-3.408-3.823-2.934.168-6.094 3.549-7.39 8.731zm50.722-8.49c-.025-1.701-1.071-2.934-2.767-2.837h-.002c-3.332.192-5.94 3.8-6.77 8.176-.132.696.377 1.344 1.058 1.328 4.304-.108 8.618-2.948 8.481-6.666zm-156.232 3.16c-.435-13.187-9.01-21.89-21.68-21.436-5.441.247-11.667 2.31-16.35 6-.44.347-.555.985-.256 1.47l1.987 3.235a1.03 1.03 0 001.555.256c3.564-2.962 8.43-4.904 13.111-5.11 8.684-.36 15.064 5.2 15.436 15.939.466 12.505-7.94 26.81-21.446 27.584-.47.026-.962.037-1.453.037-.689 0-1.197-.672-1.025-1.368a769.967 769.967 0 018.747-32.287c.215-.73-.332-1.457-1.064-1.415l-3.95.227a1.064 1.064 0 00-.951.777c-2.98 10.313-5.962 21.497-8.646 31.992-.154.606-.77.954-1.342.759-1.4-.477-2.678-1.02-3.767-1.655-.521-.305-1.182-.09-1.45.47L.11 54.403c-.25.524-.065 1.167.428 1.449 3.846 2.181 9.684 3.428 15.552 3.093C35.403 57.84 44.864 40.002 44.352 25.39v-.005zM82.304 9.182c-2.349.134-4.433 2.774-4.286 5.557.096 1.834 1.274 3.059 3.102 2.956 2.349-.134 4.49-2.914 4.351-5.562-.096-1.834-1.47-3.049-3.167-2.951z" fill="currentColor"></path></svg>
                {
                    showNext &&
                    <a href="#profile"
                        onClick={
                            () => setShowNext(false)
                        }
                        className="bg-gray-200 rounded-md p-2">
                        <FaAngleLeft />
                    </a>
                }
            </div>
            <div className="relative flex justify-center">
                <div id="profile" className={`flex flex-col absolute justify-center items-center px-4 ${!showNext ? 'opacity-100 z-10 delay-300' : 'opacity-0'} transition duration-500 ease-in-out`}
                >
                    <div className="flex flex-col space-y-10 items-start">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-gray-800">Welcome! Let's create your profile</h2>
                            <p className="text-gray-600">Let others get to know you better! You can do these later</p>
                        </div>
                        <label className="block text-sm font-bold text-gray-700">Add an avatar</label>
                        <div className="flex items-center mb-6 flex-col space-y-4 sm:flex-row">
                            <label htmlFor="avatar" className={(profilePic ? "border-0" : "border-[3px] border-dashed") + " flex justify-center items-center w-[170px] h-[170px] rounded-full overflow-hidden mr-4"}>
                                {profilePic ?
                                    <img className="h-full" src={profilePic} alt="profilePic" />
                                    :
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" class="fill-current icon-24"><path clip-rule="evenodd" d="M0 8v11a2 2 0 002 2h20a2 2 0 002-2V8a2 2 0 00-2-2h-3.172a2 2 0 01-1.414-.586l-1.828-1.828A2 2 0 0014.172 3H9.828a2 2 0 00-1.414.586L6.293 5.707A1 1 0 015.586 6H2a2 2 0 00-2 2zm18 5a6 6 0 11-12 0 6 6 0 0112 0zm-7 3.5V14H8.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11V9.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V12h2.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H13v2.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5z"></path></svg>
                                }
                            </label>
                            <div className="flex-1">
                                <div className="mt-1">
                                    <label htmlFor="avatar" className="bg-white border p-2 rounded-md text-sm">
                                        Choose image
                                        <input
                                            onChange={(e) => {
                                                let file = e.target.files[0]
                                                const reader = new FileReader();

                                                reader.onloadend = () => {
                                                    // Set the uploaded image in state
                                                    setProfilePic(reader.result);
                                                };

                                                if (file) {
                                                    reader.readAsDataURL(file);
                                                }

                                            }}
                                            id="avatar" name="avatar" type="file" className="hidden" />
                                    </label>
                                </div>
                                <div
                                    className="flex mt-3 space-x-2 items-center"
                                    onClick={handleDefaultImg}
                                >
                                    <FontAwesomeIcon className={`text-sm font-light ${isVisible ? 'transform rotate-90' : 'transform rotate-0'
                                        } transition-transform duration-500 ease-in-out`}
                                        icon={faAngleRight} />
                                    <p className="text-sm text-gray-400 cursor-pointer hover:text-gray-600">Or choose one of our defaults</p>
                                </div>
                                <div className="flex mt-2 gap-2">
                                    <img src={profile1}
                                        onClick={() => setProfilePic(profile1)}
                                        className={`w-10 rounded-full ${isVisible ? '' : 'transform translate-x-0 opacity-0'} transition-transform duration-500 ease-in-out`}
                                        alt="profilePic" />
                                    <img src={profile2}
                                        onClick={() => setProfilePic(profile2)}
                                        className={`w-10 rounded-full position absolute ${isVisible ? 'transform translate-x-12' : 'transform translate-x-0 opacity-0'} transition-transform duration-500 ease-in-out`}
                                        alt="profilePic" />
                                    <img src={profile3}
                                        onClick={() => setProfilePic(profile3)}
                                        className={`w-10 rounded-full position absolute ${isVisible ? 'transform translate-x-24' : 'transform translate-x-0 opacity-0'} transition-transform duration-500 ease-in-out`}
                                        alt="profilePic" />
                                    <img src={profile4}
                                        onClick={() => setProfilePic(profile4)}
                                        className={`w-10 rounded-full position absolute ${isVisible ? 'transform translate-x-36' : 'transform translate-x-0 opacity-0'} transition-transform duration-500 ease-in-out`}

                                        alt="profilePic" />
                                    <img src={profile5}
                                        onClick={() => setProfilePic(profile5)}
                                        className={`w-10 rounded-full position absolute ${isVisible ? 'transform translate-x-48' : 'transform translate-x-0 opacity-0'} transition-transform duration-500 ease-in-out`}
                                        alt="profilePic" />
                                    <img src={profile6}
                                        onClick={() => setProfilePic(profile6)}
                                        className={`w-10 rounded-full position absolute ${isVisible ? 'transform translate-x-60' : 'transform translate-x-0 opacity-0'} transition-transform duration-500 ease-in-out`}
                                        alt="profilePic" />
                                </div>

                            </div>
                        </div>

                        <div className="mb-6 w-full">
                            <label htmlFor="location" className="block text-sm font-bold text-gray-700 ">Add your location</label>
                            <div className="mt-1">
                                <input id="location" value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    name="location" type="text" placeholder="Enter a location" autoComplete="location" required className="border-b-2  block w-full py-2 sm:text-sm border-gray-300 focus:outline-none" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <a
                                href='#welcome'
                                onClick={() => {
                                    if (location && profilePic) {
                                        setShowNext(true)
                                    }
                                }}
                                className={`bg-[#EA4B8B] text-white py-2 px-20 rounded-md ${(profilePic && location) ? "opacity-100" : "opacity-50"}`}
                            >
                                Next
                            </a>
                        </div>
                    </div>
                </div>

                <div id='welcome' className={`flex flex-col absolute justify-center items-center px-4 p-4 transition-opacity ${!showNext ? 'opacity-0' : 'opacity-100 z-10 delay-300'}  transition duration-500 ease-in-out`}>
                    <div className="flex flex-col space-y-10 items-center text-center">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold text-gray-800">What brings you to Dribbble</h2>
                            <p className="text-gray-600">Select the option that best describes you. Don't worry, you can explore other options later.</p>
                        </div>
                        <div className="flex gap-5 flex-wrap justify-center">
                            <label htmlFor="designerShare" className="flex justify-center items-center border rounded-2xl p-4 w-[300px]">
                                <div className="flex flex-col space-y-2 ">
                                    <img src={share} alt="" className='' />
                                    <p className="font-bold text-lg">I'm a designer looking to share my work</p>
                                    <div className="flex justify-center">
                                        <input id="designerShare" type="checkbox"  onChange={() => handleCheckboxChange('designerShare')} className={`w-7 h-7 appearance-none ${checkboxes.designerShare ?"bg-[#EA4B8B] ring-2 ring-[#EA4B8B]":"bg-gray-100"} border-gray-300 border-2 rounded-full`} />
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="anotherDesignerShare" className="flex justify-center items-center border rounded-2xl p-4 space-x-5 w-[300px]">
                                <div className="flex flex-col space-y-2">
                                    <img src={designer} alt="" />
                                    <p className="font-bold text-lg">I'm another designer looking to share my work</p>
                                    <div className="flex justify-center">
                                        <input id="anotherDesignerShare" type="checkbox" onChange={() => handleCheckboxChange('anotherDesignerShare')} className={`w-7 h-7 appearance-none ${checkboxes.anotherDesignerShare ?"bg-[#EA4B8B] ring-2 ring-[#EA4B8B]":"bg-gray-100"} border-gray-300 border-2 rounded-full`} />
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="inspirationShare" className="flex justify-center items-center border rounded-2xl p-4 space-x-5 w-[300px]">
                                <div className="flex flex-col space-y-2">
                                    <img src={inspiration} alt="" />
                                    <p className="font-bold text-lg">I'm seeking inspiration</p>
                                    <div className="flex justify-center">
                                        <input id="inspirationShare" type="checkbox" onChange={() => handleCheckboxChange('inspirationShare')} className= {`w-7 h-7 appearance-none ${checkboxes.inspirationShare ?"bg-[#EA4B8B] ring-2 ring-[#EA4B8B]":"bg-gray-100"} border-gray-300 border-2 rounded-full`} />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-5">
                            <p className="text-md font-semibold text-gray-800">Anything else? You can select multiple options.</p>
                            <button type="submit" onClick={handleSubmit} className={`bg-[#EA4B8B] w-60 text-center text-white py-2 rounded-md ${(checkboxes.designerShare || checkboxes.anotherDesignerShare || checkboxes.inspirationShare) ? "opacity-100" : "opacity-50"}`} >
                                Finish
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


export default SignupStep