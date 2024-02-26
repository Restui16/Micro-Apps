import React from "react";
import brandLogo from '/brand-logo.png'
import Navbar from "../elements/Nav/Navbar";
import Header from "../fragments/Header";
import Main from "../fragments/Main";
import Footer from "../fragments/Footer";
import InfoFooter from "../elements/footer/InfoFooter";
import CopyrightFooter from "../elements/footer/CopyrightFooter";
import NavItem from "../elements/Nav/NavItem";

interface Props {
    children: React.ReactNode
}

const UserLayouts: React.FC<Props> = ({children}) => {
    return (
        <>
            <Header>
                <Navbar brandName="PEMILU PRESIDEN DUMBWAYS.ID">
                    <NavItem>Partai</NavItem> |
                    <NavItem>Paslon</NavItem> |
                    <NavItem>Voting</NavItem> |
                </Navbar>
            </Header>

            <Main>
                {children}
            </Main>

            <Footer>
                <InfoFooter imgBrand={brandLogo} />
                <CopyrightFooter />
            </Footer>
        </>
    )
}

export default UserLayouts