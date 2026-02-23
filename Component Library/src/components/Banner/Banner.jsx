import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import WarningRoundIcon from '@rsuite/icons/CheckOutline';
import RemindOutlineIcon from '@rsuite/icons/RemindOutline';



export default function Banner({children, title, status, ...rest}){

const loweredStatus = status?.toLowerCase()
const statusColor = {
    success : {color : "#047857", backgroundColor: "#ECFDF5"},
    warning : {color : "#B45309", backgroundColor: "#FFFBEB"},
    error : {color : "#B45309", backgroundColor: "#FEF2F2"},
    neutral : {color : "#1C51B9", backgroundColor: "#EFF6FF"}
}
const statusIcon = {
    success : <CheckRoundIcon/>,
    warning : <RemindOutlineIcon/>,
    error : <WarningRoundIcon/>,
    neutral : <InfoOutlineIcon/>
}
const selectedStatus = statusColor[loweredStatus] ?? statusColor.neutral

    return(
        <div className="banner" style={selectedStatus}>
          <div className="banner-header">     
           <span> {statusIcon[loweredStatus]} </span> <h2 id="banner-title">{title}</h2>
         </div>
        { children ? <p> {children} </p> : null }  
        </div>
    )
}