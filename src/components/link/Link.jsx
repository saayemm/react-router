
export default function Link({route}) {
  return (
    <div>
        <li>
                <a href={route.path}>{route.name}</a>
        </li>
    </div>
  )
}
