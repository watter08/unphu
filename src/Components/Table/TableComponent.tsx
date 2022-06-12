
import { useState, useEffect } from 'react';
import InputComponent from '../Inputs/InputComponent';
import { Table, Card, Container, Row, Col, Pagination, Form } from 'react-bootstrap'
import { GetUuId } from '../../Libs/Utility';
import { ITableComponent, ISortInputTable } from '../../Models/UtiityModels';



const TableComponent = ({
    HeaderCss = '',
    TheadCss = 'PupleBG',
    Title = '',
    HasContainer = false,
    Data = [],
    Columns = []
}: ITableComponent) => {


    const SortInputTable: ISortInputTable = {
        sortInput: '',
        Id: GetUuId(),
        Data: [],
        PrevPage: 1,
        CurrentPage: 1,
        PerPage: 5,
        PageNumbers: [],
        DataCount: 0
    }

    const [sortInputTable, setSortInputTable] = useState(SortInputTable);

    const HandleInputChange = ({ currentTarget: input }: any) => {
        setSortInputTable(prevState => { return { ...prevState, sortInput: input.value } })
        SortableWithPagination(0);
    };

    const handleOnClickPagination = (current: number) => {
        setSortInputTable(prevState => { return { ...prevState, CurrentPage: current } });
        SortableWithPagination(current);
    }

    const SortableWithPagination = (current: number) => {
        //Data To Shw In Table        
        let newData = { ...sortInputTable };
        let prevPage = current <= 0 ? 1 : current >= newData.PageNumbers.length ? newData.PageNumbers.length : current;
        let Datos = Data.map((dat: any, index: number) => {
            return Columns.map((col: any) => (dat[String(col.Name)])).concat()
        });
        if (sortInputTable.sortInput.length > 0)
            Datos = Datos.filter((val: any) => String(val).toLowerCase().includes(sortInputTable.sortInput.toLowerCase()))
        const indexOfLastTodo = prevPage * newData.PerPage;
        const indexOfFirstTodo = indexOfLastTodo - newData.PerPage;
        const currentTodos = Datos.slice(indexOfFirstTodo, indexOfLastTodo);
        //Number ToShow In Pagination 
        const pageNumbers: number[] = [];
        for (let i = 1; i <= Math.ceil(Datos.length / newData.PerPage); i++) {
            pageNumbers.push(i);
        }
        setSortInputTable(prevState => { return { ...prevState, Data: currentTodos, PageNumbers: pageNumbers, PrevPage: prevPage, CurrentPage: 1, DataCount: currentTodos.length } });
    }

    useEffect(() => {
        if (Columns.length > 0 && Data.length > 0)
            SortableWithPagination(0);
    }, [Data])

    return (
        <>
            {HasContainer === true ? (
                <Container style={{ overflow: "scroll-y", minHeight: "400px", maxWidth: "65vw !important" }} >

                    <Row>
                        <Col>
                            <Card className={`text-center`}>
                                <Card.Header className={`text-center ${HeaderCss}`}>{Title}</Card.Header>
                                <Card.Body className="text-dark">
                                    <Row >
                                        <Col md={6}>
                                            <Card.Text className="d-flex justify-content-start">
                                                <Form.Label className="p-2 text-purple">Cantidad Total: {Data.length}{"  "}</Form.Label>
                                                <Form.Label className="p-2 text-purple">Cantidad: {sortInputTable.DataCount}</Form.Label>
                                            </Card.Text>
                                        </Col>
                                        <Col md={6} className="d-flex justify-content-end mb-1">
                                            <InputComponent
                                                Label=""
                                                Name="sortInput"
                                                Value={sortInputTable.sortInput}
                                                ControlId={sortInputTable.Id}
                                                TextId={sortInputTable.Id}
                                                OnChange={HandleInputChange}
                                                Type="text"
                                                key={sortInputTable.Id}
                                                PlaceHolder="Buscar...."
                                            />
                                        </Col>
                                    </Row>
                                    <Table striped={true} bordered={true} hover={true}>
                                        <thead className={`${TheadCss}`}>
                                            <tr>
                                                {Columns && Columns.map(value => (<th key={value.Header}>{value.Header}</th>))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sortInputTable.Data && sortInputTable.Data.map((value: any, index) => (
                                                <tr>
                                                    {value.map((val: any) => (
                                                        <>
                                                            <td key={index}>{val}</td>
                                                        </>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    <Row>
                                        <Col className="d-flex justify-content-end">
                                            <Pagination size="sm">
                                                <Pagination.First onClick={() => handleOnClickPagination(1)} />
                                                <Pagination.Prev onClick={() => handleOnClickPagination((sortInputTable.PrevPage - 1))} />
                                                {sortInputTable.PageNumbers && sortInputTable.PageNumbers.map((val: number, index: number) => (
                                                    <Pagination.Item key={val} onClick={() => handleOnClickPagination(val)}>{val}</Pagination.Item>
                                                ))}
                                                <Pagination.Next onClick={() => handleOnClickPagination((sortInputTable.PrevPage + 1))} />
                                                <Pagination.Last onClick={() => handleOnClickPagination(sortInputTable.PageNumbers.length)} />
                                            </Pagination>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Container style={{ overflow: "scroll-y", minHeight: "400px", maxWidth: "65vw !important" }} >

                    <Row>
                        <Col>
                            <Row >
                                <Col md={6}>
                                    <Card.Text className="d-flex justify-content-start">
                                        <Form.Label className="p-2 text-purple">Cantidad Total: {Data.length}{"  "}</Form.Label>
                                        <Form.Label className="p-2 text-purple">Cantidad: {sortInputTable.DataCount}</Form.Label>
                                    </Card.Text>
                                </Col>
                                <Col md={6} className="d-flex justify-content-end mb-1">
                                    <InputComponent
                                        Label=""
                                        Name="sortInput"
                                        Value={sortInputTable.sortInput}
                                        ControlId={sortInputTable.Id}
                                        TextId={sortInputTable.Id}
                                        OnChange={HandleInputChange}
                                        Type="text"
                                        key={sortInputTable.Id}
                                        PlaceHolder="Buscar...."
                                    />
                                </Col>
                            </Row>
                            <Table striped={true} bordered={true} hover={true}>
                                <thead className={`${TheadCss}`}>
                                    <tr>
                                        {Columns && Columns.map(value => (<th>{value.Header}</th>))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortInputTable.Data && sortInputTable.Data.map((value: any, index) => (
                                        <tr>
                                            {value.map((val: any) => (
                                                <>
                                                    <td>{val}</td>
                                                </>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Row>
                                <Col className="d-flex justify-content-end">
                                    <Pagination size="sm">
                                        <Pagination.First onClick={() => handleOnClickPagination(1)} />
                                        <Pagination.Prev onClick={() => handleOnClickPagination((sortInputTable.PrevPage - 1))} />
                                        {sortInputTable.PageNumbers && sortInputTable.PageNumbers.map((val: number, index: number) => (
                                            <Pagination.Item key={val} onClick={() => handleOnClickPagination(val)}>{val}</Pagination.Item>
                                        ))}
                                        <Pagination.Next onClick={() => handleOnClickPagination((sortInputTable.PrevPage + 1))} />
                                        <Pagination.Last onClick={() => handleOnClickPagination(sortInputTable.PageNumbers.length)} />
                                    </Pagination>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            )}

        </>
    )
}




export default TableComponent;