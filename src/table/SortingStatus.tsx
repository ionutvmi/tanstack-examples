import { SortDirection } from "@tanstack/react-table";
import "./SortingStatus.css";

interface SortingStatusProps {
  direction: false | SortDirection;
}

function SortingStatus({ direction }: SortingStatusProps) {
  if (!direction) {
    return (
      <span title="Listing order" className="SortingStatus__unsorted">
        <span>🔼</span>
        <span>🔽</span>
      </span>
    );
  }

  if (direction == "asc") {
    return <span title="Ascending"> 🔼 </span>;
  }

  return <span title="Descending"> 🔽 </span>;
}

export default SortingStatus;
