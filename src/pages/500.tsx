import ErrorPage, { ErrorPageProps } from '@components/errorPage'
import { NextPage } from 'next'

const props: ErrorPageProps = {
  number: 500,
  title: 'Something bad just happened...',
  description:
    "Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page."
}

const Custom500: NextPage = () => <ErrorPage {...props} />

export default Custom500
