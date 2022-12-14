import { useState } from 'react';
import ImageCanvas from '../../components/ImageCanvas';
import { InferGetServerSidePropsType } from 'next';
import Seo from '../../components/Seo';
import useThrottle from '../../hooks/useThrottle';
import Nav from '../../components/Nav';

function DetailPage({
  listData,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [index, setIndex] = useState<number>(0);

  const handleWheel = () => {
    if (index >= 0 && index <= listData.length - 1) {
      setIndex(index + 1);
    }
    if (index >= listData.length - 1) {
      console.log('over30', index);
      setIndex(0);
    }
  };

  const scrollThrottle = useThrottle(handleWheel, 1000);

  if (error) {
    return alert(error + '서버를 확인해 주세요');
  }

  return (
    <div onWheel={scrollThrottle}>
      <Seo title={listData[index].author} />
      <Nav title={listData[index].author} />

      {listData[index] == null ? (
        <> loading...</>
      ) : (
        <ImageCanvas image={listData[index]} />
      )}

      <style jsx>{`
        .title {
          margin-top: 100px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default DetailPage;

export const getServerSideProps = async () => {
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
