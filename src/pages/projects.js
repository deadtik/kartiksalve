import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/bbdecors.png';
import project2 from '../../public/images/projects/Juicy Rasoi.jpg';
import project3 from '../../public/images/projects/logo-birdy.png';
import project4 from '../../public/images/projects/craftastic.png';
import project5 from '../../public/images/projects/Gsoc.png'
import project6 from '../../public/images/projects/forage.png'
import TransitionEffect from '@/components/transitionEffect';

const FeaturedProjects= ({type, title, summary, img, link, github}) => {
  return(
    <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl 
        border border-solid border-dark bg-light shadow-2xl p-12
          relative dark:bg-dark dark:text-light dark:border-light 
          lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
            rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
      <Link 
      href={link} 
      target='_blank'
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
      <Image src={img} alt={title} className='w-full h-auto'
      priority
      sizes='(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw'/>      
     </Link>

         <div className='w-1/2 flex flex-col items-start justify-between pl-6 
         lg:w-full lg:pl-0 lg:pt-6'>
           <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
              <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
              </Link>
              <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
              <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent
                hover:border-dark transition-all dark:bg-light
                 dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
                 sm:px-4 sm:text-base'
                > Visit the Project </Link>              
              </div>
</div>
</article>

  )
}

const Project = ({type, title, img, link, github}) => {
  return (

    <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light shadow-2xl p-6
          relative dark:bg-dark dark:text-light dark:border-light
          xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] xs:-right-2'/>
      <Link href={link} target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'>
      <Image src={img} alt={title} className='w-full h-auto'
      priority
      sizes='(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw'/>      
      </Link>

         <div className='w-full flex flex-col items-start justify-between pl-6'>
           <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
              <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl sm:text-sm'>{title}</h2>
              </Link>
          
              <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10 md:w-6'>
                   <GithubIcon />
                    </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent
                hover:border-dark transition-all dark:bg-light
                 dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
                 md:px-4 md:text-base'
                > Visit </Link>              
              </div>
        </div>
</article>
  )
}


const Projects = () => {
return (
    <>
    <Head>
          <title>P.O.W | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center mb-16'>
          <Layout className='pt-16'>
              <AnimatedText text='Imagine. Create. Repeat.'
              className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '
              />

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16
            lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            
                <div className='col-span-12'>
            <FeaturedProjects
            title = 'Beyond Bounds'
            summary = 'We provide tailored Digital Marketing and Web Development services for Beyond Bounds, enhancing their online visibility and user experience. My work drives brand growth through effective strategies and seamless website solutions '
             img = {project1}
             link='/'
             github='/'
             type='Ongoing Project'
                   />
          
      </div> 
      <div className='col-span-6 sm:col-span-12'>
        <Project
            title = 'Photography Session for Juicy Rasoi'
             img = {project2}
             link='https://drive.google.com/drive/u/0/mobile/folders/1hPD5n1mUsB7TLReS7jbr04-BCMh-gi-_?usp=drive_link'
             github='https://drive.google.com/drive/u/0/mobile/folders/1hPD5n1mUsB7TLReS7jbr04-BCMh-gi-_?usp=drive_link'
             type='Completed Project'
           />
            </div>

            <div className='col-span-6 sm:col-span-12'>
        <Project
            title = 'WordPress Site For Birdy Furniture.'
             img = {project3}
             link='https://birdyfurniture.com/'
             github='https://birdyfurniture.com/'
             type='Completed Project'
           />
            </div>
          <div className='col-span-12 sm:col-span-12'>
           <FeaturedProjects
            title = 'Craftastic: Your Favorite Personal Gift Shop.'
            summary = 'We are developing a very Special Site for one of my FAVOURITE GIFT SHOPS. With Interactive UI and Responsive Design. Project is under development, the github repository is thus private and the link is unavailable for now.'
             img = {project4}
             link='https://www.instagram.com/craftastic003/'
             github='/'
             type='Ongoing Project'
                   />
                   </div>
        
        <div className='col-span-6 sm:col-span-12'>
        <Project
            title = 'GSOC: LPython Compiler'
             img = {project5}
             link='https://summerofcode.withgoogle.com/'
             github='https://github.com/lcompilers/lpython'
             type='Actively Contributing'
           />
           </div>

           <div className='col-span-6 sm:col-span-12'>
        <Project
            title = 'Software Engineering Virtual Experience by Forage'
             img = {project6}
             link='https://drive.google.com/file/d/1Ts4va4M13DfWlJgwfHvMS49RU5GWSNop/view?usp=sharing'
             github='https://github.com/deadtik/forage-jpmc-swe-task-3'
             type='Certification.'
           />
           </div>

            </div>

          </Layout>
      </main>
    </>
)
};

export default Projects;
