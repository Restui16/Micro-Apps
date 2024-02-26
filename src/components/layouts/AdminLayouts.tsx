import React from "react";
import Header from "../fragments/Header";
import Navbar from "../elements/Nav/Navbar";
import Main from "../fragments/Main";
import NavItem from "../elements/Nav/NavItem";

interface Props {
    children: React.ReactNode
}

const AdminLayouts: React.FC<Props> = ({children}) => {
    return (
        <>
            <Header>
                <Navbar brandName="Dashboard Pemilu">
                    <NavItem>Partai</NavItem> |
                    <NavItem>Paslon</NavItem> |
                </Navbar>
            </Header>
            <Main>
                {children}
            </Main>
        </>
    )
}

export default AdminLayouts