import { faDev, faGithub, faReddit, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import BlackLine from "./BlackLine"
import SocialMedia from "./SocialMedia"
import Style from "./Styles/SocialsCard.module.css"
export default function SocialsCard() {
    return(
        <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial:{
                y:100
            },
            animate:{
                y:0,
                transition:{
                    duration:0.5,
                    ease:"linear"
                }
            }
        }}
        className={Style.SocialsCard}>
            <SocialMedia delay={1.2} icon={faTwitter} link="https://www.twitter.com/XandrfDev" color="#1DA1F2" ></SocialMedia>
            <SocialMedia delay={0.9} icon={faGithub} link="https://www.twitter.com/XandrfDev" color="white"></SocialMedia>
            <SocialMedia delay={0.6} icon={faReddit} link="https://www.twitter.com/XandrfDev" color="#FF5700"></SocialMedia>
            <SocialMedia delay={0.3} icon={faTwitch} link="https://www.twitter.com/XandrfDev" color="#6441a5"></SocialMedia>
            <SocialMedia delay={0} icon={faDev} link="https://www.twitter.com/XandrfDev" color="white"></SocialMedia>
            <BlackLine/>
        </motion.div>
        )
}