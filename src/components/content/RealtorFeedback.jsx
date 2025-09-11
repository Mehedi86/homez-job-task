import React from 'react'
import FeedbackCard from '../shared/FeedbackCad'
import Heading from '../shared/Heading'

export default function RealtorFeedback() {
    const data = [
        {
            id: 1,
            name: "Ali Tufan",
            occupation: "Marketing",
            review:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
            img: "/images/feedback/tufan.png",
        },
        {
            id: 2,
            name: "Albert Flores",
            occupation: "Designer",
            review:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            img: "/images/feedback/flores.png",
        },
        {
            id: 3,
            name: "Robert Fox",
            occupation: "Developer",
            review:
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
            img: "/images/feedback/robert.png",
        },
    ]

    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto py-20'>
                <Heading
                    title="People Love Living with Realtor"
                    subtitle="Aliquam lacinia diam quis lacus euismod"
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6 mx-4 lg:mx-0'>
                    {data.map(feedback => <FeedbackCard
                        key={feedback.id}
                        feedback={feedback}
                    />)}
                </div>
            </div>
        </div>

    )
}
