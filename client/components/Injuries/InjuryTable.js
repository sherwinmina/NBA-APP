import React from 'react';

import './Injury.scss'

const InjuryTable = (props) => {
  // const {ID, lastName, firstName} = props.player
   const renderTable = props.player.map(item => (
     <tr key={item.player.ID}>
       <td>
         {item.player.FirstName}  {item.player.LastName}
       </td>
       <td>{item.team.Name}</td>
       <td>{item.injury}</td>
     </tr>
   ));

 return <div>
     <table>
       <tbody>
         <tr>
           <th>Name</th>
           <th>Team</th>
           <th>Injury</th>
         </tr>
         {renderTable}
       </tbody>
     </table>
   </div>;
};



export default InjuryTable;