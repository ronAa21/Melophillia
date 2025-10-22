// This jsx file needs to be on the separate from the app.jsx

function MoodPlaylist() {

  const music = [1,2,3,4,5,6,7,8,9];

  return(
    <div className="flex justify-center flex-col gap-10 m-5">
      <div className="flex justify-center">
        <input type="text" className="w-10/12 h-10 rounded-3xl px-2"/>
      </div>

      {/* This is just a mock, will make this into dyanamic, this friday */}
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl text-white">Your Preferred Playlist</h1>
        <hr className="bg-black h-2"/>
        <div className="flex gap-7 justify-between m-4">
          {music.map((m) => (
            <div className="bg-white p-10" key={m}>
              {m}
            </div>
          ))}
        </div>
        <hr className="bg-black h-2"/>
      </div>

      {/* This is just a mock, will make this into dyanamic, this friday */}
      <div className="flex flex-col gap-5 my-20">
        <h1 className="text-2xl text-white">Based on your preference</h1>
        <hr className="bg-black h-2"/>
        <div className="flex gap-7 justify-between m-4">
          {music.map((m) => (
            <div className="bg-white p-10" key={m}>
              {m}
            </div>
          ))}
        </div>
        <hr className="bg-black h-2"/>
      </div>
    </div>
  )
}

export default MoodPlaylist