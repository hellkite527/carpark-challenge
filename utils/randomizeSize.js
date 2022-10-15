export default function generateSize() {
  const sizes = [0, 1, 2];
  return sizes[Math.floor(Math.random() * sizes.length)];
}