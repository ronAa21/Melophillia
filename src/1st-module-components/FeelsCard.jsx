function FeelsCard() {
  return(
    <div className="flex items-center justify-center h-screen
    flex-col gap-5">
      <h1 className="text-white text-xl font-sans">WHAT ARE YOU FEELING RIGHT NOW?</h1>
      <input type="text" className="w-[70%] h-9 rounded-3xl p-5"/>
    </div>
  );
}

export default FeelsCard;