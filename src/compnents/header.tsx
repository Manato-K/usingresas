import React from "react"
import words from "@/constants/language/ja/commons"

const defaultHeader = ():JSX.Element => {
    return (
        <header style={{
            textAlign: "center",
            backgroundColor: "#cccccc"
        }}>
            <p>{ words.HEADER_TITLE }</p>
        </header>
    )
}

export default defaultHeader