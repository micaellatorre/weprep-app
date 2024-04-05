import React, { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="calendly-inline-widget" data-url="https://calendly.com/micaellatorre/reunion-de-consulta?text_color=916834&primary_color=ffc701" style={{ minWidth: '320px', height: '700px' }} />
    );
};

export default CalendlyWidget;
