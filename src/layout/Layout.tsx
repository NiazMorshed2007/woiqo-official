import React, {FC, ReactNode} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";


interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
    return <main>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
    </main>
}

export default Layout;