
interface Props {
  title: string;
  author: string;
  content: string;
}

export function PostDetails({ title, author, content }: Props) {
  return (
    <>
      <header className="flex flex-col text-center">
        <h2 title="Titulo da publicação" className="text-primary font-bold text-4xl md:text-7xl">
          {title}
        </h2>

        <span title="Autor" className="text-[#8d8d8d] text-xs md:text-base mt-2">
          <em>{author}</em>
        </span>
      </header>
      <p className="text-primary text-center text-base md:text-xl mb-2">
        {content}
      </p>
    </>
  )
}