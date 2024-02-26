import React from 'react'

interface Props {
    name: string
    placeholder?: string
    rows: number
}

const Textarea: React.FC<Props> = ({name, placeholder, rows}) => {
    return (
        <textarea name={name} rows={rows} placeholder={placeholder} className="border-2 border-[#595959] rounded-lg py-2 w-full"></textarea>
    )
}

export default Textarea
