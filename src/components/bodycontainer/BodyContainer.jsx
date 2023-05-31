import React from 'react'
import "../../css/BodyContainer.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardItem from './carditem/CardItem';
import useFetch from '../hooks/useFetch';
import Spinner from "../assets/Spinner";
import apiMerger from '../apimerger/apiMerger';

function BodyContainer() {
    const url = apiMerger()
    const { data, error, loading } = useFetch(url)

    if (loading) {
        return <div className='bodyContainerSpinner'><Spinner /></div>
    } if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box className='container' sx={{ height: '100vh' }}>
                    <CardItem titulo="Dolar Blue" venta={data.venta} fecha={data.fecha} variacion={data.variacion} cambio={data['class-variacion']} />
                </Box>
            </Container>
        </>
    )
}

export default BodyContainer