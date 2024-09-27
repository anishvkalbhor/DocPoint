import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const StatCard = ({ count = 0, label, icon, type }) => {
  return (
    <Card
      className={cn("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8">
            {React.cloneElement(icon, { className: "w-full h-full" })}
          </div>
          <h2 className="text-3xl font-bold text-white">{count}</h2>
        </div>
        <p className="text-sm">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;