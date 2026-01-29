import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProcessesHero from './ProcessesHero'
import ProcessContainer from './ProcessContainer'
import ProjectShowcaseTemplate from './ProjectShowcaseTemplate'
import ToolsUsedContainer from '../Common/ToolsUsedContainer'

import UIUXProjectSection from './UIUX/UIUXProjectSection'
import { processRawData } from './processRawData'
const ProcessPageLayout = () => {
    const [finalData, setFinalData] = useState()
    const { service } = useParams()
    useEffect(() => {
        setFinalData(processRawData[service])
    }, [service])
    if (!finalData) {
        return <div className='text-xl font-bold mt-40 text-center'>this service is not available</div>;
    }
    return (
        <div>
            <ProcessesHero heroData={finalData?.heroData} />
            <ProcessContainer processStepsData={finalData?.stepsData} />
            {/* <ProjectShowcaseTemplate /> */}
            <UIUXProjectSection />
            <ToolsUsedContainer title={finalData?.toolsUsedData?.title} toolsData={finalData?.toolsUsedData?.mainToolsData} />
        </div>
    )
}

export default ProcessPageLayout