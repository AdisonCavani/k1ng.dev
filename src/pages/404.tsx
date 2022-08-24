import ErrorPage, { ErrorPageProps } from '@components/errorPage'
import { NextPage } from 'next'

const Custom404: NextPage = () => {
  const props: ErrorPageProps = {
    number: 404,
    title: 'You have found a secret place.',
    description:
      'Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.'
  }

  return (
    <ErrorPage
      number={props.number}
      title={props.title}
      description={props.description}
    />
  )
}

export default Custom404
