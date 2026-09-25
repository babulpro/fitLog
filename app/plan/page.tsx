import React from 'react';
import PlanClient from '../Components/planCompnent/PlanClient';
 
// This is a Server Component by default
const PlanPage = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-16 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                
                {/* Static Header (Rendered on the Server) */}
                <div className="mb-8">
                    <h1 className="text-4xl font-black uppercase tracking-tight text-white mb-2">
                        My Plan
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Interactive Client Component */}
                <PlanClient />
                
            </div>
        </div>
    );
};

export default PlanPage;