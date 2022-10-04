import HomeSection from '@/components/home/HomeSection'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Window from '@/components/Window'
import CodeBlock from '@/components/CodeBlock'
import { Sample } from '@/lib/samples'
import FlamaName from '@/components/FlamaName'

interface ModelsLifecycleProps {
  samples: Sample[]
}

export default function ModelsLifecycle({ samples }: ModelsLifecycleProps) {
  const selectedSample = samples[0]

  return (
    <HomeSection
      id="models-lifecycle"
      icon={<ArrowPathIcon />}
      title="Models Lifecycle"
      docRef="/docs/"
      content={
        <>
          <p>
            Loading ML models in a production application is a demanding and
            prone-to-error task, which also depends on the specific ML
            framework.
          </p>
          <br />
          <p>
            <FlamaName /> provides a clean solution to the problem via{' '}
            <b>Components</b>, which load models seamlessly.
          </p>
        </>
      }
    >
      <div className="ml-auto -mt-16 w-full max-w-3xl">
        <Window title={selectedSample.title}>
          <div>
            <CodeBlock
              code={selectedSample.code}
              language={selectedSample.language}
              lineNumbers={selectedSample.lineNumbers}
            />
          </div>
        </Window>
      </div>
    </HomeSection>
  )
}
