import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen bg-sky-900'>
        <div className='w-full py-10 flex justify-center items-center text-slate-300 text-l font-semibold'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tightest text-zinc-900/60'>Docs</h1>
    </div>
    </>
  )
}

export default Background