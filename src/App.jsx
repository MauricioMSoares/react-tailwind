import { useState } from "react"
import Header from "./components/Header/Header"
import PetshopList from "./components/PetshopList/PetshopList"
import Form from "./components/Form/Form"

const App = () => {
  const [user, setUser] = useState()
  const hasUser = Boolean(user)
  return (
    <>
      <div className="h-screen">
        <Header user={user} />
        {
          hasUser && <PetshopList />
        }
        {
          hasUser || <Form onSubmit={setUser} />
        }
      </div>
    </>
  )
}

export default App