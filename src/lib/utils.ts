import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomId() {
  const id = Math.random().toString(36).substring(2, 10); // Base 36, first 8 characters
  return id;
}
