import imgLogo from '../assets/logo.svg';

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <header className='py-5 flex items-center justify-center bg-[#202024]'>
      <img className='h-8 w-auto mr-4' src={imgLogo} alt="Logotipo do blog" />
      <strong className='text-[#00B37E] text-base'>{title}</strong>
    </header>
  )
}