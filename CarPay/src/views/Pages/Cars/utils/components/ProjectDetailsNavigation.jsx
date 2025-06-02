import classNames from '@/utils/classNames'
import {
    TbFileInfo,
    TbChecklist,
    TbSettings,
    TbCalendarStats,
    TbPaperclip,
} from 'react-icons/tb'

const navigation = [
    { label: 'Basic Info', value: 'overview', icon: <TbFileInfo /> },
    { label: 'Specifications', value: 'tasks', icon: <TbChecklist /> },
    { label: 'Car Option', value: 'attachments', icon: <TbPaperclip /> },
    { label: 'Specifications', value: 'activity', icon: <TbCalendarStats /> },
    { label: 'Specifications', value: 'settings', icon: <TbSettings /> },
]

const ProjectDetailsNavigation = ({ selected, onChange }) => {
    const handleClick = (value) => {
        onChange(value)
    }

    return (
        <div className="w-[250px]">
            <div className="flex flex-col gap-2">
                {navigation.map((nav) => (
                    <div key={nav.value}>
                        <button
                            className={classNames(
                                'flex items-center gap-2 w-full px-3.5 py-2.5 rounded-full border-2 border-transparent font-semibold transition-colors dark:hover:text-gray-100 text-gray-900 dark:text-white',
                                selected === nav.value
                                    ? 'border-primary'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-800',
                            )}
                            onClick={() => handleClick(nav.value)}
                        >
                            <span className="text-xl">{nav.icon}</span>
                            <span>{nav.label}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetailsNavigation
