import { singleLibrayById } from '@/app/action/libray';
import Image from 'next/image';
import React from 'react';
import { Plus, Bookmark } from 'lucide-react';

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const libDetails = await singleLibrayById(Number(id));

    // Safety check in case the ID doesn't exist
    if (!libDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Workout not found.
            </div>
        );
    }

    // Helper array to dynamically render the stats grid cleanly
    const statsData = [
        { label: 'EQUIPMENT', value: libDetails.equipment },
        { label: 'DIFFICULTY', value: libDetails.difficulty },
        { label: 'SETS', value: libDetails.sets },
        { label: 'REPS', value: libDetails.reps },
        { label: 'DURATION', value: `${libDetails.duration} min` },
        { label: 'CALORIES', value: `${libDetails.caloriesBurned} kcal` },
        { label: 'RATING', value: libDetails.rating },
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                
                {/* LEFT COLUMN: Image */}
                <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[800px] rounded-2xl overflow-hidden bg-[#111827]">
                    <Image 
                        src={libDetails.image} 
                        alt={libDetails.name} 
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </div>

                {/* RIGHT COLUMN: Details */}
                <div className="flex flex-col justify-center">
                    
                    {/* Header section */}
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
                            {libDetails.name}
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {libDetails.description}
                        </p>
                    </div>

                    {/* Muscle Groups Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {libDetails.muscleGroups.map((muscle) => (
                            <span 
                                key={muscle} 
                                className="bg-[#D4FF00] text-black text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-wider"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Stats Grid Box */}
                    <div className="bg-[#111827] rounded-xl p-5 mb-8">
                        <div className="flex flex-col">
                            {statsData.map((stat, index) => (
                                <div 
                                    key={stat.label} 
                                    className={`flex justify-between items-center py-3 text-sm ${
                                        index !== statsData.length - 1 ? 'border-b border-gray-800' : ''
                                    }`}
                                >
                                    <span className="text-gray-500 font-medium tracking-wide text-xs uppercase">
                                        {stat.label}
                                    </span>
                                    <span className="font-semibold text-white">
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="mb-10">
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-white">
                            Instructions
                        </h2>
                        <ol className="list-decimal list-inside space-y-3 text-gray-400 text-sm md:text-base">
                            {libDetails.instructions.map((step, index) => (
                                <li key={index} className="leading-relaxed pl-1">
                                    <span className="text-gray-300 ml-1">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                        <button className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-[#D4FF00] text-black font-bold uppercase tracking-wide px-6 py-4 rounded-xl hover:bg-[#bae600] transition-colors duration-200">
                            <Plus size={20} strokeWidth={3} />
                            Add to Today's plan
                        </button>
                        
                        <button className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-transparent border-2 border-gray-800 text-white font-bold uppercase tracking-wide px-6 py-4 rounded-xl hover:border-gray-600 hover:bg-gray-900 transition-colors duration-200">
                            <Bookmark size={20} />
                            Save for later
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;