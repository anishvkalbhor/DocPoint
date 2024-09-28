import React from "react";
import { Button } from "./ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SubmitButton = ({ isLoading, className, children }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <AiOutlineLoading3Quarters className="animate-spin" size={24} />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;