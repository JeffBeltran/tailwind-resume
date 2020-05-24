import { parseISO, format } from "date-fns";

function DateRange({ start, end }) {
  const startDate = format(parseISO(start), "MMM yyyy");
  const endDate = end ? format(parseISO(end), "MMM yyyy") : "Current";
  return `${startDate} - ${endDate}`;
}

export default DateRange;
