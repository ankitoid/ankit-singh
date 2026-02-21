import { useRef, useState, useEffect } from "react";

// ── Scroll-triggered visibility ───────────────────────────────────────────────
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── Typewriter cycling effect ─────────────────────────────────────────────────
export function useTyping(words, speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = words[wIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(cur.slice(0, text.length + 1));
        if (text.length + 1 === cur.length)
          setTimeout(() => setDeleting(true), pause);
      } else {
        setText(cur.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWIdx((wIdx + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wIdx]);

  return text;
}