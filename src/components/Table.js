import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends React.Component {
    render(){
        return(
            <div>
            <Table>
                <TableHeader />
                <TableBody />
            </Table>
            <hr />
            <Table>
                <TableHeader />
                <TableBody />
            </Table>
            </div>
            
        )
    }
}

export default Table;