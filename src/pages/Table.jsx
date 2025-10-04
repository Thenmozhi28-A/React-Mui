import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function createData(orderId, customer, date, amount, status) {
  return { orderId, customer, date, amount, status };
}

const rows = [
  createData('ORD-5289', 'Michael Johnson', 'Apr 21, 2025', '$128.54', 'Delivered'),
  createData('ORD-5288', 'Sarah Williams', 'Apr 21, 2025', '$92.36', 'Processing'),
  createData('ORD-5287', 'David Miller', 'Apr 20, 2025', '$253.82', 'Shipped'),
  createData('ORD-5286', 'Jennifer Garcia', 'Apr 20, 2025', '$76.45', 'Delivered'),
  createData('ORD-5285', 'Robert Wilson', 'Apr 19, 2025', '$189.99', 'Processing'),
];

const statusColors = {
  Delivered: 'success',
  Processing: 'info',
  Shipped: 'default',
};

export default function RecentOrdersTable() {
  return (
    <TableContainer component={Paper} sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: "none" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Recent Orders
        </Typography>
        <Link href="#" underline="hover" sx={{ color: '#6366f1',fontSize:"12px" }}>
          View All Orders &gt;
        </Link>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="recent orders table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontSize:"12px"}}>ORDER ID</TableCell>
            <TableCell sx={{ fontSize:"12px"}}>CUSTOMER</TableCell>
            <TableCell sx={{ fontSize:"12px"}}>DATE</TableCell>
            <TableCell sx={{ fontSize:"12px"}}>AMOUNT</TableCell>
            <TableCell sx={{ fontSize:"12px"}}>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderId}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:nth-of-type(odd)': { backgroundColor: '#fafafa' }
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: '#6366f1' ,fontSize:"12px"}}>
                {row.orderId}
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={statusColors[row.status]}
                  size="small"
                  sx={{
                    backgroundColor:
                      row.status === 'Delivered' ? '#e6f7e6' :
                      row.status === 'Processing' ? '#e6f2ff' : '#f0f0f0',
                    color:
                      row.status === 'Delivered' ? '#2e7d32' :
                      row.status === 'Processing' ? '#1976d2' : '#555',
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
