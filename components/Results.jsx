import Thumbnail from "./Thumbnail"


const Results = ({ results }) => {
    console.log(results)
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-3  xl:grid-cols-5 xl:mx-auto">
          {results.map(result => (
             <Thumbnail key={result.id} result={result}/>
          ))}
    </div>
  )
}

export default Results