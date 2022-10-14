const isProd = import.meta.env.PROD;

// https://plausible.io/docs/custom-event-goals
export const logEvent = (eventName: string, ...rest: any[]) => {
  // @ts-ignore: Unreachable code error
  if (isProd) return window.plausible?.(eventName, ...rest);
};
