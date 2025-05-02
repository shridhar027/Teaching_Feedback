import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherListPage() {
  const { state } = useLocation();
  const [teacherslist, setTeacherslist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        setTeacherslist(res.data);
      })
      .catch((err) => console.log(err));
  });

  const teachers = teacherslist.filter((items) =>  (
      items.department == state.branch && items.semester == state.semester
    ));

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen">
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

      <div className="mx-auto max-w-7xl py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Teachers for {state.branch} - Semester {state.semester}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() =>
                navigate(`/feedback/${teacher.id}`, { state: { teacher } })
              }
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg w-[20vw] shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden "
            >
              <img
                className="w-full h-[40vh] object-cover"
                src={teacher.image}
                alt={teacher.name}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {teacher.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {teacher.subject}
                </p>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                  Give Feedback

                </div>
              </div>
            </div>
          ))}
        </div>
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
    </div>
  );
}

export default TeacherListPage;
