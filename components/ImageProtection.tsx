"use client";

import { useEffect } from "react";

function isMedia(target: EventTarget | null) {
  return target instanceof HTMLImageElement || target instanceof HTMLVideoElement;
}

export default function ImageProtection() {
  useEffect(() => {
    function onContextMenu(e: MouseEvent) {
      if (isMedia(e.target)) {
        e.preventDefault();
      }
    }

    function onDragStart(e: DragEvent) {
      if (isMedia(e.target)) {
        e.preventDefault();
      }
    }

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
