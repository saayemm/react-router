import Link from "../link/Link"

export default function NavBar() {
    const routes = [
        {id: 1, path: '/', name: "home"},
        {id: 2, path: '/about', name: "about"},
        {id: 3, path: '/services', name: "services"},
        {id: 4, path: '/contact', name: "contact"},
        {id: 5, path: '/blog', name: "blog"}
    ]
  return (
    <nav>
        <ul className="md:flex gap-6">
        {
            routes.map( route=> <Link key={route.id} route={route}></Link> )
        }
        </ul>
    </nav>
  )
}
