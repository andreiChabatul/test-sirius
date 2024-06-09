import { IProfile } from "@/types/store";
import Image from "next/image";

export type propsItem = {
    name: string,
    image: string,
    isYou: boolean
}


export default function ItemPopUpProfile({ name, image, isYou }: propsItem, ) {

    console.log(isYou)
    return (
        
        <li>
            <Image src={`/${image}.png`} width={32} height={32} alt='profile'/>
            <p>{name}</p>
        </li>
    )
}