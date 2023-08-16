
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from './db'
import TodoItem from './components/TodoItem'
import { redirect } from 'next/navigation'


export default async function   Home  () {

  // await prisma.todo.create({
  //   data : {
  //     title: 'Take my Reina out to the park',
  //     completed: false
  //   }
  // })

  // await prisma.todo.deleteMany()

  async function toggleTodo (id , complete) {
    'use server'
    await prisma.todo.update({
      where : {
        id: id
      }, data : {
        complete
      }
    })

  }

  const  onDelete =  async (id) => {
      'use server'
      console.log(id)
      await prisma.todo.delete({
        where: {
          id: id
        }
      })
    }


  const todos = await prisma.todo.findMany()

  return (
    <>
       <header className='flex justify-between items-center mb-4'>
          <hi className='text-2x1'>  Todos App</hi>
          <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href='/new'> New</Link>
       </header>

       <ul>
        {todos.map(todo=> (
          <TodoItem key={todo.id} {...todo} toggleTodo = {toggleTodo} onDelete={onDelete}/>
        ))
        }
       </ul>
    </>
  )
}
