import Image from "next/image"
import HeaderItem from "./HeaderItem"

import {
    BadgeCheckIcon,CollectionIcon,FilmIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon,
} from "@heroicons/react/outline"
import Link from "next/link"
const Header = () => {
  return (
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
          <div className="flex flex-grow justify-evenly max-w-2xl">
              
              <HeaderItem e='/' title='HOME' Icon={HomeIcon} />
              {/* <HeaderItem href='/trending' title='UPCOMING' Icon={LightningBoltIcon} /> */}
              <HeaderItem e='/movies' title='MOVIES' Icon={FilmIcon} />
              <HeaderItem e='/series' title='SERIES' Icon={CollectionIcon} />
              <HeaderItem  e='/'title='SEARCH' Icon={SearchIcon} />
              <HeaderItem  e='/'title='ACCOUNT' Icon={UserIcon}/>
          </div>
          <Link href='/' className='' passHref>
              <Image  className="object-contain p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" src="https://links.papareact.com/ua6" width={200} height={100}/>
          </Link>
      </header>
  )
}

export default Header