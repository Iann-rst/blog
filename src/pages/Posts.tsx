import { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { Comment } from "../components/Comment";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PostDetails } from "../components/PostDetails";
import { api } from "../lib/api";
import { Post } from "./Home";


interface Author {
  name: string;
}

interface Comment {
  id: string;
  name: string;
  email: string;
  body: string;
}

export function Posts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState<Error | null>(null)


  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState({} as Post)
  const [author, setAuthor] = useState({} as Author);
  const [comments, setComments] = useState<Comment[]>([]);

  function handleGoBackHome() {
    navigate("/")
  }

  const detailsPost = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(`/posts/${id}`);
      const post: Post = response.data;
      setPost(post)

      const userResponse = await api.get(`/users/${post.userId}`)
      const user: Author = userResponse.data
      setAuthor(user);

      const commentsResponse = await api.get(`/posts/${id}/comments`);
      const comments: Comment[] = commentsResponse.data;
      setComments(comments);

    } catch (error) {
      if (error instanceof Error) {
        setError(error);
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    detailsPost();
  }, [])

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <Navigate to="/404" />
    )
  }

  return (
    <>
      <Header title="Publicação" />
      <main className="max-w-[1124px] w-full h-full mx-auto mt-8 px-8 mb-10">
        <BackButton back={handleGoBackHome} />
        <article className="flex flex-col gap-6 bg-[#202024] p-4 rounded-lg">
          <PostDetails
            title={post.title}
            author={author.name}
            content={post.body}
          />
          <strong className="text-primary md:text-xl text-center md:text-start mt-10">Comentários</strong>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              title={comment.name}
              body={comment.body}
              email={comment.email}
            />
          ))}
        </article>
      </main>
    </>
  )
}