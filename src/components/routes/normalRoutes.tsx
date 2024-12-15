import { ReactNode } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function NormalRoutes({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar className='' />
            {children}
            <Footer className='' />
        </div>
    )
}

export default NormalRoutes
