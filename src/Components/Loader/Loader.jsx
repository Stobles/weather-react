/* eslint-disable react/prop-types */
import { ClipLoader } from "react-spinners"

const Loader = (props) => {
  return (
    <ClipLoader {...props} color={props.color} cssOverride={props.cssOverride} size={props.size} aria-label="Loading Spinner"/>
  )
}
export default Loader