import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { Experience } from '@/content/experience';

interface ExperienceTimelineProps {
experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
return (
    <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />

        <div className="space-y-12">
        {experiences.map((experience, index) => (
            <div key={experience.id} className="relative pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <BriefcaseIcon className="h-4 w-4 text-black" />
            </div>

            <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <p className="text-lg text-gray-300">{experience.company}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 mt-2 md:mt-0">
                    <span className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {experience.startDate} - {experience.endDate}
                    </span>
                    <span className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    {experience.location}
                    </span>
                </div>
                </div>

                <ul className="list-disc pl-4 space-y-2 mb-4">
                {experience.description.map((desc, i) => (
                    <li key={i} className="text-gray-300">
                    {desc}
                    </li>
                ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                    <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
);
}