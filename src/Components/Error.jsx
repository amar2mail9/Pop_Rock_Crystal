import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="bg-slate-50 h-screen flex flex-col items-center justify-center">
      <h1 className="text-[220px] text-red-500">404</h1>
      <span className="text-[20px] text-slate-500">Page Not Found</span>
      <Link to={"/"} className="border px-4 py-1 rounded-md ">
        <button>
          <i className="ri-arrow-left-line"></i> Back to Home Page
        </button>
      </Link>
    </div>
  );
}

export default Error;
