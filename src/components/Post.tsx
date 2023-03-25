interface PostProps {
  title: string;
  body: string;
  postsDetails: () => void;
}

export function Post({ title, body, postsDetails }: PostProps) {


  return (
    <div
      className="group w-full max-w-full bg-[#202024] text-primary rounded-lg mb-8 hover:cursor-pointer hover:shadow-md hover:shadow-[#3c3c42] transition-colors"
    >
      <button
        onClick={postsDetails}
        className='group w-full border border-[#24ac83] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background'
      >
        <div className='flex flex-col'>
          <strong className='text-lg text-center md:text-start normal-case group-hover:text-secondary group-focus:text-secondary transition-colors ease-in duration-[0.3s]'>
            {title}
          </strong>

          <p className='mt-4 text-justify group-hover:text-secondary group-focus:text-secondary transition-colors ease-in duration-[0.3s]'>
            {body}
          </p>
        </div>
      </button>
    </div>
  )
}