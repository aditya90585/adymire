import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProcessesHero from './ProcessesHero'
import ProcessContainer from './ProcessContainer'
import ProjectShowcaseTemplate from './ProjectShowcaseTemplate'
import ToolsUsedContainer from '../Common/ToolsUsedContainer'
import { processRawData } from './processRawData'
import { AllProjectsData } from '../Common/Projects/AllProjectsData'

const ProcessPageLayout = () => {
    const [finalData, setFinalData] = useState()
    const [projects, setProjects] = useState([])
    const { service } = useParams()
    useEffect(() => {
        setFinalData(processRawData[service])
    }, [service])

    useEffect(() => {
        const filterProjects = AllProjectsData.filter((projects) =>{
          if ((projects.type == "appdevelopment") || (projects.type == "webdevelopment")) {
           return projects.type.slice(3) == service
        } else {
           return projects.type == service
        }
    }
    )

        setProjects(filterProjects)
    }, [service])

    if (!finalData) {
        return <div className='text-xl font-bold mt-40 text-center'>this service is not available</div>;
    }
    return (
        <div>
            <ProcessesHero heroData={finalData?.heroData} />
            <ProcessContainer processStepsData={finalData?.stepsData} />
            <ProjectShowcaseTemplate projects={projects} heading={finalData?.projectheading} />
            <ToolsUsedContainer title={finalData?.toolsUsedData?.title} toolsData={finalData?.toolsUsedData?.mainToolsData} />
        </div>
    )
}

export default ProcessPageLayout