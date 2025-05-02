import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Rating() {
  const { state } = useLocation();
  const teacher = state?.teacher;
  const rate = state?.ratings;
  const [count, setCount] = useState(
    rate.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
      5
  );
  const [star, setStar] = useState(Math.round(count));
  console.log(rate, teacher, count, star);
  useEffect(() => {
    axios
      .get("http://localhost:8081/question")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="m-[12vh] flex gap-15 pt-[5vh]">
      <div className="bg-blue-100 w-full max-w-xs flex flex-col items-center gap-2 rounded-lg p-6 shadow-lg">
        <div className="bg-blue-200 h-48 w-48 rounded-full overflow-hidden border-4 border-indigo-300">
          <img
            className="object-cover w-full h-full"
            src={teacher.image}
            alt="Profile"
          />
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mt-4">
          Name:{teacher.name}
        </h1>
        <h1 className="text-lg text-gray-600">Subject:{teacher.subject}</h1>
      </div>
      <div>
        <div className="h-auto px-[5vw] py-[2vh] bg-blue-100 flex flex-col rounded-[.5cqw] gap-2">
          <p>Your average feedback score to {teacher.name}</p>
          <div className="flex items-center">
            {rate.map((item, index) =>(
                <svg
                key={index}
                  className={star - index > 0 ?"w-4 h-4 text-yellow-300 me-1":"w-4 h-4 text-gray-300 me-1 dark:text-gray-500"}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ) 
            )}

            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {count}
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
