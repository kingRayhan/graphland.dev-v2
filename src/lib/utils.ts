import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFileUrl(key: string, ext?: string) {
  return `https://cdn.graphland.dev/${key}${ext ? `.${ext}` : ""}`;
}
