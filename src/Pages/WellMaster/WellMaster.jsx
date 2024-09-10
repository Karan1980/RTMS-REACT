import React from 'react'
import { Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, color } from '@mui/system';
import master from '/assets/wellMaster.png'
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


// -------------------------------Table for  Moblie --------------------------
const StyledGridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'white',
}));

let data = {
    "Well No": "1",
    "Location": "New York",
    "Installation": "01/01/2021",
    "Latitude": "40.7128 N",
    "Longitude": "74.0060 W",
    "Landmark": "Temple"

};

let Tata = {
    "Well No": "2",
    "Location": "Delhi",
    "Installation": "01/01/2021",
    "Latitude": "40.7128 N",
    "Longitude": "74.0060 W",
    "Landmark": "Temple",
};

let Mata = {
    "Well No": "3",
    "Location": "UP",
    "Installation": "01/01/2021",
    "Latitude": "40.7128 N",
    "Longitude": "74.0060 W",
    "Landmark": "Temple",
};

let Sata = {
    "Well No": "4",
    "Location": "MP",
    "Installation": "01/01/2021",
    "Latitude": "40.7128 N",
    "Longitude": "74.0060 W",
    "Landmark": "Temple",
};
// ------------------------Table for Desktop-----------------------------   

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1'),
    createData('2'),
    createData('3'),
    createData('4'),
    createData('5'),
    createData('3'),

];

const BodyTableCellWraper = styled(TableCell)(() => ({
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#000000',
}));




function WellMaster() {
    return (
        <div>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} pt={1} paddingBottom={2}>
                <Grid item lg={6} md={6} sm={6} xs={12} display={'flex'} gap={1}>
                    <Box sx={{ height: '50px', width: '50px' }}>
                        <img src={master} alt='img' height={'50px'} width={'50px'} />
                    </Box>
                    <Box >
                        <Typography variant='h4'>Well Master</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} display={'flex'} justifyContent={'end'}>
                    <Link to='/dashboard/addwell' style={{ textDecoration: 'none' }}>
                        <Button variant='contained'
                            sx={{
                                backgroundColor: 'green',   // Change button color to green
                                '&:hover': {
                                    backgroundColor: 'darkgreen', // Optional: Change color on hover
                                },
                                fontSize: '16px',
                                // Hide button on small screens
                                display: {
                                    xs: 'none', // Hide on extra small screens (mobile)
                                    sm: 'block', // Show on small screens and above
                                }
                            }} >
                                Add Well +
                    </Button>
                </Link>
            </Grid>
        </Grid>
          
            {/* ------------------Table for Desktop--------------------------------- */ }
    <Grid container md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}>
        <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: 'auto' }}>
            <Table aria-label="customized table" stickyHeader>
                <TableHead >
                    <TableRow  >
                        <StyledTableCell sx={{ fontSize: '18px' }}>Well Number</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px' }} align="left">Well Installation</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px' }} align="left">Well Location </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px' }} align="left">Latitude</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px' }} align="left">Longitude</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px' }} align="left">LandMark</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px' }} align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align='left'>
                                <Box display={'flex'} justifyContent={'space-evenly'}>
                                    <IconButton sx={{ color: 'red', '&:hover': { color: 'darkred' }, marginRight: '5px' }}>
                                        <DeleteForeverIcon fontSize='large' />
                                    </IconButton>
                                    <IconButton sx={{ color: 'darkblue', '&:hover': { color: 'black' } }}>
                                        <EditIcon fontSize='large' />
                                    </IconButton>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
    {/* ---------------------------Table for Moblie------------------------------------- */ }

    <Grid container md={12}
        lg={12}
        sm={12}
        xs={12}
        sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}>
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
            <Grid container mt={2} direction="column">
                {Object.keys(data).map((header, index) => (
                    <Grid container key={index}>
                        {/* Header Section */}
                        <StyledGridItem item xs={6}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {header}
                            </Typography>
                        </StyledGridItem>
                        {/* Content Section */}
                        <StyledContent item xs={6}>
                            <Typography variant="body1">{data[header]}</Typography>
                        </StyledContent>
                    </Grid>
                ))}
            </Grid>
            {/* ----------------------Dreak---------------------------------- */}
            <Grid container mt={2} direction="column">
                {Object.keys(Tata).map((header, index) => (
                    <Grid container key={index}>
                        {/* Header Section */}
                        <StyledGridItem item xs={6}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {header}
                            </Typography>
                        </StyledGridItem>
                        {/* Content Section */}
                        <StyledContent item xs={6}>
                            <Typography variant="body1">{Tata[header]}</Typography>
                        </StyledContent>
                    </Grid>
                ))}
            </Grid>
            {/* ----------------------Dreak---------------------------------- */}
            <Grid container mt={2} direction="column">
                {Object.keys(Mata).map((header, index) => (
                    <Grid container key={index}>
                        {/* Header Section */}
                        <StyledGridItem item xs={6}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {header}
                            </Typography>
                        </StyledGridItem>
                        {/* Content Section */}
                        <StyledContent item xs={6}>
                            <Typography variant="body1">{Mata[header]}</Typography>
                        </StyledContent>
                    </Grid>
                ))}
            </Grid>
            {/* ----------------------Dreak---------------------------------- */}
            <Grid container mt={2} direction="column">
                {Object.keys(Sata).map((header, index) => (
                    <Grid container key={index}>
                        {/* Header Section */}
                        <StyledGridItem item xs={6}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {header}
                            </Typography>
                        </StyledGridItem>
                        {/* Content Section */}
                        <StyledContent item xs={6}>
                            <Typography variant="body1">{Sata[header]}</Typography>
                        </StyledContent>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    </Grid>

        </div >
    )
}

export default WellMaster
