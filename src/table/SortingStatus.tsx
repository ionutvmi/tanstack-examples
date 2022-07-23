import { SortDirection } from "@tanstack/react-table";
import "./SortingStatus.css";

interface SortingStatusProps {
  direction: false | SortDirection;
}

function SortingStatus({ direction }: SortingStatusProps) {
  if (!direction) {
    return (
      <span className="SortingStatus__unsorted">
        <span>🔼</span>
        <span>🔽</span>
      </span>
    );
  }

  if (direction == "asc") {
    return <span> 🔼 </span>;
  }

  return <span> 🔽 </span>;
}

export default SortingStatus;
