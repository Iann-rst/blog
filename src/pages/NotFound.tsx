import { ArrowLeft } from '@phosphor-icons/react'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'

import notFound from '../assets/animations/404.json'

export function NotFound() {
  return (
    <div className="w-full h-screen m-auto flex flex-col items-center justify-center p-4">
      <h2 className="text-secondary font-bold font-serif text-2xl md:text-5xl text-center">
        Desculpe, mas não encontramos essa página.
      </h2>
      <Lottie animationData={notFound} loop={true} />
      <Link to="/"
        className='flex items-center gap-2 p-4 text-white border border-secondary rounded-3xl hover:bg-secondary hover:text-background transition-colors ease-in duration-[0.3s]'
      >
        <ArrowLeft weight='bold' />
        <strong>Voltar para a página inicial</strong>
      </Link>
    </div >
  )
}