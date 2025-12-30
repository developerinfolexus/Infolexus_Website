import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Specific Service Components
import MobileAppDevelopment from './services/MobileAppDevelopment';
import CustomWebApplication from './services/CustomWebApplication';
import EnterpriseSolutions from './services/EnterpriseSolutions';
import AIAndML from './services/AIAndML';
import UIUXDesign from './services/UIUXDesign';
import DataAnalytics from './services/DataAnalytics';
import InfrastructureAndCloud from './services/InfrastructureAndCloud';
import TestingAndQA from './services/TestingAndQA';
import WebDevelopment from './services/WebDevelopment';
import ITSupport from './services/ITSupport';
import CyberSecurity from './services/CyberSecurity';

const ServiceDetail = () => {
    const { id } = useParams();

    // Mapping of IDs to Components
    const ServiceComponents = {
        'ma-01': MobileAppDevelopment,
        'cw-02': CustomWebApplication,
        'es-03': EnterpriseSolutions,
        'ai-04': AIAndML,
        'ui-05': UIUXDesign,
        'da-06': DataAnalytics,
        'ic-07': InfrastructureAndCloud,
        'qa-08': TestingAndQA,
        'wd-09': WebDevelopment,
        'it-10': ITSupport,
        'security': CyberSecurity
    };

    const SpecificComponent = ServiceComponents[id];

    if (!SpecificComponent) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                    <p className="text-slate-500 mb-8">The requested service ID "{id}" does not exist.</p>
                    <Link to="/services" className="text-violet-600 hover:underline flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return <SpecificComponent />;
};

export default ServiceDetail;
