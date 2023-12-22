import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PortItem from "./PortItem";

export default function PortList({item}){

    const [items, setItems] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mhw-db.com/weapons');
            if (!response.ok){
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setItems(actualData)
        }
        getData()
    }, []);

    let storylineList = [];
    let camtasiaList = [];
    let printList = [];
    let jobHelpersList = [];
    let videoList = [];
    let animationList = [];
    let vyondList = [];
    let motionGraphicsList = [];
    let gamificationList = [];
    let flashList = [];
    let webDevList = [];
    let illustratorList = [];
    let simulationList = [];
    let onboardingList = [];
    let afterEffectsList = [];
    let healthCareList = [];

    return(
        <div className="mb-3">
            <h1 className="mb-3">items</h1>
            <ul class="nav nav-pills mb-3">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/items">All</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/storyline" state={{storylineList:{storylineList}}}>Storyline</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/camtasia" state={{camtasiaList:{camtasiaList}}}>Camtasia</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/print" state={{printList:{printList}}}>Print</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/jobHelpers" state={{jobHelpersList:{jobHelpersList}}}>Job Helpers</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/video" state={{videoList:{videoList}}}>Video</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/animation" state={{animationList:{animationList}}}>animation</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/vyond" state={{vyondList:{vyondList}}}>vyond</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/motionGraphics" state={{motionGraphicsList:{motionGraphicsList}}}>Motion Graphics</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/gamification" state={{gamificationList:{gamificationList}}}>gamification</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/flash" state={{flashList:{flashList}}}>flash</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/webDev" state={{webDevList:{webDevList}}}>webDev</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/healthCare" state={{healthCareList:{healthCareList}}}>healthCare</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/simulation" state={{simulationList:{simulationList}}}>simulation</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/afterEffects" state={{afterEffectsList:{afterEffectsList}}}>afterEffects</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/illustrator" state={{illustratorList:{illustratorList}}}>illustrator</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/items/onboarding" state={{onboardingList:{onboardingList}}}>onboarding</Link>
                </li>
            </ul>
            <p>Not here. You're looking for my <a href={`https://www.roxorsoxor.com/port.html`} target="_blank">Portfolio</a>.</p>
        
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {items.map(item => {
                    return <PortItem item={item} key={item.id}/>
                })}
            </div>
            
        </div>

    );

}