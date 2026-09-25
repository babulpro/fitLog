'use client';

import React from 'react';
import { usePlan } from '@/app/contex/librayContext'; // Adjust path if needed!
import { Plus, Bookmark } from 'lucide-react';
import toast from 'react-hot-toast';

const PlanButtons = ({ workout }: { workout: any }) => {
    const { plan, setPlan, savePlan, setSavePlan } = usePlan();

    // Check states
    const isInPlan = plan.some((item) => item.id === workout.id);
    const isSaved = savePlan.some((item) => item.id === workout.id);
    
    // NEW: Check if the plan has reached the maximum limit of 5
    const isPlanFull = plan.length >= 5;

    const handleAddToPlan = () => {
        // 1. Check if the plan is already full
        if (isPlanFull) {
            toast.error("Plan limit reached! You can only add up to 5 workouts.", {
                style: { 
                    border: '1px solid #ef4444', // Red border for error
                    padding: '16px', 
                    color: '#ef4444',
                    background: '#0A0A0A'
                },
                iconTheme: { primary: '#ef4444', secondary: '#000' },
            });
            return; // Stop the function here
        }

        // 2. If not full, add the workout
        if (!isInPlan) {
            setPlan([...plan, workout]);
            toast.success(`${workout.name} added to your plan!`, {
                style: { 
                    border: '1px solid #d4ff00', 
                    padding: '16px', 
                    color: '#d4ff00',
                    background: '#0A0A0A'
                },
                iconTheme: { primary: '#d4ff00', secondary: '#000' },
            });
        }
    };

    const handleSaveForLater = () => {
        if (!isSaved) {
            setSavePlan([...savePlan, workout]);
            toast.success(`${workout.name} saved for later!`, {
                style: { 
                    border: '1px solid #d4ff00', 
                    padding: '16px', 
                    color: '#d4ff00',
                    background: '#0A0A0A'
                },
                iconTheme: { primary: '#d4ff00', secondary: '#000' },
            });
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-4 mt-auto">
            <button 
                onClick={handleAddToPlan}
                disabled={isInPlan || isPlanFull} // Disable if already in plan OR plan is full
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 font-bold uppercase tracking-wide px-6 py-4 rounded-xl transition-colors duration-200 ${
                    isInPlan || isPlanFull
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#D4FF00] text-black hover:bg-[#bae600]'
                }`}
            >
                <Plus size={20} strokeWidth={3} />
                {isInPlan 
                    ? 'Added to Plan' 
                    : isPlanFull 
                        ? 'Plan Full (Max 5)' 
                        : "Add to Today's plan"}
            </button>
            
            <button 
                onClick={handleSaveForLater}
                disabled={isSaved}
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-transparent border-2 font-bold uppercase tracking-wide px-6 py-4 rounded-xl transition-colors duration-200 ${
                    isSaved
                    ? 'border-[#D4FF00] text-[#D4FF00]'
                    : 'border-gray-800 text-white hover:border-gray-600 hover:bg-gray-900'
                }`}
            >
                <Bookmark size={20} fill={isSaved ? "#D4FF00" : "none"} />
                {isSaved ? 'Saved' : 'Save for later'}
            </button>
        </div>
    );
};

export default PlanButtons;