export const FloatingMenuList = [
    { name: "Code", background: "bg-gradient-to-r from-sky-500 to-indigo-700 w-40" },
    { name: "Food", background: "bg-gradient-to-r from-rose-500 to-pink-400 w-40" },
    { name: "Game", background: "bg-gradient-to-r from-red-400 to-orange-400 w-40" },
    { name: "Meme", background: "bg-gradient-to-r from-pink-400 to-blue-400 w-40" },
    { name: "Anime", background: "bg-gradient-to-r from-sky-500 to-violet-400 w-40" },
]

const API_KEY = "LIVDSRZULELA"

export async function getGif(search) {

    var url = `https://g.tenor.com/v1/search?q=${search}&key=${API_KEY}&limit=50`

    var gif = []

    await fetch(url)
        .then(response => response.json())
        .then(data => { gif = [...data.results] })

    return gif
}