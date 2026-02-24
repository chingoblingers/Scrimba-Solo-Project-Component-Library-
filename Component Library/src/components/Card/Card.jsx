import AdvancedAnalyticsIcon from '@rsuite/icons/AdvancedAnalytics';

export default function Card({children, title, ...rest}){
    return(
       <div className="card">
        <div className='icon'>
            <AdvancedAnalyticsIcon/>
        </div>
                <h2 className='card-title'> {title} </h2>
                <p> {children} </p>  
    
       </div> 
    )
}