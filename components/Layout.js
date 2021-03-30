import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"
import Image from 'next/image'

Router.onRouteChangeStart=url=>{
   
    NProgress.start();
}
Router.onRouteChangeComplete=()=>NProgress.done();

Router.onRouteChangeError=()=>NProgress.done();

const Layout=({children})=>(
    <div className="root">
      
        <Head>
            <title>BCU Network</title>
           
        </Head>
        <header>
    
        <Image
        src="/rrcbnlogo.png"
        alt="rrcbn logo"
        width={50}
        height={50}
        />
        
        BCU Broadcasting Network
        <Link href="/">Home</Link>
        <Link href="/videos">Videos</Link>
        <Link href="/team">Team</Link>
        <Link href="/news">News</Link>
        </header>
        {children}
        <footer>
        <div className="footer-content">
        <h3 className="desc">BODY OF CHRIST BROADCASTING NETWORK INTERNATIONAL </h3>
        <p>U.S.A.  Headquarters P.O. Box 625 Banning Ca. 92220</p>
        <p>Email:<a href="mailto:rrcbn11@gmail.com">rrcbn11@gmail.com</a></p>
        <p>Office 1 951 385 9731</p>
        <p>Website: <a href="1bcu.org |rrcbn.org">1bcu.org |rrcbn.org</a></p>

        <p>&copy; {new Date().getFullYear()}</p>
        </div>
        </footer>

        <style jsx>
        {`
       .root{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
       }
       header{
          
           width:100%;
           display:flex;
           justify-content:space-around;
           padding:1em;
           font-size:1.2rem;
           background:gold;
       }
       header a{
           color:darkgrey;
           text-decoration:none;
       }
       header a:hover{
           font-weight:bold;
           color:lightgrey
       }
       footer{
        width:100%;
           background:orange;
           padding: 1em;
           margin-top: 1em
           
       }
       .footer-content{
           text-align:center;
       }
       
       
        `}
        </style>
        <style global jsx>
            {`
            body{
                margin:0;
                font-size:110%;
                background:#f0f0f0
            }
            `}
        </style>
    </div>
)
export default Layout;