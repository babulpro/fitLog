'use client' // Required because Context uses React state.

import React, { createContext, useState, useContext, ReactNode } from 'react';
 

type PlanContextType = {
    plan: any[]; 
    setPlan: React.Dispatch<React.SetStateAction<any[]>>;
    savePlan: any[];
    setSavePlan: React.Dispatch<React.SetStateAction<any[]>>;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

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
 
export const usePlan = () => {
    const context = useContext(PlanContext);
    
 
    if (context === undefined) {
        throw new Error('usePlan must be used within a PlanProvider. Check your layout.tsx file!');
    }
    return context;
};