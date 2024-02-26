import React from "react";

interface Props {
    txtColor?: string
}

const SectionInfo: React.FC<Props> = ({txtColor}) => {
    return (
        <section>
            <div className="py-16 bg-white">
                <div className={`container mx-auto px-12 font-bold text-center ${txtColor}`}>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT</h1>
                </div>
            </div>
        </section>
    )
}

export default SectionInfo