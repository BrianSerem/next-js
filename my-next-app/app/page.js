import Image from 'next/image'
import Link from 'next/link'
import { prisma } from './db'
import TodoItem from './components/TodoItem'

export default async function   Home  () {

  await prisma.todo.create({
    data : {
      title: 'Take my Reina out to the park',
      completed: false
    }
  })

  // await prisma.todo.deleteMany()

  const todos = await prisma.todo.findMany()
  return (
    <>
       <header className='flex justify-between items-center mb-4'>
          <hi className='text-2x1'>  Todos App</hi>
          <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href='/new'> New</Link>
       </header>

       <ul>
        {todos.map(todo=> (
          <TodoItem key={todo.id} {...todo} />
        ))
        }
       </ul>
    </>
  )
}
