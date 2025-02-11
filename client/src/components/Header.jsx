import { Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

import Logo_Dentist from '../assets/images/Logo_Dentist.png'

export default function Header() {
  const path = useLocation().pathname;
  return (
    // <Navbar className=' p-4 flex justify-between items-center bg-[#63918b] bg-opacity-25' style={{ zIndex: 10, position: 'relative' }}>
    //   <Link to="/" className='flex self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
    //     <img src={Logo_Dentist} alt="Logo" className=' h-8 w-auto mr-3' />
    //     <span className='hidden sm:inline font-serif text-xl text-[#484849] bg-clip-text pt-2'>Dr Dimitar Donchev</span>
    //   </Link>
    //   <Navbar.Collapse className="md:flex md:items-center md:space-x-4 ">
    //     <Link to='/' className="nav-link">
    //       <Navbar.Link active={path === '/'} as={'div'} className={`${path === '/' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
    //         Home
    //       </Navbar.Link>
    //     </Link>
        
    //     <Link to='/allposts' className="nav-link">
    //       <Navbar.Link active={path === '/allposts'}  as={'div'} className={`${path === '/allposts' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`} >
    //         Posts
    //       </Navbar.Link>
    //     </Link>
    //     <Link to='/forum' className="nav-link">
    //       <Navbar.Link active={path === '/forum'} as={'div'} className={`${path === '/forum' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
    //         Forum
    //       </Navbar.Link>
    //     </Link>
    //     <Link to='/contact-us' className="nav-link">
    //       <Navbar.Link active={path === '/contact-us'} as={'div'} className={`${path === '/contact-us' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
    //         Contact Us
    //       </Navbar.Link>
    //     </Link>
    //   </Navbar.Collapse>

    // </Navbar>

    <Navbar fluid={true}
    rounded={true}
    className="bg-transparent bg-gray-400 bg-opacity-50 absolute top-0 left-0 w-full z-10">
    
      <Link to="/" className='flex self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <img src={Logo_Dentist} alt="Logo" className='h-12 w-auto mr-2 ' />
        <span className='hidden sm:inline font-serif text-xl text-[#484849] bg-clip-text pt-2'>Dr Dimitar Donchev</span>
      </Link>
      <div className='flex gap-1 md:order-2'>
      <Navbar.Toggle />

      </div>
  
    <Navbar.Collapse className="md:flex md:items-center md:space-x-4 ">
    <Link to='/' className="nav-link">
      <Navbar.Link active={path === '/'} as={'div'} className={`${path === '/' ? 'bg-gray-800 opacity-60 md:text-gray-900 md:font-semibold md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
        Home
      </Navbar.Link>
    </Link>
    
    <Link to='/allposts' className="nav-link">
      <Navbar.Link active={path === '/allposts'}  as={'div'} className={`${path === '/allposts' ? 'bg-gray-500 opacity-60 md:text-gray-700 md:font-semibold md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`} >
        Posts
      </Navbar.Link>
    </Link>
    <Link to='/forum' className="nav-link">
      <Navbar.Link active={path === '/forum'} as={'div'} className={`${path === '/forum' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
        Forum
      </Navbar.Link>
    </Link>
    <Link to='/contact-us' className="nav-link">
      <Navbar.Link active={path === '/contact-us'} as={'div'} className={`${path === '/contact-us' ? 'bg-red-400 md:text-red-500 md:dark:text-red-400 ' : 'text-gray-700 dark:text-gray-300 dark:hover:md:text-red-400 hover:md:text-red-500'} py-2 px-4 rounded-md text-lg md:text-xl`}>
        Contact Us
      </Navbar.Link>
    </Link>
  </Navbar.Collapse>
    
  </Navbar>
  )
}
