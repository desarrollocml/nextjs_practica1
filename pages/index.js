import Container from "../components/Container"
import Head from "next/head"
import fetch from "isomorphic-unfetch"
export default function Home(props) {
  console.log(props)
  return (
    <Container>
      <Head>
        <title>Next.js - Home</title>
      </Head>
      <h1>Index </h1>
    </Container>
  )
}
Home.getInitialProps = async (ctx)=>{
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  console.log(resJSON.data);
   return {
    users: resJSON.data,
  }; 
};