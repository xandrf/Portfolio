import { Timeline } from "primereact/timeline"
import { useContext } from "react"
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import Style from "./Styles/ExperienceBar.module.css"
import VerticalBar from "./VerticalBar"
interface ExperienceBarProps{
    experiencecheckpoints : [string,string,string,string,string],
    progresspercent : number
}
export default function ExperienceBar(props:ExperienceBarProps) {
    const [themeContext] =useContext(ThemeContext);
    return(<div className={Style.ExperienceBar}>
        <ol className={Style.ExperienceBarCheckPoints}> 
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[0]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[1]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[2]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[3]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[4]}</div><VerticalBar/></li>
        </ol>
            <div className={Style.Bar}>
                <div className={`${Style.ProgressBar} ${Style[`ProgressBar-${Theme[themeContext]}`]}`} style={{width:(props.progresspercent-5)+"%"}}>

                </div>
                <div className={`${Style.ProgressBarEnd} ${Style[`ProgressBar-${Theme[themeContext]}`]}`}></div>
            </div>
        </div>)
}