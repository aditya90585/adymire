import React from 'react'
import ToolsUsedContainer from '../../Common/ToolsUsedContainer'
import {
    // UI/UX Tools Icons
    Figma,
    Xd,
    Sketch,
    UIUXToolsIcons4,
    UIUXToolsIcons5,
    UIUXToolsIcons6,
    UIUXToolsIcons7
} from "@/assets"
import UIUX from "@/assets/icons/UIUX.webp";

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