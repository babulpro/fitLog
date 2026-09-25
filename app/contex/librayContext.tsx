'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
type PlanContextType = {
    plan: any[]; // Replace 'any' with your actual Workout type
    setPlan: React.Dispatch<React.SetStateAction<any[]>>;
    savePlan: any[];
    setSavePlan: React.Dispatch<React.SetStateAction<any[]>>;
};

// Create the context with a default value (or null, and throw an error in the hook)
const PlanContext = createContext<PlanContextType | undefined>();

// Create the Provider component
export const PlanProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<any[]>([]);
    const [savePlan, setSavePlan] = useState<any[]>([]);

    const sharedData = {
        plan, setPlan,
        savePlan, setSavePlan
    };

    return (
        <PlanContext.Provider value={sharedData}>
            {children}
        </PlanContext.Provider>
    );
};

// Create a custom hook for consuming the context
export const usePlan = () => {
    const context = useContext(PlanContext);
    if (context === undefined) {
        throw new Error('usePlan must be used within a PlanProvider');
    }
    return context;
};