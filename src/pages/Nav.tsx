import { Header } from './header'

function Nav() {
  return (
    <div>
      <nav className="z-index bg-white shadow-2xl w-56 fixed flex flex-col justify-between text-center p-4 top-0 left-0 bottom-0">
              <h1 className="text-xl font-extrabold">Bienvenue dans mon portfolio</h1>
            <Header />
            contacter-moi
            </nav>
    </div>
  )
}

export default Nav