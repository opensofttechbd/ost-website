import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const router = useRouter()
  const {pathname} = router
  const links = [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
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