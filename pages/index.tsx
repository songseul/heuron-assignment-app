import Seo from '../components/Seo';
import styles from '../styles/Home.module.css';
import UserTable from '../components/UserTable';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Nav from '../components/Nav';
import Loading from '../components/Loading';

export default function Home({
  listData,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (error) {
    return alert(error + '에러를 확인하세요');
  }
  return (
    <>
      <Nav />
      <Seo title="home" />
      <div className={styles.container}>
        {listData ? <UserTable listData={listData} /> : <Loading />}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const listData = await (
      await fetch(`http://localhost:3000/api/list`)
    ).json();

    return {
      props: {
        listData,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};
