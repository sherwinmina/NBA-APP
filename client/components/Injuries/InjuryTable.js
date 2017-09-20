import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const InjuryTable = (props) => {
  // const {ID, lastName, firstName} = props.player
  console.log(props.player.map(item => item.player.ID))
   const renderTable = props.player.map(item => (
     <TableRow key={item.player.ID}>
       <TableRowColumn>
         {item.player.FirstName}  {item.player.LastName}
       </TableRowColumn>
       <TableRowColumn>{item.team.Name}</TableRowColumn>
       <TableRowColumn>{item.injury}</TableRowColumn>
     </TableRow>
   ));

 return <div>
     <Table style={styles}>
       <TableHeader>
         <TableRow>
           <TableHeaderColumn>Name</TableHeaderColumn>
           <TableHeaderColumn>Team</TableHeaderColumn>
           <TableHeaderColumn>Injury</TableHeaderColumn>
         </TableRow>
       </TableHeader>
       <TableBody>{renderTable}</TableBody>
     </Table>
   </div>;
};

const styles ={
  width: '98%',
  margin: 'auto'
}

export default InjuryTable;