import React, { useState, useRef, useEffect } from 'react'
import { FloatingMenuList, getGif } from './asset.js'

function App() {

  const [floatingMenu, setFloatingMenu] = useState(FloatingMenuList)
  const [gifList, setGifList] = useState([])
  const [catagory, setCatagory] = useState("cat")
  const inputRef = useRef()

  useEffect(() => {
    search(catagory)
  }, [])

  useEffect(() => {
    search(catagory)
  }, [catagory])

  async function search(value) {

    console.log("result for ", value)
    var array = await getGif(value)
    var tempArray = []
    var finalArray = []

    array.forEach(element => {
      if (tempArray.length === 16) {
        finalArray.push(tempArray)
        tempArray = []
      }
      tempArray.push(element)
    })
    console.log(finalArray)
    setGifList(finalArray)
  }

  return (
    <div className="App">

      <div className="heading flex justify-center items-center bg-slate-100 p-5 shadow-sm">
        <h1 className="title text-5xl">Gif-Zone</h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-8 w-full md:w-4/5 xl:w-4/5">
          <div className="search xl:px-10">
            <div className="flex items-center border border-gray-500 rounded-full px-2">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

              <input
                placeholder="Search gif ..."
                className="p-2 flex-1 text-md outline-none"
                ref={inputRef}
              >
              </input>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 cursor-pointer" onClick={() => { setCatagory(inputRef.current.value) }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>

            </div>
          </div>

          <div className="floating-menu flex justify-around p-2 py-6">
            {
              floatingMenu.map(menu => <FloatingMenu action={() => setCatagory(menu.name)} name={menu.name} background={menu.background} />)
            }
          </div>


          <div className="flex justify-center flex-wrap">
            <div className="m-1">
              {
                gifList[0]?.map(gif => <img src={gif.media[0].gif.url} className="w-72 rounded-md m-2 md:w-60 xl:w-60"></img>)
              }
            </div>

            <div className="m-1">
              {
                gifList[1]?.map(gif => <img src={gif.media[0].gif.url} className="w-72 rounded-md m-2 md:w-60 xl:w-60"></img>)
              }
            </div>
            <div className="m-1">
              {
                gifList[2]?.map(gif => <img src={gif.media[0].gif.url} className="w-72 rounded-md m-2 md:w-60 xl:w-60"></img>)
              }
            </div>
          </div>

        </div>
      </div >

    </div >
  )
}

function FloatingMenu({ name, background, action }) {
  var classname = `h-8 w-30 rounded-md flex justify-center items-center cursor-pointer m-1 ${background} md:h-10 xl:h-10`
  return (
    <div className={classname} onClick={action}>
      <p className="text-gray-100 text-sm md:font-bold xl:font-bold">{name}</p>
    </div>
  )
}

export default App



