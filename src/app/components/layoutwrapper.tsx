"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Simulate known paths — expand this if needed
    const knownRoutes = ["/", "/Team"];
    if (!knownRoutes.includes(pathname)) {
      setIs404(true);
    } else {
      setIs404(false);
    }
  }, [pathname]);

  const hideFooter = is404;

  return (
   
      
        <div className="w-full">
		<Navbar />
      {children}
      {!hideFooter && <Footer />}
        </div>
  
  );
}
