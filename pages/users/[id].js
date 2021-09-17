import React, { useEffect, useState } from "react";
import IconText from "../../Components/IconText";
import PageLayout from "../../Components/PageLayout";
import PageSection from "../../Components/PageSection";
import Post from "../../Components/Post";
import styles from "./Users.module.scss";

import axios from "axios";
import { capitalizeFirstLetter } from "../../Utils/utils";
import { Router } from "next/router";

export async function getStaticPaths() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  const users = response.data.map((user) => {
    return {
      params: {
        id: user.id.toString()
      }
    }
  })
  return {
    paths: users,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.id
  const userPromise = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  const postPromise = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

  return axios.all([userPromise, postPromise]).then(axios.spread((...responses) => {
    const userResponse = responses[0]
    const postResponse = responses[1]
    const user = userResponse.data
  
    const name = user.name

    const phone = user.phone.split(" ")[0]

    const company = user.company.bs
                    .split(" ")
                    .map(part => capitalizeFirstLetter(part))
                    .join(" • ")

    const address = user.address.street + " " + 
                    user.address.suite + " " + 
                    user.address.city + " " + 
                    user.address.zipcode.split("-")[0]
                    
    const posts = postResponse.data

    return {
      props: {
        user: {
          name: name,
          phone: phone,
          company: company,
          address: address,
          posts: posts
        }
      }
    }
  }))
}

const UsersPage = ({ user }) => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <PageLayout>
      {loading ? (
        <PageSection>
          <h1 className={styles.header}>Loading...</h1>
        </PageSection>
      ) : (
        <PageSection image='/image.jpg'>
          <h1 className={styles.header}>{user.name}</h1>
          <IconText icon="/phone.svg" text={user.phone}/>
          <IconText icon="/category.png" text={user.company}/>
          <IconText icon="/icon-24-shop.svg" text={user.address}/>
        </PageSection>
      )}
      
      <PageSection>
        <h1 className={styles.header}>{user.name.split(" ")[0] + "'s Posts"}</h1>
        <h3 className={styles.subheader}>{user.posts.length} POSTS</h3>
        {user.posts.map((post, id) => (<Post key={id} title={post.title} body={post.body}/>))}
      </PageSection>
    </PageLayout>
  );
}

export default UsersPage