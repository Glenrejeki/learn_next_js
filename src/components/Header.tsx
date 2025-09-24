import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <div>
      <header className="header">
          <nav>
            <div className="logo"><Link href="/"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHZlVVA8PA5sycv4fmA5Xo6xwJa06pSI_oA&s" width={100} height = {100} alt="logo del" /></Link></div>
            <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>
          </nav>

        </header>
    </div>
  )
}

export default Header
