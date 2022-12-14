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
import { HomeProps } from '../models/Table';
import Loading from './Loading';

function UserTable({ listData }: HomeProps) {
  interface listResults {
    [key: string]: string;
  }
  const router = useRouter();
  const onDetailPage = (author: string | number) => {
    router.push(
      {
        pathname: `detail/${author}`,
        query: {
          author,
        },
      },
      `detail/${author}`
    );
  };
  if (!listData) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="table-layout">
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
                onClick={() => onDetailPage(list.author)}
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
                    className="image-list"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <style jsx>{`
        .table-layout {
          margin-top: 50px;
        }
        .image-list {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default UserTable;
