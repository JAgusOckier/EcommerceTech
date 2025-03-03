import { routes } from '@/routes/routes'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center flex items-center flex-col my-4'>
      <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?t=st=1740711368~exp=1740714968~hmac=15543fa87ca882c4ad7c0d2e71337080ac47e60c196d7e60b069996133fddda6&w=900" alt="not found foto"
      className='w-96 h-96 rounded-full' />
      <h2>Pagina no encontrada</h2>
      <p>Presiona el siguiente link para volver a Home</p>
      <Link className='text-blue-400' href={routes.home}>Home</Link>
    </div>
  )
}