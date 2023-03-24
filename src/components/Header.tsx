import imgLogo from '../assets/logo.svg';

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <header className='py-5 flex items-center justify-center bg-[#202024]'>
      <img width="20" height="20" className='aspect-auto mr-4' src={imgLogo} alt="Logotipo do blog" />
      <strong className='text-primary text-base'>{title}</strong>
    </header>
  )
}