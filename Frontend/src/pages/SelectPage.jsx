import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectPage() {
  const [teachers, setTeachers] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => console.log(err));
  });

  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/teachers", { state: { branch, semester } });
  };

  return (
    <div className="relative isolate  px-6  lg:px-8 min-h-screen">
      {/* Background gradient elements */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Select Faculty Details
          </h2>

          <div className="mb-5">
            <label
              htmlFor="branch"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Branch
            </label>
            <select
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Choose a branch</option>
              <option value="CSE">CSE</option>
              <option value="ISE">ISE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="CS-DS">CS-DS</option>
              <option value="CE">CE</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="semester"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Semester
            </label>
            <select
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Choose a semester</option>
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

          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            View Teachers
          </button>
        </form>
      </div>

      {/* Bottom gradient element */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="absolute top-[92vh]">
        <p className="text-4xl">ALL TEACHERS LISTS :</p>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-5 p-5 justify-center ">
        {teachers.map((teacher, index) => {
          return (
            <div
              onClick={() =>
                navigate(`/feedback/${teacher.id}`,  { state: { teacher} })
              }
              key={index}
              className="bg-blue-100 w-full max-w-xs flex flex-col items-center gap-2 rounded-lg p-6 shadow-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
            >
              <div className="bg-blue-200 h-48 w-48 rounded-full overflow-hidden border-4 border-indigo-300">
                <img
                  className="object-cover w-full h-full"
                  src={teacher.image}
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-900 mt-4">
                Name: {teacher.name}
              </h1>
              <h1 className="text-lg text-gray-600">
                Subject: {teacher.subject}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectPage;
