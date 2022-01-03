import Navigation from "./navigation";
import Head from "next/head"

export default function Container(props) {
    return (
        <div>
            <Head>
                <title>Next.js</title>
                <link
                 rel="stylesheet"
                 href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"/>
              
            </Head>
            <Navigation/>
            <div className ="container p-4"> 
                {props.children}
            </div>
        </div>
    )
}
