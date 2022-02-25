import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
const BASE_URL = "https://image.tmdb.org/t/p/original";

const API_KEY = process.env.API_KEY;
const MovieDetail = ({ result }) => {
    console.log(result)
  return (
      <div className="p-1 flex flex-col items-center space-x-1 mx-auto">
          <h2 className="text-3xl  text-white transition-all duration-500 ease-in-out group-hover:font-bold">{result.title || result.original_title}</h2>
          <h1 className="text-xl mt-1 text-white transition-all duration-500 ease-in-out group-hover:font-bold">{result.tagline}</h1>
          
          <div className="mb-0">
            <Image className='rounded-xl'objectFit="contain" height={500} width={500} src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} />
          </div>
          <div className="flex flex-row space-x-2 text-xl">{
              result.genres && result.genres.map(genre => (
                <div key={genre.id}>{genre.name}</div>
              ))
          }</div>
          <div className="mt-2 flex flex-col items-center">
                <p className="text-center max-w-md">{result.overview}</p>
                <p className="text-center mt-2">{result.budget && <p>Budget @ {result.budget}$</p>}</p>
                <p className="flex  justify-center items-center mt-2">
                  {result.media_type && `${result.media_type} .`}{" "}{result.release_date || result.first_air_date} . {" "}
                <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
              </p>
              {result.homepage && <Link href={result.homepage} className='border-2'>Read More</Link> }
          </div>    
    </div>
  )
}

export default MovieDetail

export const getServerSideProps = async (ctx) =>{
  const movie_id = ctx.params.id;
  const media_type=ctx.params.media_type
  
    try {
    const res = await fetch(`https://api.themoviedb.org/3/${media_type}/${movie_id}?api_key=${API_KEY}&language=en-US`); 
        const data = await res.json();
    return {
    props: {
      result: data,
    }
  }
    } catch (error) {
    console.log(error);
    return {
      notFound: true,
    }
  }

}