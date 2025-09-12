import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the URL of a file in the CDN
 * @param key - The key of the file in the CDN
 * @param ext - The file extension
 * @returns The URL of the file
 */
export function getFileUrl(key: string, ext?: string) {
  return `https://cdn.graphland.dev/${key}${ext ? `.${ext}` : ""}`;
}
