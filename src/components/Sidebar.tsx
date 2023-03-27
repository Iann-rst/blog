
import imgSidebar from '../assets/image_sidebar.jpg'

export function Sidebar() {
  return (
    <aside className='w-full bg-[#202024] rounded-lg overflow-hidden '>
      <img className='w-full h-[70px] object-cover' src={imgSidebar} alt="" />
      <div className='flex flex-col text-center text-primary justify-center items-center p-4 mt-4 gap-2'>
        <strong>Iann Rodrigues</strong>
        <span className='text-sm'>Criação de um site para uma API RESTFul</span>
        <span className='text-xs font-bold'>Listagem de posts e comentários</span>
      </div>
    </aside>
  )
}