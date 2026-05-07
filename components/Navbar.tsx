import React from 'react';

interface NavItem {
    label: string;
    href: string;
}

const NAV_ITEMS: Array<NavItem> = [
    { label: 'Posts', href: '#posts' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
];

const Navbar = () => {
    return (
        <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50'>
            <div className='max-w-5xl mx-auto flex items-center justify-between py-4'>
                <div className='text-xl font-bold'>
                    <a href='#home' className='hover:text-teal-600 transition-colors'>Can Okan Taşkıran</a>
                </div>
                <nav className='flex gap-6'>
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className='text-gray-700 hover:text-teal-600 font-medium transition-colors'
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
