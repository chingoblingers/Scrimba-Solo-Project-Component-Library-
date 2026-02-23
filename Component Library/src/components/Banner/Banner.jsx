import InfoRoundIcon from '@rsuite/icons/InfoRound';
import WarningRoundIcon from '@rsuite/icons/WarningRound';
import WarningRoundIcon from '@rsuite/icons/CheckOutline';
import RemindOutlineIcon from '@rsuite/icons/RemindOutline';



export default function Banner({children, title, status, ...rest}){

    const loweredStatus = status?.toLowerCase()
    const statusColor = {
    success : {color : "#047857", backGroundColor: "#ECFDF5"},
    warning : {color : "#B45309", backGroundColor: "#FFFBEB"},
    error : {color : "#B45309", backGroundColor: "#FEF2F2"},
    neutral : {color : "#1C51B9", backGroundColor: "#EFF6FF"}
}
const statusIcon = {
    success : <InfoRoundIcon/>,
    warning : <WarningRoundIcon/>,
    error : <WarningRoundIcon/>,
    neutral : <RemindOutlineIcon/>
}

const selectedStatus = statusColor[loweredStatus] ?? statusColor.neutral

    return(
        <div className="banner" style={selectedStatus} >
          <div className="banner-header">     
           <span> <InfoRoundIcon/> </span> <h2 id="banner-title">{title}</h2>
         </div>
        { children ? <p> {children} </p> : null }  
        </div>
    )
}