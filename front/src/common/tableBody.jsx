import React, { Component } from 'react';
import _ from 'loadsh';
import Like from '../common/like';

class TableBody extends Component {
    
    renderCell = (item, column) => {
        return _.get(item, column.path);
    };

    render() { 
        const {data, columns, onLike, onDelete} = this.props;
        return (
            <tbody>
                 {data.map(item => 
                    <tr key={item._id}>
                        {columns.map(column => 
                            <td key={column.path}>
                                {
                                    this.renderCell(item, column)
                                }
                            </td>
                            )
                        }
                        <td key={"like"}>
                            <Like liked={item.liked} onClick={() => onLike(item)} />                        
                        </td>

                        <td key={"delete"}>
                            <button onClick={() => onDelete(item)} className="btn btn-danger btn-sm">Eliminar</button>                        
                        </td>
                    </tr>
                )}
             </tbody>
        );
    }
}   

 
export default TableBody;
