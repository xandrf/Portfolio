import Image from "next/image"
import Style from "./Styles/ProjectCard.module.css"
interface ProjectCardProps{
    image : string,
    title : string
    children : any
}
export default function ProjectCard(props:ProjectCardProps) {
    return (
        <div className={Style.ProjectCard}>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
            <div  className={Style.image}>
                <Image src={props.image} width={100} height={100}></Image>
            </div>
        </div>
    )
}