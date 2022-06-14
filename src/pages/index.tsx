import Auth from "../components/auth"

function Index() {
  return (
    <>トップページ</>
  )
}

Index.auth = function auth(page) {
  return <Auth>{page}</Auth>
}

export default Index