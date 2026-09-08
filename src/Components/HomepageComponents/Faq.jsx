import React from 'react'
import { motion } from 'framer-motion'

const Faq = () => {
  return (
    <>
        <div id="Faq" className="space-y-4 p-6 w-full mx-auto text-center flex flex-col justify-center items-center dark:bg-[#030712] ">
            <span className="inline-block bg-primary-50/10  text-primary-50 text-lg font-semibold px-4 py-1.5 rounded-full mb-4">
                FAQ
            </span>
            <h1  className="text-4xl font-bold text-gray-900 dark:text-white! sm:text-5xl p-3.5 ">Frequently Asked Questions</h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400!  mx-auto text-xl mb-5">Find answers to common questions about our organization, donations, and volunteer opportunities.</p>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 1 * 0.1, ease: 'easeOut' }}
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden border-b-2 border-b-gray-300  p-3 text-gray-900 dark:border-b-gray-700! dark:text-gray-200 " open=""  >
                <summary className="flex items-center justify-between gap-1.5 p-3">
                <h2 className="text-2xl font-medium">Are my donations tax-deductible?</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 pb-1.5 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 1 * 0.1, ease: 'easeOut' }}
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden border-b-2 border-b-gray-300  p-3 text-gray-900 dark:border-b-gray-700! dark:text-gray-200 " open=""  >
                <summary className="flex items-center justify-between gap-1.5 p-3">
                <h2 className="text-2xl font-medium">How are funds allocated?</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 pb-1.5 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 1 * 0.1, ease: 'easeOut' }}
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden border-b-2 border-b-gray-300  p-3 text-gray-900 dark:border-b-gray-700! dark:text-gray-200 " open=""  >
                <summary className="flex items-center justify-between gap-1.5 p-3">
                <h2 className="text-2xl font-medium">How can I volunteer?</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 pb-1.5 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 1 * 0.1, ease: 'easeOut' }}
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden border-b-2 border-b-gray-300  p-3 text-gray-900 dark:border-b-gray-700! dark:text-gray-200 " open=""  >
                <summary className="flex items-center justify-between gap-1.5 p-3">
                <h2 className="text-2xl font-medium">Can I set up recurring donations?</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 pb-1.5 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>


        </div>

    </>
  )
}

export default Faq