import React from 'react'
import Label from './Label'
import Textarea from './Textarea'

interface Props {
    label: string
    name: string
    rows: number
    placeholder?: string
}

const InputTextarea: React.FC<Props> = ({label, rows, name, placeholder}) => {
    return (
        <div className="mb-2">
            <Label htmlFor={name}>{label}</Label>
            <Textarea name={name} rows={rows} placeholder={placeholder}/>
        </div>
    )
}

export default InputTextarea
