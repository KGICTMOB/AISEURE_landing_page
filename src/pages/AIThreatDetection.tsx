import AIThreatHero from '@/components/AIThreatHero';
import FeaturesGrid from '@/components/FeaturesGrid';
import Methodologies from '@/components/Methodologies';

const AIThreatDetection = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <AIThreatHero />
            <FeaturesGrid />
            <Methodologies />
        </div>
    );
};

export default AIThreatDetection;
