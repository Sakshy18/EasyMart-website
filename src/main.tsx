import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./app/router";
import ReduxProvider from "./app/providers/ReduxProvider";
import { Suspense } from "react";

import './index.css'

import "./styles/tokens.css";
import "./styles/globals.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <Suspense
       fallback={
    <div className="min-h-screen w-full bg-[var(--color-stroke-light)] flex items-center justify-center">
      <p className="text-[var(--color-black-400)]">
        Loading...
      </p>
    </div>
  }>
  <RouterProvider router={router} />
      </Suspense>
    
    </ReduxProvider>
  </React.StrictMode>
);