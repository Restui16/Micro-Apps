import React from 'react'
import profilePic from '../assets/images/profile-pic.png'
import Table from '../components/elements/table/Table'
import Thead from '../components/elements/table/Thead'
import Tbody from '../components/elements/table/Tbody'
import Tr from '../components/elements/table/Tr'
import Th from '../components/elements/table/Th'
import Td from '../components/elements/table/Td'
import AdminLayouts from '../components/layouts/AdminLayouts'
import SectionDashboard from '../components/elements/section/SectionDashboard'
import SectionTable from '../components/elements/section/SectionTable'



const Dashboard: React.FC = () => {
    return (
        <>
            <AdminLayouts>
                <SectionDashboard profilePic={profilePic} />
                <SectionTable textTitle='List Voter' voters='TOTAL SUARA TERKUMPUL : 1000 Voters'>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Nama</Th>
                                <Th>Alamat</Th>
                                <Th>Jenis Kelamin</Th>
                                <Th>Paslon</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>Sugeng No Pants</Td>
                                <Td>Cileungsi</Td>
                                <Td>Laki Laki</Td>
                                <Td>Paloh</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </SectionTable>
            </AdminLayouts>
        </>
    )
}

export default Dashboard
