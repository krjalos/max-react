import classes from './ChartBar.module.scss';

const ChartBar = props => {

    let barFillHeight = "0%";

    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className={classes.chartBar}>
            <div className={classes.inner}>
                <div className={classes.fill} style={{height: barFillHeight}}></div>
            </div>
            <div className={classes.label}>{props.label}</div>
        </div>
    );
}

export default ChartBar;