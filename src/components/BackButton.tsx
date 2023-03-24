import { ArrowLeft } from "@phosphor-icons/react";


interface BackButtonProps {
  back: () => void;
}
export function BackButton({ back }: BackButtonProps) {
  return (
    <button
      title="Voltar para a página home"
      onClick={back}
      className="flex items-center border border-[#24ac83] justify-center rounded-md mb-2 p-2 md:text-2xl text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background transition-colors ease-in duration-[0.3s]"
    >
      <ArrowLeft weight="bold" />
      <strong>Início</strong>
    </button>
  )
}