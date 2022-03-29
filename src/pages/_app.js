import '@styles/globals.css'
import Layout from '@layouts/layout'
import { Provider } from 'react-redux'
import store from '@src/redux/store'
import withRedux from 'next-redux-wrapper'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  return { pageProps: pageProps }
}
const makeStore = () => store

export default withRedux(makeStore)(MyApp)
