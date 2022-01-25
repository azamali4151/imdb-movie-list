import TableBody from "./table-body.component";
import TableHeader from "./table-header.component";

const Table = ({items, columns}) => {
    console.log(columns)
  return (
    <>
      <table className="table">
        <TableHeader columns={columns}/>
        <TableBody items={items} columns={columns}/>
      </table>
    </>
  );
};

export default Table;
