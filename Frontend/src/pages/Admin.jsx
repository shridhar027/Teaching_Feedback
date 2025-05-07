import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"

function Admin() {
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [url, setUrl] = useState("https://thumbs.dreamstime.com/b/eyeglasses-bearded-asian-man-relaxed-standing-d-vector-avatar-illustration-cheerful-mature-male-cartoon-character-face-confident-297508057.jpg");

  const { register, handleSubmit, reset } = useForm();
  const [success,setSuccess]=useState(0);

  const handleSubmitform = (data) => {
    axios.post('http://localhost:8081/teacher',data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    reset();
    setSuccess(1);
    setName("");
    setSub("");
    setUrl("https://thumbs.dreamstime.com/b/eyeglasses-bearded-asian-man-relaxed-standing-d-vector-avatar-illustration-cheerful-mature-male-cartoon-character-face-confident-297508057.jpg");
  };

  const classname = `h-auto w-auto p-[4vh] bg-[#11111130] ${success?"":"hidden"} rounded-[1cqw] gap-5 absolute top-[30vh] left-[50vw] -translate-x-1/2 flex flex-col justify-center items-center backdrop-blur-[2px]`;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen">

      {/* pop-up idhu */}
      <div className={classname}>
      <p className="text-3xl text-[white]">TEACHER ADDED SUCCESSFULLY</p>
      <button onClick={()=>setSuccess(0)} className="bg-[#ffffff80] px-[4vw] py-[1vh] rounded-full">ok</button>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div 
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        ></div>
      </div>
      
      <div className="mx-auto max-w-7xl py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl pb-8">Add Faculty to database</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <form
            className="w-full md:w-1/2 flex flex-col gap-6"
            onSubmit={handleSubmit(handleSubmitform)}
          >
            <div className="w-full flex items-center gap-5">
              <span className="text-lg font-medium text-gray-900">Faculty Name:</span>
              <input
                {...register("name")} 
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
                className="bg-white h-12 w-full max-w-md rounded-full px-4 outline-none border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="w-full flex items-center gap-5">
              <span className="text-lg font-medium text-gray-900 pr-[5%]">Faculty ID:</span>
              <input
                {...register("id")} 
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
                className="bg-white h-12 w-full max-w-md rounded-full px-4 outline-none border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="w-full flex items-center gap-5">
              <span className="text-lg mr-3 font-medium text-gray-900">Department:</span>
              <select
                {...register("department")}
                className="bg-white w-full max-w-md outline-none rounded-full px-4 h-12 border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                required
              >
                <option value="CSE">CSE</option>
                <option value="ISE">ISE</option>
                <option value="ECE">ECE</option>
                <option value="AI&ML">AI&ML</option>
                <option value="DSE">AI&DS</option>
                <option value="MEC">ME</option>
                <option value="CIV">CV</option>
              </select>
            </div>
            <div className="w-full flex items-center gap-5">
              <span className="text-lg mr-8 font-medium text-gray-900">Semester:</span>
              <select
                {...register("semester")}
                className="bg-white w-full max-w-md outline-none rounded-full px-4 h-12 border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="w-full flex items-center gap-5">
              <span className="text-lg mr-1 font-medium text-gray-900">Subject Code:</span>
              <input
                {...register("subject")}
                onChange={(e) => {
                  setSub(e.currentTarget.value);
                }}
                className="bg-white h-12 w-full max-w-md rounded-full px-4 outline-none border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                type="text"
                placeholder="Code"
                required
              />
            </div>
            <div className="w-full flex items-center gap-5">
              <span className="text-lg font-medium text-gray-900">Profile Pic URL:</span>
              <input
                {...register("img")}
                onChange={(e) => {
                  setUrl(e.currentTarget.value);
                }}
                className="bg-white h-12 w-full max-w-md rounded-full px-4 outline-none border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                type="text"
                placeholder="URL"
                required
              />
            </div>
            <div className="w-full flex justify-center mt-6">
              <input 
                className="bg-indigo-600 w-40 rounded-full py-3 px-6 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" 
                type="submit" 
                value="Submit" 
              />
            </div>
          </form>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">PROFILE PREVIEW</h1>
            <div className="bg-white w-full max-w-xs flex flex-col items-center gap-2 rounded-lg p-6 shadow-lg">
              <div className="bg-blue-200 h-48 w-48 rounded-full overflow-hidden border-4 border-indigo-100">
                <img className="object-cover w-full h-full" src={url} alt="Profile" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900 mt-4">Name: {name || "Not specified"}</h1>
              <h1 className="text-lg text-gray-600">Subject: {sub || "Not specified"}</h1>
            </div>
          </div>
        </div>
      </div>

      

      {/* Bottom gradient element from Home page */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div 
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        ></div>
      </div>
    </div>
  );
}

export default Admin;