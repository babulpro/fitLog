import Image from 'next/image';
import React from 'react';
import { Clock, Flame, Star } from 'lucide-react';
import { Workout } from '@/app/type';

const LibrayCard = ({ item }:{item:Workout}) => {
    // Destructure for cleaner JSX
    const { image, muscleGroups, name, equipment, duration, caloriesBurned, rating } = item;

    return (
        <div className='bg-[#111827] text-white rounded-2xl overflow-hidden shadow-lg w-full max-w-sm flex flex-col'>
            {/* Image Container */}
            <div className='relative w-full h-48'>
                <Image 
                    src={image} 
                    alt={name || 'Workout image'} 
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content Container */}
            <div className='p-4 flex flex-col gap-3'>
                {/* Muscle Groups Tags */}
                {muscleGroups?.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                        {muscleGroups.map((muscle) => (
                            <span 
                                key={muscle} 
                                className='bg-[#D4FF00] text-black text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider'
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title & Equipment */}
                <div>
                    <h2 className='text-lg font-bold uppercase tracking-wide'>{name}</h2>
                    <p className='text-sm text-gray-400 mt-0.5'>{equipment}</p>
                </div>

                {/* Stats Row */}
                <div className='flex items-center gap-2 mt-2'>
                    <div className='flex items-center gap-1.5 border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-300'>
                        <Clock size={14} className="text-gray-400" />
                        <span>{duration}</span>
                    </div>
                    
                    <div className='flex items-center gap-1.5 border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-300'>
                        <Flame size={14} className="text-gray-400" />
                        <span>{caloriesBurned}</span>
                    </div>
                    
                    <div className='flex items-center gap-1.5 border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-300'>
                        <Star size={14} className="text-gray-400" />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibrayCard;