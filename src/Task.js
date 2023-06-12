import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date(taskObj.deadline);
  const daysLeft = differenceInDays(date, new Date());
  const toNow = formatDistanceToNow(date, { addSuffix: true, locale: tr });

  console.log(toNow);
  return (
    <div className="p-6 bg-white rounded-[5px] leading-6 mt-4 drop-shadow-md">
      <h3 className="text-lg text-taskH3">{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span
          className={`inline-block py-[3px] px-2 rounded-sm ${
            daysLeft < 3 ? "bg-[#ffd9d4]" : "bg-blue-200"
          }`}
        >
          {toNow}
        </span>
      </div>
      <p className="pt-2 px-0 pb-3 text-sm text-taskP">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-1 px-3 text-sm border border-solid border-gray-300 mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-orange-300 shadow-sm rounded border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
