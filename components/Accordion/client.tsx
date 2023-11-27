'use client'

import {useTranslation} from "@/app/i18n/client";
import AccordionBase from "./AccordionBase";

export const Accordion =  ({lng}) => {
    const {t} = useTranslation(lng, 'translation', 'common')
    return <AccordionBase t={t} lng={lng}/>
}