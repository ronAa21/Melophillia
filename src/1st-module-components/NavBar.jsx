import tempPfp from '../images/lug.jpg'

function NavBar() {
  return(
    <div className="bg-[#343333] flex justify-between p-3">
      <div></div>
      <img src={tempPfp} alt="pfp" className='w-11 rounded-3xl'/>
    </div>
  )
}

export default NavBar;