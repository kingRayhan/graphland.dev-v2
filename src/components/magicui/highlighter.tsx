"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";
import type React from "react";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
  lockWidth?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
  lockWidth = true,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null);
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView;

  useEffect(() => {
    if (!shouldShow) return;

    const element = elementRef.current;
    if (!element) return;

    // Lock width to avoid any inline↔inline-block reflow during annotation
    if (lockWidth) {
      const rect = element.getBoundingClientRect();
      element.style.display = "inline-block";
      element.style.width = `${rect.width}px`;
    }

    // Create and store the annotation instance so we can clean it up reliably
    const instance = annotate(element, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    });
    annotationRef.current = instance;

    instance.show();

    return () => {
      // Properly remove the same instance to avoid layout thrash
      annotationRef.current?.remove();
      annotationRef.current = null;
      // Keep width locked by default to prevent snap after animation.
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    lockWidth,
  ]);

  return (
    <span
      ref={elementRef}
      className="relative inline bg-transparent align-baseline"
    >
      {children}
    </span>
  );
}
