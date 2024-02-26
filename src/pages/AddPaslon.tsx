import React from "react";
import AdminLayouts from "../components/layouts/AdminLayouts";
import profilePic from "../assets/images/profile-pic.png"
import Button from "../components/elements/Button/Button";
import InputForm from "../components/elements/input/InputForm";
import InputTextarea from "../components/elements/InputTextarea/InputTextarea";
import SectionAdd from "../components/elements/section/SectionAdd";

const AddPaslon: React.FC = () => {
    return (
        <AdminLayouts>
            <SectionAdd profilePic={profilePic} title="Add Paslon">
                <InputForm label="Nama" type="text" name="nama"></InputForm>
                <InputForm label="Nomor Urut" type="text" name="NoUrut"></InputForm>
                <InputTextarea label="Visi Misi" name="VisiMisi" rows={13} />
                <Button variant="bg-[#5E5A00] text-white w-[503px] py-3">Submit</Button>
            </SectionAdd>
        </AdminLayouts>
    )
}

export default AddPaslon