export const headerSizing = [1, 1.25, 1.5, 2.5]
export const headerSizingXs = headerSizing.map(
  (x) => `${Math.max(x / 2, 0.8)}em`
)
export const headerSizingSm = headerSizing.map((x) => `${x}em`)
export const headerSizingLg = headerSizing.map((x) => `${x * 2}em`)
