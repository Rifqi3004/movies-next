import { useRouter } from 'next/router'
import Link from 'next/link'
import Component from '../../../containers/Movie'

const Movie = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Component movieId={id} />
    </>
  )
}

export default Movie