import { singleLibrayById } from '@/app/action/libray';
import PlanButtons from '@/app/Components/planAndSaveButton/PlanButton';
import Image from 'next/image';
import React from 'react';
 

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const libDetails = await singleLibrayById(Number(id));

    if (!libDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Workout not found.
            </div>
        );
    }

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
                    
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
                            {libDetails.name}
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {libDetails.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {libDetails.muscleGroups.map((muscle:string) => (
                            <span 
                                key={muscle} 
                                className="bg-[#D4FF00] text-black text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-wider"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

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

                    <div className="mb-10">
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-white">
                            Instructions
                        </h2>
                        <ol className="list-decimal list-inside space-y-3 text-gray-400 text-sm md:text-base">
                            {libDetails.instructions.map((step:string, index:number) => (
                                <li key={index} className="leading-relaxed pl-1">
                                    <span className="text-gray-300 ml-1">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* 
                        REPLACED BUTTONS WITH CLIENT COMPONENT 
                        We pass the libDetails data down as the 'workout' prop.
                    */}
                    <PlanButtons workout={libDetails} />

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;