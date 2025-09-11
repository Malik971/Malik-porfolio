// src/pages/Navigation/Nav.tsx
import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const DESKTOP_MIN_WIDTH = 768; // correspond à ton md si tu l'as réglé à 1024

export default function Nav() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= DESKTOP_MIN_WIDTH : true
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);

    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(Boolean((e as any).matches));
    };

    // initialise
    setIsDesktop(mq.matches);

    // add listener (compatibilité)
    if ("addEventListener" in mq) {
      mq.addEventListener("change", handler as EventListener);
    } else {
      // ancienne API
      // @ts-ignore
      mq.addListener(handler);
    }

    return () => {
      if ("removeEventListener" in mq) {
        mq.removeEventListener("change", handler as EventListener);
      } else {
        // @ts-ignore
        mq.removeListener(handler);
      }
    };
  }, []);

  return isDesktop ? <DesktopNav /> : <MobileNav />;
}
