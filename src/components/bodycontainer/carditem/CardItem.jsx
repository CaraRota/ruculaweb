import React from 'react'
import "../../../css/CardItem.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function CardItem({ titulo, venta, fecha, variacion, cambio }) {

    const card = (
        <CardContent className='card'>
            <div className='card-item-container'>
                <div className='cotizacion-icon'><MonetizationOnIcon fontSize='inherit' /></div>
                <div className='cotizacion-titulo'> {titulo}</div>
                <div className='cotizacion-fecha'>{fecha}</div>
            </div>
            <div className='cotizacion-venta'>{venta}</div>
            <div className='cotizacion-variacion'>
                {cambio === "up" ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}
            </div>
            <Typography variant="body2">
                {variacion}
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
    );

    return (
        <Box sx={{ maxWidth: 250, maxHieght: 250 }}>
            <Card className="card" variant="outlined">{card}</Card>
        </Box>
    )
}

export default CardItem