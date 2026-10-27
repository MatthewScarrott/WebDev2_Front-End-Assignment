/*
* File name: StatsPanel.tsx
* Author: Matthew Scarrott
* Date: Oct. 30, 2026
* 
* Description:
* 
* 
* 
* 
*/

// Props
interface StatsPanelProps {
    total: number;
    honourRoll: number;
    grade12: number;
}

const StatsPanel = ({total, honourRoll, grade12}: StatsPanelProps) => {
    return (
        <div>
            {total}
            {honourRoll}
            {grade12}
        </div>
    );
};

export default StatsPanel;