import { ReactNode } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function NormalRoutes({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navbar className='' />
            {children}
            <Footer className='' />
        </div>
    )
}

export default NormalRoutes
