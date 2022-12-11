import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

type HomeProps = {
  listData: [];
};

function UserTable({ listData }: HomeProps) {
  interface listResults {
    [key: string]: string;
  }
  const router = useRouter();
  const onDetailPage = (author: string | number, img: []) => {
    const newSrc = img.slice(8);

    router.push(
      {
        pathname: `detail/${author}/${newSrc}`,
        query: {
          author,
        },
      },
      `detail/${author}/${newSrc}`
    );
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">profile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData?.map((list: listResults, index: number) => (
              <TableRow
                className="list-table"
                key={list.id}
                onClick={() => onDetailPage(list.author, list.download_url)}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell align="right">{list.author}</TableCell>
                <TableCell align="right">
                  <Image
                    src={list.download_url}
                    alt="author profile"
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </TableCell>{' '}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <style jsx>{`
        TableRow {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default UserTable;
