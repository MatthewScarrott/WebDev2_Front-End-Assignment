/*
* File name: StatsPanel.tsx
* Author: Matthew Scarrott
* Date: Oct. 30, 2026
* 
* Description:
* This component displays the school metrics shown in the Overview section.
* It receives three number props from StudentPortal: total, honourRoll, and grade12.
* It does not hold any state, so the numbers update whenever the parent re-renders.
* It outputs a responsive grid of three cards for total enrollment, honour roll, and grade 12 students.
*/

// Props
interface StatsPanelProps {
    total: number;
    honourRoll: number;
    grade12: number;
}

const StatsPanel = ({total, honourRoll, grade12}: StatsPanelProps) => {
    const stats = [
        { label: "Total Enrollment", value: total },
        { label: "Honour Roll", value: honourRoll },
        { label: "Grade 12 Students", value: grade12 },
    ];
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm"
                >
                    <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsPanel;