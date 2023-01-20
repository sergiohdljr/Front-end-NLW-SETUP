import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning.ts";
import { HabitDay } from "./HabitDay";

const WeekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex gap-2">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {WeekDays.map((Weekday, index) => {
          return (
            <div
              key={index}
              className="text-zinc-400 text-xl font-bold h-10 flex items-center justify-center mr-2"
            >
              {Weekday}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return( <HabitDay 
                   key={date.toString()}
                   amount={5}
                   completed={Math.round(Math.random()* 5)} />);
        })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg cursor-not-allowed opacity-40"
              />
            );
          })}
      </div>
    </div>
  );
}
