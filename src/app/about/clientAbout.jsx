"use client";

import { useEffect } from "react";

export default function ClientAbout() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(
        "https://pust.ac.bd/academic/departments/dept_teachers/dept_teachers_profile/100041",
        "_blank"
      );
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return <p className="text-white">Redirecting in 3 seconds...</p>;
}
