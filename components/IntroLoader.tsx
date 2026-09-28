"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const FULL_TEXT = "Duangphorn Wongjancharoen.";
const TYPE_SPEED_MS = 70;
const HOLD_AFTER_TYPE_MS = 600;
const FADE_DURATION_MS = 700;
const SESSION_KEY = "intro-shown";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("");
  const [fadingOut, setFadingOut] = useState(false);
  const hasChecked = useRef(false);

  // Runs before paint so returning visitors within the same session never
  // see a flash of the intro before it's hidden. sessionStorage can't be
  // read during SSR, so this can't be computed as the initial state and
  // must correct it here instead.
  //
  // The `hasChecked` ref guards against React Strict Mode's dev-only
  // double-invocation of effects on mount: without it, the first pass would
  // set the sessionStorage flag, and the immediately-following second pass
  // would see that flag already set and hide the intro before it ever
  // played — a flash that only happens in dev, not for real users.
  useLayoutEffect(() => {
    if (hasChecked.current) {
      return;
    }
    hasChecked.current = true;

    if (sessionStorage.getItem(SESSION_KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setText(FULL_TEXT.slice(0, i));

      if (i >= FULL_TEXT.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(() => setVisible(false), FADE_DURATION_MS);
        }, HOLD_AFTER_TYPE_MS);
      }
    }, TYPE_SPEED_MS);

    return () => clearInterval(typeInterval);
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity ease-in-out ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: "rgb(129, 216, 208)",
        transitionDuration: `${FADE_DURATION_MS}ms`,
      }}
    >
      <p className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
        {text}
        <span className="intro-cursor">|</span>
      </p>
    </div>
  );
}
