import React from 'react'
import ToolsUsedContainer from '../../Common/ToolsUsedContainer'
import UIUXToolsIcons4 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons4.svg'
import UIUXToolsIcons5 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons5.svg'
import UIUXToolsIcons6 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons6.svg'
import UIUXToolsIcons7 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons7.svg'

import UIUX from "@/assets/icons/UIUX.webp";
import Figma from '@/assets/icons/UIUXToolsIcons/Figma.svg'
import Xd from '@/assets/icons/UIUXToolsIcons/Xd.svg'
import Sketch from '@/assets/icons/UIUXToolsIcons/Sketch.svg'

const toolsData = [
    {
        title: "UI & UX",
        subtitle: "Design",
        icon: UIUX,
        tools: [
            { name: "Figma", icon: Figma, percentage: "100%" },
            { name: "Adobe XD", icon: Xd, percentage: "100%" },
            { name: "Sketch", icon: Sketch, percentage: "60%" },
            { name: "Balsamiq", icon: UIUXToolsIcons4, percentage: "100%" },
            { name: "UX Research", icon: UIUXToolsIcons5, percentage: "100%" },
            { name: "Visily", icon: UIUXToolsIcons6, percentage: "100%" },
            { name: "Marvel", icon: UIUXToolsIcons7, percentage: "100%" },
        ],
    },
];

const UIUXToolsUsed = () => {
    return (
        <ToolsUsedContainer title="Tools We Used for UI & UX" toolsData={toolsData} />
    )
}

export default UIUXToolsUsed