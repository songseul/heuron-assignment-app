import Seo from '../components/Seo';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from 'next';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

export default function Home({
  listData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(listData);

  return (
    <div className={styles.container}>
      <Seo title="home" />

      {listData?.map((list, index) => {
        return (
          <div key={list.id}>
            <h3>{list.author}</h3>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const listData = await (await fetch(`http://localhost:3001/api/list`)).json();
  return {
    props: {
      listData,
    },
  };
}
