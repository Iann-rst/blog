interface PostProps {
  title: string;
  body: string;
  postsDetails: () => void;
}

export function Post({ title, body, postsDetails }: PostProps) {


  return (
    <div
      className="group w-full max-w-full bg-[#202024] text-white rounded-lg mb-8 border border-[#666666] hover:cursor-pointer hover:shadow-md hover:shadow-[#3c3c42] transition-colors"
    >
      <button
        onClick={postsDetails}
        className='w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B37E] focus:ring-offset-4 focus:ring-offset-[#121214]'
      >
        <div className='flex flex-col'>
          <strong className='text-[#e1e1e1] text-lg text-center md:text-start normal-case group-hover:text-[#00B37E] transition-colors ease-in duration-[0.3s]'>
            {title}
          </strong>

          <p className='mt-4 text-[#8d8d8d] text-justify group-hover:text-[#00B37E] transition-colors ease-in duration-[0.3s]'>
            {body}
          </p>
        </div>
      </button>
    </div>
  )
}