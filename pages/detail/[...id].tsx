import { useState } from 'react';
import ImageCanvas from '../../components/ImageCanvas';
import { InferGetServerSidePropsType } from 'next';
import Seo from '../../components/Seo';
import useThrottle from '../../utils/utils';
import Nav from '../../components/Nav';

function DetailPage({
  id,
  listData,
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

type Params = {
  params: {
    id: [string];
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const { id } = params;
  const listData = await (await fetch(`http://localhost:3000/api/list`)).json();
  console.log(listData);
  return {
    props: {
      id,
      listData,
    },
  };
};
