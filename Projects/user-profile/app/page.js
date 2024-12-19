import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Navbar from "@/component/Navbar";
import UsersList from "@/component/UsersList";

export default async function Home({users}){
  console.log(users);
  
  return(
    <div>
    <Head>
      <title>User Profile</title>
      <meta name="keywords" content="user profile, profile details"/>
      <meta name="description" content="Hello Team Apex This is an User Profile Applicatiion"/>
    </Head>
    <Navbar/>
          <div className={styles.container}>
          <h1 className={styles.title}>Users Profile's <a href="/" >Application</a></h1>
    </div>
    
      <UsersList users={users}/>
    </div>
    
  )
}


