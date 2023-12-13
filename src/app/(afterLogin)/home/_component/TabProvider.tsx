"use client";

import React, { createContext } from "react";

export const TabContext = createContext({
  tab: "rac",
  setTab: (value: "rec" | "fol") => {},
});

type Props = { children: React.ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = React.useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
