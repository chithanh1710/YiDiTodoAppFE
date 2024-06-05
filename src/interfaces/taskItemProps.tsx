import { ReactNode } from "react";

export interface taskItemProps {
  id: number;
  icon: ReactNode;
  text: string;
  count: number;
}
