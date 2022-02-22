import { useSession, signIn, signOut } from "next-auth/react"
import prisma from "../prisma/prisma"
import axios from "axios";
export default function Component() {


  const { data: session } = useSession()
  // if the session was detected?
  if (session) {

    // requesting from the postgress database for the user info via the next js routes
    axios.get('/api/prismaGet')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


  // reading the next-atuh cookie

    return (
      <>
        Signed in as {session?.user?.email} <br />
        Your name is {session?.user?.name} <br />

        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  // if the session was not detected?
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("Github")}>Sign in</button>
    </>
  )
  
}