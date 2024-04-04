import { GridLoader } from 'react-spinners'
function Loader() {
  return (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <GridLoader
        color={'#D87D4A'}
        speedMultiplier={2}
        size={30}
      />
    </div>
  )
}

export default Loader