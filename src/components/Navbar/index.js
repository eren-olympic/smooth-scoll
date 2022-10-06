import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
   Nav,
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinkS,
   NavBtn,
   NavBtnLin
} from './NavbarElements';

const Navbar = ({ toggle }) => {
   const [scrollNav, setScrollNav] = useState(false);

   const changeNav = () => {
      if (window.scrollY >= 80) {
         setScrollNav(true);
      } else {
         setScrollNav(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', changeNav);
   }, []);

   const toggleHome = () => {
      scroll.scrollToTop();
   }

   return (
      <>
         <IconContext.Provider value={{ color: 'purple' }}>
            <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>
                     dollar
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                     <FaBars />
                  </MobileIcon>
                  <NavMenu>
                     <NavItem>
                        <NavLinkS
                           to='about'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                        >
                           About
                        </NavLinkS>
                     </NavItem>
                     <NavItem>
                        <NavLinkS
                           to='discover'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                        >
                           Discover
                        </NavLinkS>
                     </NavItem>
                     <NavItem>
                        <NavLinkS
                           to='services'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                        >
                           Services
                        </NavLinkS>
                     </NavItem>
                     <NavItem>
                        <NavLinkS
                           to='signup'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                        >
                           Sign Up
                        </NavLinkS>
                     </NavItem>
                  </NavMenu>
                  <NavBtn>
                     <NavBtnLin to='/signin'>Sign In</NavBtnLin>
                  </NavBtn>
               </NavbarContainer>
            </Nav>
         </IconContext.Provider>
      </>
   )
};

export default Navbar;