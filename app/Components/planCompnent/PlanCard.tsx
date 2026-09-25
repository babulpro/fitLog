'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Flame, Star, Layers, Trash2 } from 'lucide-react';

const PlanCard = ({ 
    item, 
    activeTab, 
    handleRemove 
}: { 
    item: any; 
    activeTab: 'today' | 'saved'; 
    handleRemove: (e: React.MouseEvent, id: number) => void 
}) => {
    return (
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left: Image & Details */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 bg-gray-800">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 80px, 96px" />
                </div>
                <div>
                    <h3 className="font-bold text-lg uppercase leading-tight">{item.name}</h3>
                    <p className="text-gray-400 text-xs mb-3">{item.equipment}</p>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5" title="Duration">
                            <Clock size={14} className="text-[#d4ff00]" /> {item.duration} min
                        </span>
                        <span className="flex items-center gap-1.5" title="Calories">
                            <Flame size={14} className="text-[#d4ff00]" /> {item.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1.5" title="Rating">
                            <Star size={14} className="text-[#d4ff00]" /> {item.rating}
                        </span>
                        <span className="flex items-center gap-1.5 font-medium text-gray-300" title="Sets & Reps">
                            <Layers size={14} className="text-[#d4ff00]" /> {item.sets} sets x {item.reps}
                        </span>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
                <button 
                    onClick={(e) => handleRemove(e, item.id)}
                    className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                    title="Remove from list"
                >
                    <Trash2 size={18} />
                </button>
                
                <Link href={`/workout/${item.id}`} className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    View Details
                </Link>
                
                {activeTab === 'today' && (
                    <button className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#d4ff00] text-black rounded-full hover:bg-[#bae600] transition-colors">
                        Mark as Done
                    </button>
                )}
            </div>
        </div>
    );
};

export default PlanCard;