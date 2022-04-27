import React from 'react'
import { Footer, Navbar } from '../component'

const Blog = () => {
    return (
      <div className=' '>
        <Navbar />
        <div className='color'>
          <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold textColor '>
              WEDNESDAY WEALTH EDUCATION
            </h1>
            <h2 className='text-xl mt-10 md:mx-0 mx-2'>
              HOW DO YOU INCREASE YOUR WEALTH?
            </h2>
          </div>
          <div className='flex flex-col place-items-center mt-10 '>
            <img
              src='https://unsplash.com/photos/MYbhN8KaaEc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fGZpbmFuY2V8ZW58MHx8fHwxNjUwOTgxMjc5&force=true'
              alt='man-suit'
              width={700}
              height={508}
              align='center'
            />
          </div>
          <div className=''>
            <blockquote
              contenteditable='false'
              className='text-center md:w-6/12 mx-auto mt-10 px-4'
            >
              <p>
                "It is established that almost everyone probably wants to become
                wealthy at some point in their lives. Several paths to wealth
                have been defined over time, some people choose to live frugally
                to save more; while others take risks by investing in High Yield
                Investment Program (HYIP) to build wealth."
              </p>
              <cite contenteditable='true'>-- MyIsusu Admin</cite>
            </blockquote>

            <div className='md:text-center md:w-1/2 md:mx-auto ml-4 mr-3'>
              <h3 className='md:text-3xl text-3xl text-center leading-normal mt-6 '>
                What Is Wealth?
              </h3>
              <p className='mt-3'>
                Everyone has a different idea of what wealth is. For some, it
                means owning property; for others, it means having lucrative
                investments. From a financial standpoint, the term wealth is the
                number of assets you own minus debts. How do you determine your
                wealth? It's simply this: add the total market value of all your
                tangible and intangible assets, then subtract debts. Building
                wealth may seem somewhat impossible, but it is actually quite
                simple. In fact, you don’t have to earn six figures to turn this
                dream into a reality. No matter how old you are, you can amass
                wealth as long as you’re determined but keep in mind that
                building wealth is not an overnight process. So these are some
                tips to grow wealth:
              </p>
              <p className='mt-5'>
                <span className='font-bold pr-4'>1.</span> Increase Your Income
                Whether you’re just starting or in transition, having multiple
                income streams is the most fundamental step to building wealth.
                Here are some of the ways you can increase your income and build
                wealth fast.
              </p>
              <p className='mt-5'>
                <span className='font-bold pr-4'>2.</span>Venture into Business
                The wealthiest people in the world are not employees but
                business founders. Entrepreneurship fulfills two aspects of
                wealth building: income and high returns on accumulated wealth.
                Therefore, if you have a business idea that can increase your
                income, get started. It doesn’t have to be a huge business. You
                can start a small business and offer the services you’re good
                at. For instance, with the broad spread of the internet, you can
                create an entirely online-based business. Imagine preparing
                Edikaikong or any other Calabar delicasies and promoting such
                over the internet, if you’re busy with other things, you can
                hire people to run the logistics sode of the business for you
                while you focus on the production.
              </p>
              <p className='mt-5'>
                <span className='font-bold pr-4'>3.</span> Upskill and Take Up
                High-Paying Jobs It is no more news what companies such as
                Andela is doing and how they are helping young people make more
                money. How cool is it working remotely but living in Nigeria and
                earning about $5000 (N2 million) monthly! That's really awesome.
                However, some of these professions are very expensive. They may
                also take a lot of time to complete the requisite coursework,
                and it can be even longer before you start earning a high
                salary. You should consider all these factors before switching
                career. Whichever career path you choose, make sure it doesn’t
                leave your debt levels too high.
              </p>
              <p className='mt-5'>
                <span className='font-bold pr-4'>4.</span> Run Side Hustles Even
                if you have a job, you don’t have to only rely on your paycheck.
                You can run a successful side hustle to increase your income.
                You can turn your talent or hobby into monetary value during
                your free time. There are many lucrative side hustles you can
                run online as long as you have internet access. These include:
                <ul className='list-disc ml-7 text-left'>
                  <li> Part-time gym instructor.</li>
                  <li> Freelance bookkeeping, tax preparation, tutoring.</li>
                  <li> Becoming a shopper</li>
                  <li>
                    Part-time driver for a ride-sharing or delivery service.
                  </li>
                  <li> Working as a virtual assistant.</li>
                  <li> Freelance writing and editing.</li>
                  <li> Copywriting</li>
                  <li> Online tutor, coach, consultant.</li>
                  <li> Web design, app development, coding, etc.</li>
                  <p>
                    Other side hustles that don’t need internet access include:
                  </p>
                </ul>
              </p>
              <p className='mt-5'>
                <span className='font-bold pr-4'>5.</span> Save More Saving
                money is another crucial step in building wealth. Once you have
                enough income to cater to your basic needs, it’s time to save.
                Remember, saving small amounts regularly compounds to
                substantial wealth over time. MyIsusu was specially established
                to help people to achieve financial prosperity through
                disciplined periodic savings. We have done the heavy lifting of
                how to get your money saved and working for you, such that you
                won't just get your principal saved but you will also earn
                bwtween 10% and 50% interest over your savings. We are the right
                partner that can help you to steadily grow your wealth so lets
                get started here.
              </p>
              <h5 className='mb-32 text-center'>####### START HERE ####### </h5>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
}

export default Blog
