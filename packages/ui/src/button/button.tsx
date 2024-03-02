"use client";

import type { ReactNode } from "react";
import {Icon} from '@/icon/Icon'

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="tw_danger flex gap-4 items-center" onClick={() => alert(`Hello from your app!`)}>
      <span>{children}</span>
      <span><Icon /></span>
    </button>
  );
};
