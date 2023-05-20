import React from 'react';

import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Sidebar from "../Layout/Sidebar/Sidebar";

import Styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <div className={Styles.container}>
            <Header />
            <div className={Styles.main}>
                <Sidebar />
                <div className={Styles.content}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Layout;