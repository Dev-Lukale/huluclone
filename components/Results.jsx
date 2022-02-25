import Thumbnail from "./Thumbnail"


const Results = ({ results,category}) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-3  xl:grid-cols-5 xl:mx-auto">
          {results.map(result => (
             <Thumbnail key={result.id} category={category} result={result}/>
          ))}
    </div>
  )
}

export default Results