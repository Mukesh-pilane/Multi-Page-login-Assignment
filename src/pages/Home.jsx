import React from 'react'
import { IoSearch } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { RiMailCheckFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
        


const Home = () => {

    
    return (
        <>
            <nav className="bg-white w-full z-10 top-0 shadow text-sm">
                <div className="max-w-[1200px] w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-4 px-5 ">
                    <div className="pl-4 flex items-center">
                        <svg width="76" height="18" viewBox="0 0 210 59" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" className="dribbble-logo fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M206.622 31.928a1.032 1.032 0 011.631.058h-.003l1.534 2.097c.291.403.289.96-.015 1.352-2.663 3.454-7.329 6.78-12.959 7.1-4.444.254-8.109-1.43-10.104-4.613a1.025 1.025 0 00-1.709-.07c-2.367 3.177-5.231 5.661-8.215 5.833-5.315.303-6.816-3.262-5.502-11.122.132-.783-.554-1.444-1.293-1.249a10.101 10.101 0 01-3.459.319 1.056 1.056 0 00-1.106.748c-1.967 6.46-6.648 12.47-12.707 12.819-3.868.221-9.646-1.995-9.068-11.254.048-.753-.628-1.346-1.324-1.135a10.249 10.249 0 01-3.849.43 1.053 1.053 0 00-1.103.748c-1.967 6.46-6.648 12.47-12.707 12.818-3.868.221-9.646-1.995-9.068-11.253.048-.754-.628-1.347-1.324-1.136-1.213.369-2.519.545-3.849.43a1.054 1.054 0 00-1.103.748c-1.968 6.46-6.648 12.47-12.707 12.818-2.752.158-6.473-.92-8.182-4.888a1.034 1.034 0 00-1.805-.216c-2.393 3.265-5.307 5.842-8.35 6.016-3.119.179-4.825-1.072-5.567-3.304a1.033 1.033 0 00-1.78-.35c-2.129 2.502-4.554 4.336-7.007 4.476-3.783.219-5.96-2.585-6.14-5.981-.207-3.963 1.507-8.603 3.42-13.667.266-.704-.215-1.465-.941-1.497a25.86 25.86 0 01-3.55-.384c-.534-.103-1.053.229-1.205.772-2.263 8.08-5.729 16.001-8.653 20.683-.327.524-1.003.664-1.494.303l-2.233-1.644a1.123 1.123 0 01-.276-1.486c4.226-6.769 7.978-17.366 9.271-25.205.081-.5.489-.872.978-.901l2.97-.171c.68-.04 1.217.595 1.093 1.293l-.013.074c-.111.622.304 1.207.904 1.289 2.663.366 6.643.41 9.344.305.76-.029 1.297.756 1.02 1.492-2.166 5.765-5.07 13.753-4.903 16.915.076 1.428.706 2.208 1.815 2.145 2.122-.121 5.385-4.387 7.859-9.137.045-.085.078-.177.098-.272.834-3.72 2.07-7.867 3.32-12.058l.078-.26a1.06 1.06 0 01.947-.77l3.557-.202c.734-.042 1.283.696 1.06 1.425l-.546 1.792c-3.13 10.26-5.758 18.875-2.218 18.673 2.314-.132 5.592-4.058 8.413-9.646.045-.092.078-.19.098-.292.142-.73.314-1.494.524-2.293 1.645-6.568 3.51-13.074 5.376-19.588.577-2.01 1.153-4.022 1.723-6.036.127-.445.507-.758.952-.785l3.651-.208c.742-.042 1.291.704 1.058 1.439a1647.233 1647.233 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.145 7.174 8.239.015.268.031.558.038.853.015.564.438 1.02.978 1.067 1.934.172 3.911-.403 5.438-1.765.157-.14.263-.33.316-.535 1.514-5.878 3.185-11.713 4.857-17.555.573-2 1.146-4.001 1.713-6.005.126-.446.506-.76.952-.786l3.65-.208c.742-.042 1.292.704 1.059 1.439a1619.481 1619.481 0 00-4.431 14.136c-.304.988.755 1.81 1.59 1.24 1.441-.985 3.107-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.268.03.559.038.854.012.563.438 1.02.977 1.067 1.934.17 3.911-.404 5.438-1.766.157-.14.263-.33.317-.535 1.514-5.878 3.184-11.713 4.857-17.555.573-2 1.145-4.001 1.712-6.005.127-.446.507-.76.952-.786l3.651-.208c.742-.042 1.291.704 1.058 1.439a1654.28 1654.28 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.271.03.558.037.854.016.56.436 1.02.975 1.067 1.871.166 3.785-.367 5.289-1.634.167-.14.283-.337.339-.553 1.724-6.645 4.256-15.35 6.697-23.682a1.06 1.06 0 01.949-.772l3.618-.208c.734-.042 1.283.69 1.063 1.42-3.36 11.156-6.099 20.915-7.61 26.672-2.008 7.81-2.086 10.063.197 9.931 1.917-.11 4.499-2.83 6.934-6.94a1.12 1.12 0 00.155-.532c.319-8.229 5.364-15.715 12.863-16.144 5.023-.287 7.775 3.507 7.972 7.24.375 7.128-6.67 11.683-13.498 11.262-.795-.05-1.373.803-1.023 1.546.954 2.04 2.962 3.178 6.39 2.98 3.261-.184 6.681-2.998 8.835-5.509zm-112.867 2c-1.62 6.495.347 9.037 2.891 8.892 4.177-.24 8.218-7.894 7.907-13.801-.137-2.58-1.646-3.923-3.408-3.823-2.934.169-6.094 3.549-7.39 8.732zm28.053-1.607c-1.62 6.494.347 9.037 2.892 8.892h-.003c4.177-.24 8.22-7.894 7.909-13.801-.134-2.58-1.646-3.923-3.408-3.823-2.934.168-6.093 3.549-7.39 8.732zm28.054-1.608c-1.62 6.495.347 9.038 2.891 8.893h-.002c4.174-.24 8.22-7.894 7.909-13.801-.135-2.58-1.646-3.924-3.408-3.823-2.934.168-6.094 3.549-7.39 8.731zm50.722-8.49c-.025-1.701-1.071-2.934-2.767-2.837h-.002c-3.332.192-5.94 3.8-6.77 8.176-.132.696.377 1.344 1.058 1.328 4.304-.108 8.618-2.948 8.481-6.666zm-156.232 3.16c-.435-13.187-9.01-21.89-21.68-21.436-5.441.247-11.667 2.31-16.35 6-.44.347-.555.985-.256 1.47l1.987 3.235a1.03 1.03 0 001.555.256c3.564-2.962 8.43-4.904 13.111-5.11 8.684-.36 15.064 5.2 15.436 15.939.466 12.505-7.94 26.81-21.446 27.584-.47.026-.962.037-1.453.037-.689 0-1.197-.672-1.025-1.368a769.967 769.967 0 018.747-32.287c.215-.73-.332-1.457-1.064-1.415l-3.95.227a1.064 1.064 0 00-.951.777c-2.98 10.313-5.962 21.497-8.646 31.992-.154.606-.77.954-1.342.759-1.4-.477-2.678-1.02-3.767-1.655-.521-.305-1.182-.09-1.45.47L.11 54.403c-.25.524-.065 1.167.428 1.449 3.846 2.181 9.684 3.428 15.552 3.093C35.403 57.84 44.864 40.002 44.352 25.39v-.005zM82.304 9.182c-2.349.134-4.433 2.774-4.286 5.557.096 1.834 1.274 3.059 3.102 2.956 2.349-.134 4.49-2.914 4.351-5.562-.096-1.834-1.47-3.049-3.167-2.951z" fill="currentColor"></path></svg>
                        <ul className="lg:flex justify-end flex-1 items-center hidden ">
                            <li className="mr-2">
                                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#inspiration">Inspiration</a>
                            </li>
                            <li className="mr-2">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#find-work">Find Work</a>
                            </li>
                            <li className="mr-2">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#learn-design">Learn Design</a>
                            </li>
                            <li className="mr-2">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#go-pro">Go Pro</a>
                            </li>
                            <li className="mr-2">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#hire-designers">Hire Designers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center space-x-4">
                            <li className="mr-3 flex relative">
                                <div className="absolute left-2 top-2 text-gray-500 text-lg">
                                    <IoSearch />
                                </div>
                                <input type="text" className='bg-gray-200 rounded-md p-2 ps-8 w-[8rem] focus:outline-none' placeholder="Search" name="" id="" />
                            </li>
                            <li className="mr-3 flex relative">
                                <div className="text-gray-500 text-2xl">
                                    <BsSuitcaseLgFill />
                                </div>
                                <div className="absolute left-3 top-3 z-10 text-gray-600">
                                    < IoIosCloseCircle />
                                </div>
                            </li>
                            <li className="mr-3 flex">
                                <div className="bg-gray-500 w-9 h-9 rounded-full">
                                </div>
                            </li>
                            <li>
                                <button type="submit" className="bg-[#EA4B8B] text-center text-white py-2 px-3  rounded-md hover:bg-indigo-700">
                                    Upload
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col justify-center items-center px-7 py-10">
                <div className="flex flex-col space-y-10 items-center text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-800">Please verify yout Email</h2>
                        <div className="flex justify-center text-gray-400 text-8xl">
                            <RiMailCheckFill />
                        </div>
                        <p className="text-gray-600">Please verify your email address.We've sent a confirmation email to:</p>
                        <p className="font-bold">abc@gmail.com</p>
                        <p className='text-gray-600'>Click the confirmation link in that email to begin using Dribble</p>
                        <p className='text-gray-600'>
                            Didn't recieve the email?Check your Spam folder, it may have been caught by a filter.If <br />
                            you still don't seen it, you can <span className='text-[#EA4B8B] font-bold'>resend the confirmation email</span>
                        </p>
                        <p className='text-gray-600'>Wrong Email address? <span className='text-[#EA4B8B] font-bold'>Change it</span>.</p>
                    </div>
                </div>
            </div>
            <footer className='flex bg-gray-100 px-5'>
                <div className='flex-col justify-center items-center w-full mx-auto p-3 max-w-[1200px]'>
                    <div className="flex sm:flex-row flex-col mx-auto gap-2 pb-5">
                        <div className="flex flex-col sm:max-w-[225px] gap-4">
                            <svg width="76" height="18" viewBox="0 0 210 59" fill="#fff" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" className="dribbble-logo fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M206.622 31.928a1.032 1.032 0 011.631.058h-.003l1.534 2.097c.291.403.289.96-.015 1.352-2.663 3.454-7.329 6.78-12.959 7.1-4.444.254-8.109-1.43-10.104-4.613a1.025 1.025 0 00-1.709-.07c-2.367 3.177-5.231 5.661-8.215 5.833-5.315.303-6.816-3.262-5.502-11.122.132-.783-.554-1.444-1.293-1.249a10.101 10.101 0 01-3.459.319 1.056 1.056 0 00-1.106.748c-1.967 6.46-6.648 12.47-12.707 12.819-3.868.221-9.646-1.995-9.068-11.254.048-.753-.628-1.346-1.324-1.135a10.249 10.249 0 01-3.849.43 1.053 1.053 0 00-1.103.748c-1.967 6.46-6.648 12.47-12.707 12.818-3.868.221-9.646-1.995-9.068-11.253.048-.754-.628-1.347-1.324-1.136-1.213.369-2.519.545-3.849.43a1.054 1.054 0 00-1.103.748c-1.968 6.46-6.648 12.47-12.707 12.818-2.752.158-6.473-.92-8.182-4.888a1.034 1.034 0 00-1.805-.216c-2.393 3.265-5.307 5.842-8.35 6.016-3.119.179-4.825-1.072-5.567-3.304a1.033 1.033 0 00-1.78-.35c-2.129 2.502-4.554 4.336-7.007 4.476-3.783.219-5.96-2.585-6.14-5.981-.207-3.963 1.507-8.603 3.42-13.667.266-.704-.215-1.465-.941-1.497a25.86 25.86 0 01-3.55-.384c-.534-.103-1.053.229-1.205.772-2.263 8.08-5.729 16.001-8.653 20.683-.327.524-1.003.664-1.494.303l-2.233-1.644a1.123 1.123 0 01-.276-1.486c4.226-6.769 7.978-17.366 9.271-25.205.081-.5.489-.872.978-.901l2.97-.171c.68-.04 1.217.595 1.093 1.293l-.013.074c-.111.622.304 1.207.904 1.289 2.663.366 6.643.41 9.344.305.76-.029 1.297.756 1.02 1.492-2.166 5.765-5.07 13.753-4.903 16.915.076 1.428.706 2.208 1.815 2.145 2.122-.121 5.385-4.387 7.859-9.137.045-.085.078-.177.098-.272.834-3.72 2.07-7.867 3.32-12.058l.078-.26a1.06 1.06 0 01.947-.77l3.557-.202c.734-.042 1.283.696 1.06 1.425l-.546 1.792c-3.13 10.26-5.758 18.875-2.218 18.673 2.314-.132 5.592-4.058 8.413-9.646.045-.092.078-.19.098-.292.142-.73.314-1.494.524-2.293 1.645-6.568 3.51-13.074 5.376-19.588.577-2.01 1.153-4.022 1.723-6.036.127-.445.507-.758.952-.785l3.651-.208c.742-.042 1.291.704 1.058 1.439a1647.233 1647.233 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.145 7.174 8.239.015.268.031.558.038.853.015.564.438 1.02.978 1.067 1.934.172 3.911-.403 5.438-1.765.157-.14.263-.33.316-.535 1.514-5.878 3.185-11.713 4.857-17.555.573-2 1.146-4.001 1.713-6.005.126-.446.506-.76.952-.786l3.65-.208c.742-.042 1.292.704 1.059 1.439a1619.481 1619.481 0 00-4.431 14.136c-.304.988.755 1.81 1.59 1.24 1.441-.985 3.107-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.268.03.559.038.854.012.563.438 1.02.977 1.067 1.934.17 3.911-.404 5.438-1.766.157-.14.263-.33.317-.535 1.514-5.878 3.184-11.713 4.857-17.555.573-2 1.145-4.001 1.712-6.005.127-.446.507-.76.952-.786l3.651-.208c.742-.042 1.291.704 1.058 1.439a1654.28 1654.28 0 00-4.43 14.136c-.304.988.754 1.81 1.59 1.24 1.44-.985 3.106-1.638 4.719-1.73 4.109-.235 6.906 3.146 7.175 8.239.015.271.03.558.037.854.016.56.436 1.02.975 1.067 1.871.166 3.785-.367 5.289-1.634.167-.14.283-.337.339-.553 1.724-6.645 4.256-15.35 6.697-23.682a1.06 1.06 0 01.949-.772l3.618-.208c.734-.042 1.283.69 1.063 1.42-3.36 11.156-6.099 20.915-7.61 26.672-2.008 7.81-2.086 10.063.197 9.931 1.917-.11 4.499-2.83 6.934-6.94a1.12 1.12 0 00.155-.532c.319-8.229 5.364-15.715 12.863-16.144 5.023-.287 7.775 3.507 7.972 7.24.375 7.128-6.67 11.683-13.498 11.262-.795-.05-1.373.803-1.023 1.546.954 2.04 2.962 3.178 6.39 2.98 3.261-.184 6.681-2.998 8.835-5.509zm-112.867 2c-1.62 6.495.347 9.037 2.891 8.892 4.177-.24 8.218-7.894 7.907-13.801-.137-2.58-1.646-3.923-3.408-3.823-2.934.169-6.094 3.549-7.39 8.732zm28.053-1.607c-1.62 6.494.347 9.037 2.892 8.892h-.003c4.177-.24 8.22-7.894 7.909-13.801-.134-2.58-1.646-3.923-3.408-3.823-2.934.168-6.093 3.549-7.39 8.732zm28.054-1.608c-1.62 6.495.347 9.038 2.891 8.893h-.002c4.174-.24 8.22-7.894 7.909-13.801-.135-2.58-1.646-3.924-3.408-3.823-2.934.168-6.094 3.549-7.39 8.731zm50.722-8.49c-.025-1.701-1.071-2.934-2.767-2.837h-.002c-3.332.192-5.94 3.8-6.77 8.176-.132.696.377 1.344 1.058 1.328 4.304-.108 8.618-2.948 8.481-6.666zm-156.232 3.16c-.435-13.187-9.01-21.89-21.68-21.436-5.441.247-11.667 2.31-16.35 6-.44.347-.555.985-.256 1.47l1.987 3.235a1.03 1.03 0 001.555.256c3.564-2.962 8.43-4.904 13.111-5.11 8.684-.36 15.064 5.2 15.436 15.939.466 12.505-7.94 26.81-21.446 27.584-.47.026-.962.037-1.453.037-.689 0-1.197-.672-1.025-1.368a769.967 769.967 0 018.747-32.287c.215-.73-.332-1.457-1.064-1.415l-3.95.227a1.064 1.064 0 00-.951.777c-2.98 10.313-5.962 21.497-8.646 31.992-.154.606-.77.954-1.342.759-1.4-.477-2.678-1.02-3.767-1.655-.521-.305-1.182-.09-1.45.47L.11 54.403c-.25.524-.065 1.167.428 1.449 3.846 2.181 9.684 3.428 15.552 3.093C35.403 57.84 44.864 40.002 44.352 25.39v-.005zM82.304 9.182c-2.349.134-4.433 2.774-4.286 5.557.096 1.834 1.274 3.059 3.102 2.956 2.349-.134 4.49-2.914 4.351-5.562-.096-1.834-1.47-3.049-3.167-2.951z" fill="currentColor"></path></svg>
                            <p>Dirbbble is world's leading community for creatives to share, grow and get hired</p>

                            <ul className="list-reset flex space-x-3 text-gray-500 text-lg">
                                <li>
                                    <FaDribbble />
                                </li>
                                <li>
                                    <FaTwitter />
                                </li>
                                <li>
                                    <FaFacebookSquare />
                                </li>
                                <li>
                                    <FaInstagram />
                                </li>
                                <li>
                                    <FaPinterest />
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

                            <ul className="list-reset flex flex-col gap-2">
                                <li className="">
                                    <p className="inline-block text-black font-bold no-underline">For designers</p>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                            </ul>
                            <ul className="list-reset flex flex-col space-y-2">
                                <li className="">
                                    <p className="inline-block text-black font-bold no-underline">For designers</p>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                            </ul>
                            <ul className="list-reset flex flex-col space-y-2">
                                <li className="">
                                    <p className="inline-block text-black font-bold no-underline">For designers</p>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>

                            </ul>
                            <ul className="list-reset flex flex-col space-y-2">
                                <li className="">
                                    <p className="inline-block text-black font-bold no-underline">For designers</p>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                            </ul>
                            <ul className="list-reset flex flex-col space-y-2">
                                <li className="">
                                    <p className="inline-block text-black font-bold no-underline">For designers</p>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">GO Pro!</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Explore design work</a>
                                </li>
                                <li className="">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline" href="#find-work">Design Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between w-full py-5 border-t-2">
                        <p>© 2023 Dribbble. All rights reserved.</p>
                        <p>
                            <span>202,501,853</span> shots drobbbled
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home