import React from "react";
import clsx from "clsx";

const StatusBadge = ({ status }) => {
  const StatusIcon = {
    scheduled: "/path/to/scheduled-icon.png",
    pending: "/path/to/pending-icon.png",
    cancelled: "/path/to/cancelled-icon.png",
  };

  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600 ": status === "cancelled",
      })}
    >
      <img
        src={StatusIcon[status]}
        alt={status}
        className="h-fit w-3"
        style={{ height: 24, width: 24 }}
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500 ": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;