import React from 'react'
import Table from '../components/elements/table/Table'
import Thead from '../components/elements/table/Thead'
import Tbody from '../components/elements/table/Tbody'
import Tr from '../components/elements/table/Tr'
import Td from '../components/elements/table/Td'
import Th from '../components/elements/table/Th'
import profilePic from '../assets/images/profile-pic.png'
import AdminLayouts from '../components/layouts/AdminLayouts'
import SectionTable from '../components/elements/section/SectionTable'

interface Props {

}

const ListPartai: React.FC<Props> = () => {
    return (
        <AdminLayouts>
            <SectionTable bgColor='bg-white' textTitle='List Partai'>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>No. Urut</Th>
                            <Th>Logo</Th>
                            <Th>Ketua Umum</Th>
                            <Th>Visi & Misi</Th>
                            <Th>Alamat</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>
                                <img src={profilePic} className='w-full h-28 bg-cover bg-center rounded-lg' alt="" />
                            </Td>
                            <Td>Cintara Surya Paloh</Td>
                            <Td>
                                <ul className='list-disc list-inside'>
                                    <li>Memindahkan Indonesia ke Isekai.</li>
                                    <li>Nonton anime 3x sehari.</li>
                                    <li>Melakukan peresapan pada budaya jepang</li>
                                </ul>
                            </Td>
                            <Td>Kerajaan Black Clover </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </SectionTable>
        </AdminLayouts>
    )
}

export default ListPartai
