import AccordionBase from "@/app/[lng]/components/Accordion/AccordionBase";
import {useTranslation} from "@/app/i18n";

export const Accordion= async ({lng}) =>{
    const {t} = await useTranslation(lng, 'translation')
    return <AccordionBase t={t} lng={lng}/>
}