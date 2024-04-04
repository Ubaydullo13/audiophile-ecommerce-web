import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({children}) {
  return (
    <>
    <Header></Header>
    <main className="main">{children}</main>
    <Footer></Footer>
    </>
  )
}

export default Layout