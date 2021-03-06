import { Icon } from '@iconify/react'
import locationIcon from "@iconify/icons-mdi/pine-tree-fire";

const WildfireMarker = ({ onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="Wildfire-icon" />
        </div>
    )
}

export default WildfireMarker

