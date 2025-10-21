import type { LucideProps } from "lucide-react";
import type React from "react";

type LucideIconComponent = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export type Transaction = {
  id: string;
  desc: string;
  amount: number;
  type: string;
  category: string;
  date: string;
  time: string;
  icon: LucideIconComponent;
};
