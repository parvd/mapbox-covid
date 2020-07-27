import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
const CardState = ({selectedvalue:{confirmed,active,recovered,deaths}}) => {
    //console.log(confirmed);
    if(!(confirmed)){
        return <div></div>
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3}  justify="center">
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.cardstate,styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed} duration={2.5} separator=","/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cardstate,styles.active)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={active} duration={2.5} separator=","/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.cardstate,styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={2.5} separator=","/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cardstate,styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography> 
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} separator=","/>
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default CardState;