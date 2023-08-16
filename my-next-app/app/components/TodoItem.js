'use client'

import { FaTimes } from 'react-icons/fa'

export default async function TodoItem ( { id, title, complete, toggleTodo, onDelete })  {

  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      < FaTimes  style = {deleteStyle } onClick={() => onDelete(id)}/>
    </li>
  )
}

const deleteStyle = {
  color: 'yellow',
  cursor: 'pointer',
  align: 'right'

}