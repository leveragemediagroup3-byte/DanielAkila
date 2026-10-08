// Finds every photo inside src/assets/slf/<year>/ automatically.
const modules = import.meta.glob('../assets/slf/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export function getGallery(year: string): string[] {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/slf/${year}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url)
}