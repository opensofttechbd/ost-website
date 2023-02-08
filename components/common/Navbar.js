import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const router = useRouter()
  const {pathname} = router
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About us",
      href: "/about-us",
    },
    {
      title: "Case Study",
      href: "/case-studies",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Service",
      href: "/services",
    },
  ]
  return (
    <nav>
      <header>
        <ul className='flex gap-x-2'>
          {links.map(link=> (
            <li key={link.href}>
              <Link className={pathname == link.href ? "border-b-2" : ""} href={link.href}>
                {link.title}
              </Link>
            </li>
            ))}
        </ul>
      </header>
    </nav>
  )
}

export default Navbar