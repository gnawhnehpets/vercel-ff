import logo from '../images/logo.png';
import mock_avi from '../images/mock/avatar.png';
import { ReactComponent as MenuIcon } from '../images/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../images/icons/close.svg';
import Dropdown from './Dropdown';
import React, { useState } from 'react';
import { useOutsideAlerter } from '../hooks/outsideAlerter';

function NavigationBar() {
    const { visible: profileDropdownVisible, setVisible: setProfileDropdownVisible, ref: dropdownRef } = useOutsideAlerter(false);

    const handleProfileButtonOnClick = () => setProfileDropdownVisible(!profileDropdownVisible);
    
    return (
        <nav className='bg-white'>
            <div className='max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Mobile Button */}
                        <button className='inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-inset' aria-aria-expanded='false'>
                            <span className='sr-only'>Open main menu</span>
                            {/* Icon when menu is closed: menu open will have 'hidden' and menu closed will be 'block*/}
                            <MenuIcon className='block h-6 w-6' />
                            <CloseIcon className='hidden h-6 w-6' /> { /*  Display either MenuIcon or CloseIcon depending on whether the menu is open */}
                        </button>
                    </div>

                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        { /* Logo */ }
                        <div className='flex-shrink-0 flex items-center'>
                            <img className='block lg:hidden h-8 w-auto' src={ logo } alt='fantasy football' />
                            <img className='hidden lg:block h-8 w-auto' src={ logo } alt='fantasy football' />
                        </div>

                        { /* Links */ }
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4'>
                                {/* Add to current page a bg-color-size */}
                                <a href='#' className='text-gray-900 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium'>Home</a>
                                <a href='#' className='text-gray-900 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium'>Watchlist</a>
                                <a href='#' className='text-gray-900 hover:bg-gray-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium'>Live Games</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Profile dropdown */}
                    <div className='m1-3 relative'>
                        <div>
                            <button onClick={ handleProfileButtonOnClick } className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white' id='user-menu' aria-haspopup='true'>
                                <span className='sr-only'>Open user menu</span>
                                <img className='h-8 w-8 rounded-full' src={ mock_avi } alt='' />
                            </button>
                        </div>
                    </div>

                    <Dropdown ref={ dropdownRef } options={ ['Your profile', 'Settings', 'Sign out'] } visible={ profileDropdownVisible } />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;