import gymPNG from '/public/weight-gym-svgrepo-com.png'
const Header = () => {
  return (
    <header className="flex h-[100px] items-center justify-center gap-3 bg-red-400 p-5 text-black">
      <div className="flex size-[50px] items-center justify-center">
        <img src={gymPNG.src} alt="" />
      </div>
      <h1 className="text-3xl">Grieder Periodização</h1>
    </header>
  )
}

export default Header
