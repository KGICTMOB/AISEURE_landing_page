import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import AIThreatDetection from '@/pages/AIThreatDetection';
import AdaptiveLearning from '@/pages/AdaptiveLearning';
import PatternRecognition from '@/pages/PatternRecognition';
import DataAnalysis from '@/pages/DataAnalysis';
import AutomatedResponse from '@/pages/AutomatedResponse';
import PredictiveAnalytics from '@/pages/PredictiveAnalytics';
import FalsePositiveReduction from '@/pages/FalsePositiveReduction';
import ISO27001 from '@/pages/ISO27001';
import ISMSP from '@/pages/ISMSP';
import AdminLayout from '@/layouts/AdminLayout';
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import ContentManager from '@/pages/admin/ContentManager';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="ai-threat-detection" element={<AIThreatDetection />} />
                <Route path="ai-threat-detection/adaptive-learning" element={<AdaptiveLearning />} />
                <Route path="ai-threat-detection/pattern-recognition" element={<PatternRecognition />} />
                <Route path="ai-threat-detection/data-analysis" element={<DataAnalysis />} />
                <Route path="ai-threat-detection/automated-response" element={<AutomatedResponse />} />
                <Route path="ai-threat-detection/predictive-analytics" element={<PredictiveAnalytics />} />
                <Route path="ai-threat-detection/false-positive-reduction" element={<FalsePositiveReduction />} />
                <Route path="consulting/iso27001" element={<ISO27001 />} />
                <Route path="consulting/isms-p" element={<ISMSP />} />
                <Route path="consulting/isms-p" element={<ISMSP />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="login" element={<AdminLogin />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="content" element={<ContentManager />} />
                <Route index element={<AdminDashboard />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
