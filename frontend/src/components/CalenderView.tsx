import { addDays, format, startOfToday, startOfWeek } from "date-fns";

export default function CalenderView() {
  const today = startOfToday();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(addDays(weekStart, i));
  }

  const hours: number[] = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }

  return (
    <div className="border rounded shadow">
      <div className="grid grid-cols-1">
        <div className="sticky top-0 z-10 bg-white border-b p-2 font-medium">
          {format(today, "EEEE , MMMM d")}
        </div>
        <div className="grid grid-cols-1">
          {hours.map((hour) => (
            <div key={hour} className="h-16 border-b border-gray-100">
              <div className="w-16 text-xs text-gray-500 p-1">
                {hour % 12 === 0 ? 12 : hour % 12}
                {hour >= 12 ? "PM" : "AM"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="">
  //       <div className="grid grid-cols-8 max-w-6xl ">
  //         {/* Time column */}
  //         <div className="sticky left-0 z-10 bg-white">
  //           <div className="h-12 border-b border-r"></div>
  //           {hours.map((hour) => (
  //             <div
  //               key={hour}
  //               className="h-16 border-b border-r border-gray-100 flex items-start"
  //             >
  //               <div className="w-full text-xs text-gray-500 p-1">
  //                 {hour % 12 === 0 ? 12 : hour % 12} {hour >= 12 ? "PM" : "AM"}
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         {/* Day columns */}
  //         {weekDays.map((day) => (
  //           <div key={day.toString()}>
  //             <div className="sticky top-0 z-10 bg-white border-b h-12 py-1 border-r text-center font-medium">
  //               <div>{format(day, "EEE")}</div>
  //             </div>
  //             {hours.map((hour) => (
  //               <div
  //                 key={`${day}-${hour}`}
  //                 className="h-16 border-b border-r border-gray-100"
  //               ></div>
  //             ))}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
}
