import { SlideMenu } from 'primereact/slidemenu';
import { Button } from 'primereact/button';
import { useContext, useRef } from 'react';
import { classNames } from 'primereact/utils';
import LanguageContext, { Language } from '../../../utils/LanguageContext';
import SimpleColorCircle from './SimpleColorCircle';
import ThemeContext, { Theme} from '../../../utils/ThemeContext';
import { MenuItem } from 'primereact/menuitem';
import { faBars, faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function NavBarMenu() {
    const menu :any = useRef(null),
    [languageContext,SetLanguage] =useContext(LanguageContext),
    [themeContext,SetTheme] =useContext(ThemeContext)

    const data= [
        {
            label:languageContext == Language.EN_US ? "Language":languageContext == Language.PT_BR ?"Lingua":"",
            items:[
                {
                    label:"PT_BR",
                    command:()=>{
                        SetLanguage(Language.PT_BR)
                    }
                },
                {
                    label:"EN_US",
                    command:()=>{
                        SetLanguage(Language.EN_US)
                    }
                }
            ]
        },
        {
            label:languageContext == Language.EN_US ? "Color":languageContext == Language.PT_BR ?"Cor":"",
            items:[
                {
                    label:"Base",
                    icon:(<SimpleColorCircle Color="#171A21"/>),
                    command:()=>{
                        SetTheme(Theme.Base)
                    }
                },
                {
                    label:"HighTechPurple",
                    icon:(<SimpleColorCircle Color="#3C1361"/>),
                    command:()=>{
                        SetTheme(Theme.HighTechPurple)
                    },
                },
                {
                    label:"HighTechRed",
                    icon:(<SimpleColorCircle Color="#840404"/>),
                    command:()=>{
                        SetTheme(Theme.HighTechRed)
                    }
                },
                {
                    label:"KissLand",
                    icon:(<SimpleColorCircle Color="#229867"/>),
                    command:()=>{
                        SetTheme(Theme.KissLand)
                    }
                }
            ]
        }
    ]
    return(
        <>
            <Button type="button" icon={<FontAwesomeIcon icon={faBars}/>} onClick={(event) =>  menu.current.toggle(event) } className="p-button-secondary"
            ></Button>
            <SlideMenu popup ref={menu} viewportHeight={250} model={data} backLabel={languageContext == Language.EN_US ? "Back":languageContext == Language.PT_BR ?"Voltar":""}/>
        </>

    )
}
function ColorLabelFactory(theme : Theme, name: String){
    if (theme == Theme.Base){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#171A21"}}>
            {name} 
        </div>)
    }
    if(theme==Theme.HighTechPurple){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#3C1361"}}>
            {name} 
        </div>)
    }
    if(theme==Theme.HighTechRed){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#FF0000"}}>
            {name} 
        </div>)
    }
    if(theme==Theme.KissLand){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#229867"}}>
            {name} 
        </div>)
    }
}