/* eslint-disable react/prop-types */
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  try {
    if (timestamp) {
      const date = parseISO(timestamp);
      const timePeriod = formatDistanceToNow(date);
      timeAgo = `${timePeriod} ago`;
    }
  } catch (error) {
    // Handle the error, e.g., by setting a default value for timeAgo
    console.error("Error processing timestamp:", error);
    timeAgo = "N/A"; // Set a default value
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
export default TimeAgo;
