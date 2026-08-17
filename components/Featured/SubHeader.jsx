import React from 'react'
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SERVICES = [
  {
    title: 'AI Automation',
    body:
      'Building automated workflows and AI agents with n8n and the Gemini API to handle real tasks end to end.',
  },
  {
    title: 'Python Development',
    body:
      'Writing practical, production-ready Python tools — from CLIs to small automation scripts.',
  },
  {
    title: 'Rapid Prototyping',
    body:
      'Using Google AI Studio, Claude, and Replit to move fast from idea to a working build.',
  },
  {
    title: 'Deployment',
    body:
      'Shipping projects with VS Code, GitHub, and Hostinger — from local dev to a live site.',
  },
]

const SubHeader = () => {
  return (
    <div className='relative md:absolute md:top-1/5 left-0 md:left-1/2 w-full md:-translate-x-1/2 md:mt-40 z-10 flex flex-col md:items-start items-center px-5 md:px-0'>
      <div className='w-full flex flex-col md:flex-row md:items-center gap-8 md:gap-10'>
        <div className='w-full md:w-1/2 text-base md:text-2xl flex flex-col gap-3 md:gap-4 leading-relaxed md:leading-snug text-center md:text-left'>
          <p>
            Shahariar Azim Aksad is a self-taught developer and AI automation builder based in Bangladesh, exploring where code, AI agents, and no-code tools meet.
          </p>
          <p>
            He works across Python, n8n, and the Gemini API to build practical tools and AI-powered systems — from small automations to standalone apps.
          </p>
        </div>

        <div className='w-full md:w-1/2 flex justify-end'>
  <div className='relative w-[90%] md:w-[95%] rounded-2xl translate-x-[5vw] md:translate-x-0'>
    <img
      src={`${BASE_PATH}/AboutPhoto.png`}
      alt="Shahariar Azim Aksad"
      className="block w-full h-auto object-contain"
    />
  </div>
</div>
      </div>
      <div className='about-inline-services w-full md:w-1/2 mt-8 md:mt-12 h-auto md:h-[36vh]'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>SERVICES</span>
        </div>
        <div className='about-inline-services__grid'>
          {SERVICES.map((service) => (
            <article key={service.title} className='about-inline-services__item'>
              <h4>{service.title}</h4>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
