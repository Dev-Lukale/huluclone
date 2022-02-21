import Link from "next/link"

const HeaderItem = ({Icon,title,e}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Link href={`${e}`} passHref>
        <Icon className="h-8 mb-1 group-hover:animate-bounce"></Icon>
      </Link>
      <Link href={`${e}`} passHref>
        <p className="opacity-0  group-hover:opacity-100 tracking-widest">{title}</p>
      </Link>


    </div>
  )
}

export default HeaderItem