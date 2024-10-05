import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * This function merges multiple class names into a single string.
 * It uses 'clsx' to merge the class names and then 'twMerge' to merge Tailwind CSS classes.
 * 
 * @param inputs - A variable number of arguments of type ClassValue, which can be strings, arrays, or objects.
 * @returns A string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}