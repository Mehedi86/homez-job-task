import React from 'react'
import FeedbackCard from '../shared/FeedbackCad'
import Heading from '../shared/Heading'
import { realtorFeedback } from '../../utils/UtilityData'

export default function RealtorFeedback() {

    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto py-20'>
                <Heading
                    title="People Love Living with Realtor"
                    subtitle="Aliquam lacinia diam quis lacus euismod"
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6 mx-4 lg:mx-0'>
                    {realtorFeedback.map(feedback => <FeedbackCard
                        key={feedback.id}
                        feedback={feedback}
                    />)}
                </div>
            </div>
        </div>
    )
}
