export const getImageUrl = (path: string): string => {
  return new URL(`./assets/pokemon/${path}`, import.meta.url).href
}

export const capitalizeText = (value: string): string => {
  if (!value) return ''
  const lowercaseValue = value.toLowerCase()
  return lowercaseValue.charAt(0).toUpperCase() + lowercaseValue.slice(1)
}
