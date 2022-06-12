import { useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { LoaderPacmanComponent } from "../Components";
import { fetchGetAllUsers } from '../Redux/Feactures/Dashboard/DashboardThunks';
import { IUserListToDash } from '../Models/UserListModels'
import { useForm } from "../Hooks";
import { useAppDispatch, useAppSelector } from "../Hooks/useReduxHooks";
import Scrollspy from 'react-scrollspy'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const DashboardComponentPage = () => {


    const dispatch = useAppDispatch();
    const UsersChartList = useAppSelector(state => state.UsersChart.UsersChartList);


    interface InitialChart {
        UserChartMonth: ICharts;
        UserChartYear: ICharts;
        UserChartDay: ICharts;
        UsersChartList:IUserListToDash[];
        Options: {};
    }

    interface ICharts {
        labels: string[] | number[] | any;
        datasets: IDatasets[];
    }
    interface IDatasets {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }

    const InitialState: InitialChart = {
        UserChartMonth: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Por Mes',
                    data: [],
                    borderColor: 'rgb(21, 19, 26 )',
                    backgroundColor: 'rgba(21, 19, 26 , 0.5)',
                }                
            ],
        },
        UserChartYear: {
            labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
            datasets: [
                {
                    label: 'Por Año',
                    data: [],
                    borderColor: 'rgb(115, 54, 255)',
                    backgroundColor: 'rgba(115, 54, 255 ,0.5)',
                }                
            ],
        },
        UserChartDay: {
            labels: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: 'Esta Semana',
                    data: [],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ],
        },
        UsersChartList : [],
        Options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: 'Graficos De Usuarios',
                },
            },
        }

    }

    const { handleChangeInput, handleSubmit, errors, state, setState, setStateErrors } = useForm<InitialChart>(InitialState, {}, () => { });

    useEffect(() => {
        dispatch(fetchGetAllUsers());
    }, [])

    useEffect(() => {
        if (!(UsersChartList.length > 0)) return      
        let newState:InitialChart = {...state}  
        newState.UsersChartList = UsersChartList;
        //user chart day datasets data
        let UserChartMonthDatasetData = CalculateUserByMonth(newState);
         //user chart day datasets data
         let UserChartYearDatasetData = CalculateUserByYear(newState);
          //user chart day datasets data
         let UserChartDayDatasetData = CalculateUserByDay(newState);

         newState.UserChartMonth.datasets[0].data = UserChartMonthDatasetData;
          newState.UserChartYear.datasets[0].data = UserChartYearDatasetData;
          newState.UserChartDay.datasets[0].data = UserChartDayDatasetData;
        setState (prevState => { return {...prevState , newState}});

    }, [UsersChartList])

    const CalculateUserByMonth= (newState:InitialChart) => {
        let UserChartMonthDatasetData = newState.UserChartMonth.labels.map((month:any , index : number) => {
            return newState.UsersChartList.filter((user:IUserListToDash) => new Date(user.fechaCreacion).getMonth() === index).length
        })
       return  UserChartMonthDatasetData;   
    }

    const CalculateUserByYear = (newState:InitialChart) => {
        let UserChartYearDatasetData = newState.UserChartYear.labels.map((month:number , index : number) => {
            return newState.UsersChartList.filter((user:IUserListToDash) => new Date(user.fechaCreacion).getFullYear() == month).length
        })
        return UserChartYearDatasetData; 
    }

    const CalculateUserByDay = (newState:InitialChart) => {
        let UserChartDayDatasetData = newState.UserChartDay.labels.map((month:number , index : number) => {
            return newState.UsersChartList.filter((user:IUserListToDash) => new Date(user.fechaCreacion).getDay() == index).length
        })
        return UserChartDayDatasetData; 
    }
   


    return (
        <>
            <LoaderPacmanComponent />
            <Container fluid={true} className="dashboardContainer p-5" data-bs-spy="scroll">  
            <Scrollspy items={ ['chart1', 'chart2', 'chart3'] } currentClassName="is-current">          
                <Row>
               
                    <Col    md={12} lg={4} id="chart1">
                        <Card className="text-center m-3">
                            <Card.Header className='text-dark'>Por Dia</Card.Header>
                            <Card.Body className="text-dark">
                                <Container style={{ overflow: "scroll", height: "400px", maxWidth: "65vw" }} >
                                    <Bar options={state.Options} data={state.UserChartDay} />;
                                </Container>
                            </Card.Body>
                            <Card.Footer className="text-muted">Seguimos Creciendo!!!!</Card.Footer>
                        </Card>
                    </Col>

                    <Col   md={12} lg={4} id="chart2">
                        <Card className="text-center m-3">
                            <Card.Header className='text-dark'>Por Mes</Card.Header>
                            <Card.Body className="text-dark">
                                <Container style={{ overflow: "scroll", height: "400px", maxWidth: "65vw" }} >
                                    <Bar options={state.Options} data={state.UserChartMonth} />;
                                </Container>
                            </Card.Body>
                            <Card.Footer className="text-muted">Seguimos Creciendo!!!!</Card.Footer>
                        </Card>
                    </Col>

                    <Col  md={12} lg={4} id="chart3">
                        <Card className="text-center m-3">
                            <Card.Header className='text-dark'>Por A&ntilde;o</Card.Header>
                            <Card.Body className="text-dark">
                                <Container style={{ overflow: "scroll", height: "400px", maxWidth: "65vw" }} >
                                    <Bar options={state.Options} data={state.UserChartYear} />;
                                </Container>
                            </Card.Body>
                            <Card.Footer className="text-muted">Seguimos Creciendo!!!!</Card.Footer>
                        </Card>
                    </Col>
                    
                </Row>
                </Scrollspy>
            </Container>

        </>
    )
}



export default DashboardComponentPage;