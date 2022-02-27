import React from "react"
import Image from 'next/image'

export default function ImageLink(props) {
    return (
        <div className="cursor-pointer">
            <a rel="home" className="main-logo">
                <Image src={props.img} alt="Golden Dao logo" width={props.width} height={props.height}/>
            </a>
        </div>
    )
}

