'use client'; // This makes it a Client Component

import React from 'react';
 
import { Plus, Bookmark } from 'lucide-react';
import { usePlan } from '@/app/contex/librayContext';
import toast from 'react-hot-toast';

// We pass the 'workout' (libDetails) down from the Server Component as a prop
const PlanButtons = ({ workout }: { workout: any }) => {
    // Now we can use the Context API here safely!
    const { plan, setPlan, savePlan, setSavePlan } = usePlan();

    // Check if the workout is already in the plan or saved
    const isInPlan = plan.some((item) => item.id === workout.id);
    const isSaved = savePlan.some((item) => item.id === workout.id);

    const handleAddToPlan = () => {
        if (!isInPlan) {
            setPlan([...plan, workout]);
             toast.success(`added successfully to your plan!`, {
            style: { border: '1px solid #d4ff00', padding: '16px', color: '#d4ff00' },
            iconTheme: { primary: '#d4ff00', secondary: '#000' },
        });
        }
    };

    const handleSaveForLater = () => {
        if (!isSaved) {
            setSavePlan([...savePlan, workout]);
             toast.success(`  added successfully to your save later!`, {
            style: { border: '1px solid #d4ff00', padding: '16px', color: '#d4ff00' },
            iconTheme: { primary: '#d4ff00', secondary: '#000' },
        });
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-4 mt-auto">
            <button 
                onClick={handleAddToPlan}
                disabled={isInPlan}
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 font-bold uppercase tracking-wide px-6 py-4 rounded-xl transition-colors duration-200 ${
                    isInPlan 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#D4FF00] text-black hover:bg-[#bae600]'
                }`}
            >
                <Plus size={20} strokeWidth={3} />
                {isInPlan ? 'Added to Plan' : "Add to Today's plan"}
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