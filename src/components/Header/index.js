import React,{ useState } from 'react'
import { Wrapper,Content,Content1 } from './header.style'
import { Link } from 'react-router-dom';

import SideNav from '../SideNav'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const [open,setOpen] = useState(false);

    return (
        <>
        <Wrapper>
            <div className='logo' >
            <Link to='/'>
                <img src='/images/cannon-solar.webp' alt='logo'/>
            </Link>
            </div>
            <Content>
                <Link to='/models'>Residential Solar</Link>
                <Link to='/model3'>Commercial Solar</Link>
                <Link to='/modelx'>Solar Battery Storage</Link>
                <Link to='/modely'>Maintenance & Repair</Link>
                <Link to='#'>Authorized Dealer?</Link>
                <Link to='#'>Contact Us</Link>
            </Content>
            <Content1>
                
                <Link to='/login' className='none'>Account</Link>
                <a href='#' onClick={()=> setOpen(true)} >Menu</a>
            </Content1>
            {open && 
            <div className='top'>
                <div className='close' onClick={()=> setOpen(false)}>
                    <CloseIcon/>
                </div>
            </div> 
            }       
            <SideNav show={open}/>
        </Wrapper>
        </>
    )
}

export default Header