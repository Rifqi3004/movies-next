import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            {/* <PersistGate persistor={store.__persistor} loading={``}>   */}
              <Component {...pageProps} />
            {/* </PersistGate> */}
          </Provider>
        </Container>
      );
    }
  }
);