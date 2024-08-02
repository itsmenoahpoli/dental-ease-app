/**
 * Creates a debounced version of the provided function.
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to wait before calling `func`.
 * @param immediate - Whether to trigger the function on the leading edge of the wait period.
 * @returns A debounced version of the provided function.
 */
function useDebounce<T extends (...args: any[]) => void>(func: T, wait: number, immediate: boolean = false): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    const later = () => {
      timeout = null;

      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && timeout === null;

    if (timeout) clearTimeout(timeout);
    if (callNow) func.apply(context, args);

    timeout = setTimeout(later, wait);
  };
}

export { useDebounce };
