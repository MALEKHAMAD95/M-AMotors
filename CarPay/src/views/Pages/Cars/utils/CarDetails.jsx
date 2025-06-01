import { useState, lazy, Suspense } from 'react'
import Spinner from '@/components/ui/Spinner'
import ProjectDetailsHeader from './components/ProjectDetailsHeader'
import ProjectDetailsNavigation from './components/ProjectDetailsNavigation'
import useResponsive from '@/utils/hooks/useResponsive'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import CarBasicInfoPage from '../CarBasicInfoPage'
import CarSpecificationsPage from '../CarSpecificationsPage'

const defaultNavValue = 'overview'
const settingsNavValue = 'settings'

const ProjectDetailsOverview = lazy(
    () => import('./components/ProjectDetailsOverview'),
)
const ProjectDetailsTask = lazy(() => import('./components/ProjectDetailsTask'))
const ProjectDetailsAttachments = lazy(
    () => import('./components/ProjectDetailsAttachments'),
)
const ProjectDetailsActivity = lazy(
    () => import('./components/ProjectDetailsActivity'),
)
const ProjectDetailsSetting = lazy(
    () => import('./components/ProjectDetailsSetting'),
)

const ProjectDetails = () => {
    const { id } = useParams()
    const data = {}

    const { larger } = useResponsive()

    const [selectedNav, setSelectedNav] = useState(defaultNavValue)
    const [isContentEdit, setIsContentEdit] = useState(false)

    const handleEdit = (isEdit) => {
        setSelectedNav(settingsNavValue)
        setIsContentEdit(isEdit)
    }

    const handleNavigationChange = (val) => {
        if (val === settingsNavValue) {
            setIsContentEdit(true)
        } else {
            setIsContentEdit(false)
        }
        setSelectedNav(val)
    }

    return (
        <div>
            {
                <>
                    <ProjectDetailsHeader
                        title={'Add Car'}
                        isContentEdit={isContentEdit}
                        selected={selectedNav}
                        onEdit={handleEdit}
                        onChange={handleNavigationChange}
                    />
                    <div className="mt-6 flex gap-12">
                        {larger.xl && (
                            <ProjectDetailsNavigation
                                selected={selectedNav}
                                onChange={handleNavigationChange}
                            />
                        )}
                        <div className="w-full">
                            <Suspense
                                fallback={
                                    <div className="my-4 mx-auto text-center flex justify-center">
                                        <Spinner size={40} />
                                    </div>
                                }
                            >
                                {selectedNav === defaultNavValue && (
                                    <div> <CarBasicInfoPage/> </div>
                                )}
                                {selectedNav === 'tasks' && <div> <CarSpecificationsPage/> </div>}
                                {selectedNav === 'attachments' && <div> 5</div>}
                                {selectedNav === 'activity' && <div> 666</div>}
                                {selectedNav === 'settings' && (
                                    <div> 2323232</div>
                                )}
                            </Suspense>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProjectDetails
