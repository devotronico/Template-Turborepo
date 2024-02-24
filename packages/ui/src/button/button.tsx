"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button className="tw_danger" onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  );
};
