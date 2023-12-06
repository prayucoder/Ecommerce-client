import React from 'react'
import { Typography, Box , styled, Table, TableBody, TableRow, TableCell} from '@mui/material'
import { LocalOffer as Badge } from "@mui/icons-material"

const SmallText = styled(Box)`
    vertical-align: baseline;
    font-size: 14px;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`;

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop : 5, color: "#878787", fontSize: 14}}>
            8 Ratings & 1 Reviews
            <Box component="span"><img src={fassured} alt=""  style={{width: 77, marginLeft: 20 }}/></Box>
        </Typography>
        <Typography>
            <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>
            <Box component="span" style={{ color: '#878787', marginLeft: 10 }}><strike>₹{product.price.mrp}</strike></Box>
            <Box component="span" style={{ color: '#388E3C', marginLeft: 10}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>10% off on Canara Bank Credit Card Transactions, up to ₹1,000 on orders of ₹5,000 and above T&C</Typography>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><StyledBadge/>Get extra ₹4000 off (price inclusive of cashback/coupon) T&C</Typography>
            <Typography><StyledBadge/>Buy for 100 get ₹75 off your Next Buy T&C</Typography>
            <Typography><StyledBadge/>FreebieSpotify Premium - 12M at ₹699T&C</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: '#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787'}}>Warrant</TableCell>
                    <TableCell>1 Year Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787'}}>Seller</TableCell>
                    <TableCell>
                        <Box component='span' style={{color: "#2874f0"}} >SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>14 Days Return Policy</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} alt="flipkartPoints" style={{width: 390}}/>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    </>
  )
}

export default ProductDetail