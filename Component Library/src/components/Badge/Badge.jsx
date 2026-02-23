export default function Badge({children, color, className, shape, ...rest}){
const colorMap = {
    red : {color: "#FEE2E2", backgroundColor: "#991B1B"},
    yellow : {color: "#92400E", backgroundColor: "#FEF3C7"},
    green : {color: "#065F46", backgroundColor: "#D1FAE5"},
    blue : {color: "#1E40AF", backgroundColor: "#DBEAFE"},
    indigo : {color: "#3730A3", backgroundColor: "#E0E7FF"},
    purple : {color: "#5B21B6", backgroundColor: "#EDE9FE"},
    pink : {color: "#9D174D", backgroundColor: "#FCE7F3"},
    gray : {color: "#1F2937", backgroundColor: "#F3F4F6"}  }

const loweredColor = color?.toLowerCase()
const loweredShape = shape?.toLowerCase()
const selectedColor = colorMap[loweredColor] ?? colorMap.gray
const selectedShape = loweredShape === 'pill' ? 'pill' : "square"
const badgeClasses = className ? `badge ${selectedShape} ${className}` : `badge ${selectedShape}`





    return(
        <div className={badgeClasses} style={selectedColor} {...rest}> <span> {children} </span> </div>
  )  
}