import * as React from "react";
import { listUser } from "@/app/service/service";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePaginationDemo from "@/app/component/pagination/page";

interface TableEmployeeProps {
  searchQuery: string;
}

interface Column {
  id: "stt" | "email" | "first_name" | "last_name" | "Action";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "stt", label: "STT", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "first_name", label: "First Name", minWidth: 170, align: "center" },
  { id: "last_name", label: "Last Name", minWidth: 170, align: "center" },
  { id: "Action", label: "Action", minWidth: 170, align: "center" },
];

interface Data {
  email: string;
  first_name: string;
  last_name: string;
  Action: any;
}

const TableEmployee: React.FC<TableEmployeeProps> = ({ searchQuery }) => {
  const [listUsers, setListUsers] = React.useState<Data[]>([]);
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getAllUsers = React.useCallback(
    async (page: number, rowsPerPage: number) => {
      let res = await listUser(page);
      console.log(">>>res: ", res);

      if (res && res.data) {
        setListUsers(res.data);
        setTotalUsers(res.total);
      }
    },
    []
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    getAllUsers(newPage + 1, rowsPerPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = +event.target.value;
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    getAllUsers(1, newRowsPerPage);
  };
  React.useEffect(() => {
    getAllUsers(1, rowsPerPage);
  }, [getAllUsers, rowsPerPage]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listUsers.length > 0 ? (
              listUsers.map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePaginationDemo
        totalCount={totalUsers}
        currentPage={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableEmployee;
