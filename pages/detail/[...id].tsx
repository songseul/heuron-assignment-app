import ImageCanvas from '../../components/ImageCanvas';
import { InferGetServerSidePropsType } from 'next';
import Seo from '../../components/Seo';

function detailPage({
  id,
  listData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(id);
  const srcArr = id.slice(1);
  const detailSrc = srcArr.join('/');
  const [author] = id || [];
  console.log(author);
  console.log(listData);

  console.log(detailSrc);

  return (
    <div>
      <Seo title={author} />
      <h2 className="title">{author}</h2>
      <ImageCanvas image={detailSrc} />
      <style jsx>{`
        .title {
          margin-top: 100px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default detailPage;

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
