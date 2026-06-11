import type { ReactNode } from "react";

import type { AppPath } from "@/router/paths";

export interface MenuItem {
  color: string;
  icon: ReactNode;
  label: string;
  path: (typeof AppPath)[keyof typeof AppPath];
}
