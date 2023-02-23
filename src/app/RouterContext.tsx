"use client";

import { createContext } from "react";

const RouterContext = createContext<() => void>(() => {});

export default RouterContext;
