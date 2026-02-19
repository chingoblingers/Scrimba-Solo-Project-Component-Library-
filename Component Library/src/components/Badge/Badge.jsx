export default function Badge({children, color, backgroundColor, className, style, ...rest}){
const badgeClasses = className ? `badge ${className}` : "badge"
const colorDesign = {color: color.toLowerCase(), backgroundColor: backgroundColor ? backgroundColor.toLowerCase() : null}
const styleDisplay = style ? style : colorDesign 
if (color.toLowerCase() === "red"){
    colorDesign.backgroundColor = "#FEE2E2"
    colorDesign.color = "#FEE2E2"
 }


    return(
        <div className={badgeClasses} style={styleDisplay} {...rest}> <p> {children} </p> </div>
  )  
}