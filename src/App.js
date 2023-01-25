import React, { useState, useRef, useEffect } from 'react'
import { FloatingMenuList, getGif } from './asset.js'

function App() {

  const [floatingMenu, setFloatingMenu] = useState(FloatingMenuList)

  const [catagory, setCatagory] = useState("Programming")

  const [gifList, setGifList] = useState([])

  useEffect(async () => {
    setGifList(await getGif(catagory))
  }, [])

  useEffect(() => {
    console.log(gifList)
  }, [gifList])



  return (
    <div className="App">

      <div className="heading flex justify-center items-center bg-slate-100 p-5 shadow-sm">
        <h1 className="title text-5xl">Gif-Zone</h1>
      </div>

      <div className="flex justify-center items-center">

        <div className="w-4/5">

          <div className="search">

            <div className="flex items-center border border-gray-500 rounded-full px-2">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

              <input
                placeholder="Search gif ..."
                className="p-2 flex-1 text-md outline-none"
              >
              </input>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>

            </div>

          </div>

          <div className="floating-menu flex justify-around p-4 py-0">
            {
              floatingMenu.map(menu => <FloatingMenu name={menu.name} background={menu.background} />)
            }
          </div>

          <div>
            {
              gifList.map(gif => <img src={gif.media[0].gif.url} className="w-60 m-2"></img>)
            }
          </div>

        </div>
      </div>

    </div>
  )
}

function FloatingMenu({ name, background }) {
  var classname = `h-10 rounded-md flex justify-center items-center cursor-pointer flex-1 m-1 ${background}`
  return (
    <div className={classname}>
      <p className="text-gray-100 font-bold">{name}</p>
    </div>
  )
}

export default App



