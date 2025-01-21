// src/app/experience/page.tsx
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { experiences } from '@/content/experience';

export default function ExperiencePage() {
  return (
    <div>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
           <p className="text-xl text-terminal-text-light dark:text-terminal-text-light-dark">  {/* Terminal Text Color */}
            My journey through security and software engineering roles
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <ExperienceTimeline experiences={experiences} />
        </section>

         <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
               <div className="flex flex-wrap gap-2">
                {['Penetration Testing', 'SAST/DAST', 'Cloud Security', 'Zero Trust', 'Threat Modeling'].map((skill) => (
                 <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                   {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Python', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}