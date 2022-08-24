import ErrorPage, { ErrorPageProps } from '@components/errorPage'
import { NextPage } from 'next'

const Custom500: NextPage = () => {
  const props: ErrorPageProps = {
    number: 500,
    title: 'Something bad just happened...',
    description:
      "Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page."
  }

  return (
    <ErrorPage
      number={props.number}
      title={props.title}
      description={props.description}
    />
  )
}

export default Custom500
