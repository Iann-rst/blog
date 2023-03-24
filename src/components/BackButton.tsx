import { ArrowLeft } from "@phosphor-icons/react";


interface BackButtonProps {
  back: () => void;
}
export function BackButton({ back }: BackButtonProps) {
  return (
    <button
      title="Voltar para a página home"
      onClick={back}
      className="flex items-center p-1 rounded-md justify-center mb-3 md:text-2xl text-[#00B37E] hover:text-[#00875F] transition-colors ease-in duration-[0.3s] focus:outline-none focus:ring-2 focus:ring-[#00B37E]"
    >
      <ArrowLeft weight="bold" />
      <strong>Início</strong>
    </button>
  )
}