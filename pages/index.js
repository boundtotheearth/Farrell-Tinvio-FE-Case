import React from "react";
import IconText from "../Components/IconText";
import PageLayout from "../Components/PageLayout";
import PageSection from "../Components/PageSection";
import Post from "../Components/Post";
import styles from "./Home.module.scss"

import axios from "axios";

export async function getStaticProps() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  const users = response.data

  return {
    props: {
      users
    }
  }
}

const AllUsers = ({ users }) => {
  return (
    <PageLayout>
      <PageSection image='/image.jpg'>
        <h1 className={styles.header}>All Users</h1>
        {users.map((user, id) => {
          return (
              <PageSection key={id}>
                <a className={styles.clickable} href={`/users/${user.id}`}>
                  <h1 className={styles.header}>{user.name}</h1>
                  <IconText icon="/phone.svg" text={user.email}/>
                </a>
              </PageSection>
          )
        })}
      </PageSection>
    </PageLayout>
  );
}

export default AllUsers