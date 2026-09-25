import { gerLibray } from '@/app/action/libray';
import Link from 'next/link';
import React from 'react';
import LibrayCard from './librayCard';
import { Workout } from '@/app/type';

const Libray =async () => {
    const libraies = await gerLibray()
    
    return (
        <div className='mt-8 container m-auto'>
            <h1 className='text-xl md:text-3xl font-bold text-[#ffffff]'>THE LIBRAY</h1>
            <p className='text-[#9ca3af]'>Twelve lifts covering every major muscle group.</p>
            <div className='mt-3 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6'>
                {libraies.length>0 &&

                    libraies.map((item:Workout)=>
                        
                        <Link key={item.id} href={`/workout/${item.id}`}>
                            <LibrayCard item={item}/>
                        </Link>
                    )

                }

            </div>
        </div>
    );
};

export default Libray;