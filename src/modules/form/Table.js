import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



class Tables extends React.Component {
  render() {
    const items = this.props.items;
    return (
        <TableContainer style={{
		  align:'center',
		  border:'1',
		  width:'50%',
        backgroundColor: 'rgb(135,206,235)'
      }}component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
		  <TableCell>Employee ID</TableCell>
		  <TableCell>Employee Name</TableCell>
		  <TableCell>Mail ID</TableCell>
		  <TableCell>Travelling from</TableCell>
		  <TableCell>Travelling to</TableCell>
		   </TableRow>
        </TableHead>
        <TableBody>
		{items.map(item => {
              return (
			   <TableRow>
			  <TableCell>{item.eid}</TableCell>
			  <TableCell>{item.ename}</TableCell>
			  <TableCell>{item.mail}</TableCell>
			  <TableCell>{item.loc1}</TableCell>
			  <TableCell>{item.loc2}</TableCell>
			  </TableRow>
			  );
            })}
			</TableBody>
      </Table>
    </TableContainer>
    );
  }
}
export default Tables;

