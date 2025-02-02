import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
const Cards = ({data:{confirmed,active,recovered,deaths,date}}) => {
    if(!confirmed){
        return '...loading';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} jsutify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">Last Update on {date}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.active)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={active} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">Last Update on {date}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">Last Update on {date}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">Last Update on {date}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;