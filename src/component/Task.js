//import image
import ellipsis from '../images/icon-ellipsis.svg';

export default function Task({task,active}){
    return(
        <div className="task-container">
            {
               task.map((val,key)=>{
                    const daily =  Object.values(val.timeframes)[0];
                    const weekly =  Object.values(val.timeframes)[1];
                    const monthly =  Object.values(val.timeframes)[2];
                    const time = active==0 ? daily : active==1 ? weekly : monthly;
                    return(
                        <div key={key} className={`task-bg task-bg-${key}`}>
                             <div className="task">
                                     <p>{val.title}</p>
                                     <div className="content">
                                        <p>{time.current}hrs</p>
                                        <p>{time==daily?"Yesterday":time==weekly?"Last week":"Last month"} -{time.previous}hrs</p>
                                        
                                     </div>
                                    <img src={ellipsis} alt="..."/>
                                    
                             </div>
                        </div>
                    );
                })
            }
        </div>
    );
}