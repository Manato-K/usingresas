import React from "react"

export type checkBoxState = {
    prefectures?:
    | {    
        prefCode: number,
        prefName: string
    }[],
    onChange: (
        name: string,
        prefCode: number,
        check: boolean
    ) => void
}

const checkBox = ({ prefectures, onChange }: checkBoxState):JSX.Element => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap" 
        }}>
            {prefectures?.map((prefecture) => (
                <div key={prefecture.prefName}>
                    <input
                        type="checkbox"
                        onChange={(event) =>
                        onChange(
                            prefecture.prefName,
                            prefecture.prefCode,
                            event.target.checked
                        )
                    }
                        id={"checkbox" + prefecture.prefCode}
                    />
                    <label htmlFor={"checkbox" + prefecture.prefCode}>
                        {prefecture.prefName.length === 3 ? "　" + prefecture.prefName: prefecture.prefName}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default checkBox