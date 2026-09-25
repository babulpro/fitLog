'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { usePlan } from '@/app/contex/librayContext'; // Adjust path if needed!
import PlanCard from './PlanCard'; // We will extract the card here too
import toast from 'react-hot-toast';

type SortOption = 'duration' | 'rating' | 'calories' | 'sets';

const PlanClient = () => {
    const { plan, setPlan, savePlan, setSavePlan } = usePlan();
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [sortBy, setSortBy] = useState<SortOption>('duration');

    const currentList = activeTab === 'today' ? plan : savePlan;

    // Sort Logic
    const sortedList = [...currentList].sort((a, b) => {
        switch (sortBy) {
            case 'duration': return (a.duration || 0) - (b.duration || 0);
            case 'rating': return (b.rating || 0) - (a.rating || 0);
            case 'calories': return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
            case 'sets': return (b.sets || 0) - (a.sets || 0);
            default: return 0;
        }
    });

    // Totals Logic
    const totalExercises = currentList.length;
    const totalMinutes = currentList.reduce((acc, item) => acc + (item.duration || 0), 0);
    const totalCalories = currentList.reduce((acc, item) => acc + (item.caloriesBurned || 0), 0);

    // Remove Logic
    const handleRemove = (e: React.MouseEvent, itemId: number) => {
        e.preventDefault(); 
         toast.success(`Remove successfully!`, {
            style: { border: '1px solid #d4ff00', padding: '16px', color: '#d4ff00' },
            iconTheme: { primary: '#d4ff00', secondary: '#000' },
        });
        if (activeTab === 'today') {
            setPlan(plan.filter((item) => item.id !== itemId));
        } else {
            setSavePlan(savePlan.filter((item) => item.id !== itemId));
        }
    };

    return (
        <>
            {/* Stats Banner */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-8 flex justify-between items-center text-center">
                <div className="flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Exercises</p>
                    <p className="text-4xl font-black text-[#d4ff00]">{totalExercises}</p>
                </div>
                <div className="w-px h-12 bg-gray-800"></div>
                <div className="flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Minutes</p>
                    <p className="text-4xl font-black text-[#d4ff00]">{totalMinutes}</p>
                </div>
                <div className="w-px h-12 bg-gray-800"></div>
                <div className="flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Calories</p>
                    <p className="text-4xl font-black text-[#d4ff00]">{totalCalories}</p>
                </div>
            </div>

            {/* Controls (Tabs & Sort) */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="bg-[#111827] p-1 rounded-xl flex gap-1">
                    <button
                        onClick={() => setActiveTab('today')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors ${
                            activeTab === 'today' ? 'bg-[#1a2312] text-[#d4ff00]' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Today's Plan
                    </button>
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors ${
                            activeTab === 'saved' ? 'bg-[#1a2312] text-[#d4ff00]' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-500">Sort By</span>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="appearance-none bg-[#111827] text-white px-4 py-1.5 pr-8 rounded-lg border border-gray-800 cursor-pointer hover:border-gray-600 outline-none transition-colors text-sm font-medium"
                        >
                            <option value="duration">Duration (Shortest)</option>
                            <option value="calories">Calories (Highest)</option>
                            <option value="rating">Rating (Highest)</option> 
                        </select>
                        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ChevronDown size={14} />
                        </div>
                    </div>
                </div>
            </div>

            {/* List Area */}
            {sortedList.length === 0 ? (
                <div className="bg-[#111827] border border-gray-800 rounded-2xl p-16 flex flex-col items-center justify-center text-center mt-2">
                    <h2 className="text-xl font-bold uppercase tracking-wide mb-2 text-white">Nothing Here Yet</h2>
                    <p className="text-gray-400 text-sm mb-6 max-w-md">Browse the library and add a lift to get today moving.</p>
                    <Link href="/workout" className="bg-[#d4ff00] text-black font-bold uppercase tracking-wide px-6 py-3 rounded-full hover:bg-[#bae600] transition-colors">
                        Go to workouts
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4 mt-2">
                    {sortedList.map((item) => (
                        <PlanCard 
                            key={item.id} 
                            item={item} 
                            activeTab={activeTab} 
                            handleRemove={handleRemove} 
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default PlanClient;