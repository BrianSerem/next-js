'use client'


export default function TodoItem ( { id, title, complete })  {

    const toggleTodo = (id, value) => {

    }

  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        // defaultChecked={complete}
        // onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  )
}

