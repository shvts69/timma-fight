"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export default function CountUp({
  value,
  suffix = "",
  prefix = "",
}: {
  value: string;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(prefix + "0" + suffix);

  useEffect(() => {
    if (!isInView) return;

    const num = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(eased * num);

      if (current >= steps) {
        setDisplay(prefix + value + suffix);
        clearInterval(timer);
      } else {
        setDisplay(prefix + val + suffix);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, suffix, prefix]);

  return <span ref={ref}>{display}</span>;
}
