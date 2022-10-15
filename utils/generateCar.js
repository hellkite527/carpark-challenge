export default function generateCarDetails (size) {
  switch(size) {
    case 1:
      return { size: 1, image: './m-car.png'}
    case 2:
      return { size: 2, image: './l-car.png'}
    default:
      return { size: 0, image: './s-car.png'}
  }
};