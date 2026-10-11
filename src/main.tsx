import { Toaster } from "@/components/ui/sonner";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import AuthPage from "@/pages/Auth.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { MotionConfig } from "framer-motion";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import NotFound from "./pages/NotFound.tsx";
import "./types/global.d.ts";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Events from "./pages/Events.tsx";
import Schedule from "./pages/Schedule.tsx";
import Register from "./pages/Register.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";

const defaultLocalConvex = "http://localhost:8187"; // convex dev default port
const convexUrl = (import.meta as any)?.env?.VITE_CONVEX_URL || defaultLocalConvex;
const convex = new ConvexReactClient(convexUrl as string);

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*
      MotionConfig reducedMotion="never" ensures Framer Motion animations always run
      regardless of the OS-level "Reduce motion" accessibility setting.
      This matches Antigravity browser behaviour in normal Chrome/Firefox.
    */}
    <MotionConfig reducedMotion="never">
      <InstrumentationProvider>
        <ConvexAuthProvider client={convex}>
          <BrowserRouter>
            <RouteSyncer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/register" element={<Register />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </ConvexAuthProvider>
      </InstrumentationProvider>
    </MotionConfig>
  </StrictMode>,
);