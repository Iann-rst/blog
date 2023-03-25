
export function Sidebar() {
  return (
    <aside className='w-full bg-[#202024] rounded-lg overflow-hidden '>
      <img className='w-full h-[70px] object-cover' src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
      <div className='flex flex-col justify-center items-center p-4 mt-4 gap-2'>
        <strong className="text-primary">Iann Rodrigues</strong>
        <span className='text-sm text-primary text-center'>Criação de um site para uma API RESTFul</span>
        <span className='text-xs text-primary font-bold text-center'>Listagem de posts e comentários</span>
      </div>
    </aside>
  )
}