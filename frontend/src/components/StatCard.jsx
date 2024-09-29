import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const StatCard = ({ count = 0, label, icon, type }) => {
  return (
    <Card
      className={cn("stat-card", {
        "bg-green-100": type === "appointments",
        "bg-yellow-100": type === "pending",
        "bg-red-100": type === "cancelled",
      })}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", {
              "bg-green-200": type === "appointments",
              "bg-yellow-200": type === "pending",
              "bg-red-200": type === "cancelled",
            })}>
              {React.cloneElement(icon, { className: "w-6 h-6" })}
            </div>
            <div>
              <h2 className={cn("text-4xl font-bold", {
                "text-green-700": type === "appointments",
                "text-yellow-700": type === "pending",
                "text-red-700": type === "cancelled",
              })}>{count}</h2>
              <p className={cn("text-sm font-medium mt-1", {
                "text-green-600": type === "appointments",
                "text-yellow-600": type === "pending",
                "text-red-600": type === "cancelled",
              })}>{label}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;