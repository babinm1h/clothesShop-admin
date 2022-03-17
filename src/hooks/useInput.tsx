
import React from "react"

export const useInput = (initValue: any) => {
    const [value, setValue] = React.useState<any>(initValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return { value, onChange }
}