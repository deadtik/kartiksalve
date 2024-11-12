import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/Designer.jpeg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/transitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Kartik | About Page</title>
        <meta
          name="description"
          content="any description"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 pb-16">
          <AnimatedText
            text="Dream, plan, execute."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:pl-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>
              <p className="font-medium">We are a creative collective passionate about translating your brand&apos;s essence into a captivating online experience. We understand the power of a well-crafted digital presence, and we&apos;re here to be your one-stop shop for crafting it.</p>
              <p className="my-4 font-medium">From the ground floor up, our team of web developers and UI/UX designers builds the foundation of your online identity. We take meticulous care in crafting user interfaces that are not only aesthetically pleasing but also intuitive and user-friendly. But a beautiful website is just the beginning. Our talented photographers and videographers capture the essence of your brand visually, bringing your story to life in a way that resonates with your target audience.</p>
              <p className="font-medium">The journey doesn&apos;t end there. Our digital marketing strategists weave magic in the background, ensuring your brand reaches the right eyes. We don&apos;t just create an online space; we craft immersive user experiences that elevate your brand and propel it forward.</p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
          bg-light p-8 flex flex-col justify-between dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark 
            dark:bg-light"
              />
              <Image
                src={profilePic}
                alt="Techates"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied Clients</h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={90} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of Experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
