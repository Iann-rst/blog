interface Props {
  title: string;
  body: string;
  email: string;
}


export function Comment({ title, body, email }: Props) {
  return (
    <div className="flex w-full h-auto flex-col justify-start gap-4 bg-[#323238] p-4 rounded-md last:mb-0 text-center md:text-start border border-secondary">
      <div className="flex flex-col gap-4">
        <h2 className="text-primary font-bold text-xl md:text-2xl">{title}</h2>
        <p className="text-primary md:text-xl ">{body}</p>
      </div>

      <footer className="mt-2">
        <strong className="text-xs md:text-sm text-[#8d8d8d]">{email}</strong>
      </footer>
    </div>
  )
}