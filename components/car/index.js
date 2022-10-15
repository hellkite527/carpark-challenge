export default function Car({ details }) {
  return(
    <>
      <img data-carSize={details.size} src={details.image} id={details.plate} />
    </>
  )
}