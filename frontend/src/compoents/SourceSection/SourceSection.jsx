import React from "react";
import SourceItem from "../SourceItem/SourceItem";
import "./style.css";
import hoenstAI from "../../assets/honestAI.png"
import amnesty from '../../assets/amnesty.jpeg'
import apple from "../../assets/apple.png"
function SourceSection({
    className,
}) {
    return (
        <div className={`sourcesection ${className}`}>
            <div className="frame-18">
                <img
                    className="layer-4"
                    alt="Layer"
                    src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/layer-1-16.svg"
                />
                <div className="text-wrapper-20">Sources</div>
            </div>
            <SourceItem
                className="sourceitem-instance"
                artileTitle="This is what we die for | Amnesty International's 2016 report"
                sourceImg={amnesty}
                sourceName="Amnesty"
                sourceIndex={1} />
            <SourceItem
                className="overlap-4"
                artileTitle="Apple's Supplier Responsibility Progress Reports and related announcements"
                sourceImg={apple}
                sourceName="Apple"
                sourceIndex={2} />
            <SourceItem
                 className="sourceitem-instance-2"
                artileTitle="Apple Supplier Responsibility Progress Report"
                sourceImg={apple}
                sourceName="Apple"
                sourceIndex={3} />
            <SourceItem
                className="sourceitem-instance-3"
                artileTitle="Apple Sustainability Report - Impakter Index"
                sourceImg="https://c.animaapp.com/JlseGSKu/img/monogramma-impakter-h-1-2@2x.png"
                sourceName="Impakter"
                sourceIndex={4} />
            
            
            
            
        </div>
    );
};

export default SourceSection;