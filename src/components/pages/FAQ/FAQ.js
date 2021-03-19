import React from 'react';
import './FAQ.scss';

const FAQ = () => {
    return (
        <div className="faq">
            <h1><span>F</span>requently<br /><span>A</span>sked<br /><span>Q</span>uestions</h1>
            <div className="question">
                <h3>What size briquetter will I need?</h3>
                <p>We analyze total chip production and chip quality/density
                along with hours a day to work to recommend unit size.</p>
            </div>
            <div className="question other">
                <h3>How do I calculate my chip quality and density?</h3>
                <p>A cubic foot of representative chips weighed on an accurate 
                scale will allow Aspen to calculate density. Also send Aspen at 
                least a cubic yard of representative chips and we will test puck
                the chips and send a report regarding quality.</p>
            </div>
            <div className="question">
                <h3>How do you calculate briquetter rental costs?</h3>
                <p>Monthly rental cost has a base price for each model which 
                will be reduced for longer term contracts.</p>
            </div>
            <div className="question other">
                <h3>Is lease to own an option?</h3>
                <p>Aspen can provide long term leasing or sell its equipment, 
                however we cannot provide "Lease To Own" services.</p>
            </div>
            <div className="question">
                <h3>What size briquetter will I need?</h3>
                <p>We analyze total chip production and chip quality/density
                along with hours a day to work to recommend unit size.</p>
            </div>
            <div className="question other">
                <h3>How do I calculate my chip quality and density?</h3>
                <p>A cubic foot of representative chips weighed on an accurate 
                scale will allow Aspen to calculate density. Also send Aspen at 
                least a cubic yard of representative chips and we will test puck
                the chips and send a report regarding quality.</p>
            </div>
            <div className="question">
                <h3>How do you calculate briquetter rental costs?</h3>
                <p>Monthly rental cost has a base price for each model which 
                will be reduced for longer term contracts.</p>
            </div>
            <div className="question other">
                <h3>Is lease to own an option?</h3>
                <p>Aspen can provide long term leasing or sell its equipment, 
                however we cannot provide "Lease To Own" services.</p>
            </div>
        </div>
    );
}

export default FAQ;