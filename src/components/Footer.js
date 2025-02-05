import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-dark font-medium text-lg
        dark:bg-light dark:text-light dark:border-light sm:text-base'>
           <Layout className='w-full py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'> 
            Built with <span className='text-primary dark:text-primaryDark text-2xl px-1' >&#9825;</span> by &nbsp;
            <p className='underline underline-offset-2'>ME!</p>
            </div>
            <Link aria-label='Techates' href={ 'https://wa.me/919867882681'} target='_blank' className='underline underline-offset-2'>
            Reach out to us.</Link>
           </Layout>
        </footer>
    );
};

export default Footer;
