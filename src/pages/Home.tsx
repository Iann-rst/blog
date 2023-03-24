import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { Post } from "../components/Post";
import { Sidebar } from "../components/Sidebar";
import { api } from "../lib/api";


export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export function Home() {

  const [posts, setPosts] = useState<Post[]>([])
  const [endOfPostList, setEndOfPostList] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(2)

  const navigate = useNavigate();


  /* renderiza para a tela de post (Detalhes do post, usuário e comentários) */
  function handlePostDetails(id: string) {
    navigate(`/posts/${id}`);
  }

  async function handleFetchData() {
    try {
      setIsLoading(true);
      console.log(page)
      setPage(prevState => prevState + 1);
      const response = await api.get(`/posts?_page=${page}`)

      if (response.data.length === 0) {
        setEndOfPostList(true);
        return
      }

      const newPost: Post[] = response.data
      setPosts((post) => [...post, ...newPost])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get(`/posts?_page=1`)
        setPosts(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts()

    /*setPosts([{
      body: 'aaa',
      id: '1',
      title: 'bbb',
      userId: '2'
    }])*/
  }, [])


  if (!posts.length) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  return (
    <>
      <Header title="Front-end para uma API RESTFul" />
      <main className='max-w-6xl m-auto h-auto grid grid-cols-1 lg:grid-cols-wrapper my-8 px-8 gap-4 items-start'>
        <Sidebar />
        <div className='flex flex-col items-center'>

          {/* Listagem dos posts */}
          {
            posts.map(item => (
              <Post
                key={item.id}
                title={item.title}
                body={item.body}
                postsDetails={() => handlePostDetails(
                  item.id
                )}
              />
            ))
          }

          {/* Botão para carregar mais posts */}
          {
            !!!endOfPostList && (
              <button className="group p-2 rounded-md border-[1px] border-[#00b37e] hover:border-[#00875f] hover:cursor-pointer disabled:cursor-wait disabled:border-none focus:outline-none focus:ring-2 focus:ring-[#00B37E]"
                onClick={handleFetchData}
                disabled={isLoading}
              >
                {
                  isLoading ?
                    <Loading />
                    :
                    <strong
                      className="text-[#00B37E] group-hover:text-[#00875F]"
                    >
                      Carregar mais posts
                    </strong>
                }
              </button>
            )
          }
        </div>
      </main>
    </>
  )
}