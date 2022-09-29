import ErrorPage, { ErrorPageProps } from '@components/errorPage'
import { NextPage } from 'next'

const props: ErrorPageProps = {
  number: 404,
  title: 'You have found a secret place.',
  description:
    'Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.'
}

const Custom404: NextPage = () => <ErrorPage {...props} />

export default Custom404
