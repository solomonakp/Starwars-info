import Header from './Header'

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <main id="main">{children}</main>
    </>
  )
}

export default Layout
