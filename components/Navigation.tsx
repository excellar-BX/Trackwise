'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiArrowFromLeft, BiArrowFromRight, BiChevronLeft, BiChevronRight, BiHomeAlt, BiLogOut, BiMap } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight, FaLanguage } from 'react-icons/fa';
import {IoSettingsSharp} from 'react-icons/io5'
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();
  
  const {logout, user} = useAuth()

  // Auto-collapse on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    // Set initial state
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationItems = [
    { id: 'Tasks', label: 'Tasks', icon: <BiHomeAlt/>, href: '/dashboard' },
    { id: 'Teams', label: 'Teams', icon: <FaLanguage/>, href: '/dashboard/teams' },
    { id: 'settings', label: 'Settings', icon: <IoSettingsSharp/> , href: '/dashboard/settings' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className={`${isCollapsed ? 'w-16 sm:w-20 max-[400px]:-translate-x-16' : 'w-64 translate-x-0'}  bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col h-screen max-sm:fixed left-0 top-0 z-50`}>
      {/* Header */}
      <div className="px-2 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center w-fit">
          {/* Stylized SVG Icon */}
          <div className="w-8 h-8 bg-gradient-to-br from-white to-green-600 rounded-lg flex items-center justify-center mr-3">
            
          </div>
          {!isCollapsed && (
<Link href={"/dashboard"}>
          <div className="text-green-600 font-Satoshi-bold text-xl border px-5 py-2 my-3 mx-4 rounded-full w-fit ">
            TrackWise
          </div>
        </Link>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="p-1 relative  rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? (
            <BiArrowFromLeft className={`w-5 max-[400px]:translate-x-6 ${pathname.includes("translator") || pathname.includes("maps")? " max-[400px]:text-[#fff]" : "max-[400px]:text-gray-600"} glass-morphism -left-2 -top-2 absolute h-5 rounded-sm text-gray-600`} />
          ) : (
            <BiArrowFromRight className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-2 sm:p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`w-full flex ${isCollapsed && "justify-center"} items-center p-3 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-blue-100 text-blue-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                    {item.icon}
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="px-2 sm:p-4 border-t border-gray-200">
         

        {/* Logout Button */}
        <button 
          className={`w-full flex ${isCollapsed && "justify-center"} items-center p-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200`}
          onClick={logout}
          title={isCollapsed ? "Logout" : undefined}
        >
          <BiLogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="ml-3 font-medium">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navigation;