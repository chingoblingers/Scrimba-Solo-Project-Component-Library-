export default function Banner({children, title, status, ...rest}){
const statusColor = {
    success : {color : "#047857", backGroundColor: "#ECFDF5"},
    warning : {color : "#B45309", backGroundColor: "#FFFBEB"},
    error : {color : "#B45309", backGroundColor: "#FEF2F2"},
    neutral : {color : "#1C51B9", backGroundColor: "#EFF6FF"}
} 
const loweredStatus = status?.toLowerCase()
const selectedStatus = statusColor[loweredStatus] ?? statusColor.neutral

    return(
        <div className="banner" style={selectedStatus} > 
         <h2 id="banner-title">{title}</h2>
        { children ? <p> {children} </p> : null }  
        </div>
    )
}