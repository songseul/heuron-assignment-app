import Seo from '../components/Seo';
import styles from '../styles/Home.module.css';
import UserTable from '../components/UserTable';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Nav from '../components/Nav';

export default function Home({
  listData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Nav />
      <Seo title="home" />
      <div className={styles.container}>
        <UserTable listData={listData} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const listData = await (await fetch(`http://localhost:3000/api/list`)).json();

  return {
    props: {
      listData,
    },
  };
};
