import { useSession } from "next-auth/client"
import Head from "next/head"
import { useRouter } from "next/router"

const withAuth = (AuthComponent, roles= []) => props=> {
  const [session, loading] = useSession()  
  const router = useRouter()
  if(loading){
    return null;
  }
  if(!session ) {
    router.push(`/login?referer=${encodeURIComponent(router.pathname)}`);
    return null;
  }

  if(roles.length !=0 && !roles.includes(session.user.role)){
    router.push(`/`);
    return null;
  }
  return (
    <AuthComponent {...props}/>
  )
}


export default withAuth
