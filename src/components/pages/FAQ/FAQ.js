import React from 'react';
import './FAQ.scss';

const FAQ = () => {
    return (
        <div className="faq">
            <h1><span>F</span>requently<br /><span>A</span>sked<br /><span>Q</span>uestions</h1>
            <div className="question">
                <h3>How do I know if a briquetter is right for my company?</h3>
                <p>We analyze total chip production and chip quality/density
                along with hours a day to work to recommend unit size.</p>
            </div>
            <div className="question other">
                <h3>How do I calculate my chip density?</h3>
                <p>A cubic foot of representative chips weighed on an accurate 
                scale will allow Aspen to calculate density. Also send Aspen at 
                least a cubic yard of representative chips and we will test puck
                the chips and send a report regarding quality.</p>
            </div>
            <div className="question">
                <h3>Is lease to own an option?</h3>
                <p>Aspen does not provide Lease to Own services. However, Aspen 
                can provide long term term leasing/rentals or sell its equipment.</p>
            </div>
            <div className="question other">
                <h3>Who is responsible for the setup of the equipment?</h3>
                <p>One day of Setup/training is normally provided by Aspen. 
                Preparation for set up, including but not limited to finding 
                power source and site prep work, is in the hands of the Lessee.</p>
            </div>
            <div className="question">
                <h3>Who is responsible for hydraulic fluid?</h3>
                <p>Hydraulic fluid is provided by the Lessee. Aspen cannot ship 
                unit with fluid.</p>
            </div>
            <div className="question other">
                <h3>Who is responsible for damage to a rental?</h3>
                <p>The Lessee is responsible for any damage to the equipment 
                diuring the rental. To avoid damage and extra costs, it is important 
                to understand proper chip preparation and conditioning.</p>
            </div>
            <div className="question">
                <h3>Does Aspen provide repair services?</h3>
                <p>Aspen has repair technicians on staff to assist or be hired 
                to do repairs.</p>
            </div>
            <div className="question other">
                <h3>Why are briquettes more valuable than scrap aluminum chips?</h3>
                <p>Briquetting creates less surface area to which reduces 
                oxidation and minimizes slag. Therefore, briquettes can produce 
                better yields. Briquettes reduce volume making the transport and 
                handling of aluminum much easier.</p>
            </div>
            <div className="question">
                <h3>Can I get a sample of my chips briquetted?</h3>
                <p>Yes. By providing a cubic yard of aluminum chips to Aspen 
                Industrial Machines, we will your chips through our testing 
                process and return the reports. Upon request briquetted samples 
                will be returned as well.</p>
            </div>
            <div className="question other">
                <h3>How do I know if a briquetter is right for my company?</h3>
                <p>Economic payback. By leasing a briquetter, you are able to 
                benefit from all the savings, without all the capital 
                expenditures of purchasing a new machine. Often, the payback 
                occurs almost immediately and sometimes in as little as a few 
                months.</p>
                <p>Coolant Recovery. Scrap metal carries approximately 
                20–30% of its weight in coolant, which costs money to replenish. 
                Consequently, adding to the transportation cost of your scrap 
                metal. In addition to cost, there is a potential liability 
                associated with the shipment of coolant-laden chips.</p>
                <p>Scrap Accountability. Recycled briquetted material can provide 
                a more accurate accounting of quantity and true weight of scrap 
                metal.</p>
            </div>
        </div>
    );
}

export default FAQ;