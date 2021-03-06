import React, {Component} from 'react';
import Like from '../common/like';
import TableHeader from '../common/tableHeader'
import TableBody from '../common/tableBody'

class MoviesTable extends Component {

    columns = [
        {path: 'title', label: 'Title' },
        {path: 'genre.name', label: 'Genre' },
        {path: 'numberInStock', label: 'Stock' },
        {path: 'dailyRentalRate', label: 'Rate' }
    ]
    render() { 
        const { movies, sortColumn, onDelete, onLike, onSort } = this.props;

        return (
            <table className="table">
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                 <TableBody data={movies} columns={this.columns} onLike={onLike} onDelete={onDelete} />
            </table>
        )
    }
    
}
 
export default MoviesTable;