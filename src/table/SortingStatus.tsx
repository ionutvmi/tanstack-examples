import { SortDirection } from "@tanstack/react-table";

interface SortingStatusProps {
  direction: false | SortDirection;
}

function SortingStatus({ direction }: SortingStatusProps) {
  if (!direction) {
    return null;
  }

  if (direction == "asc") {
    return <span> 🔼 </span>;
  }

  return <span> 🔽 </span>;
}

export default SortingStatus;
