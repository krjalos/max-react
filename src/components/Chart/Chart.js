import ChartBar from "./ChartBar";

import classes from './Chart.module.scss';

const Chart = props => {

    const valuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...valuesArray);

    return (
        <div className={classes.chart}>
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={maxValue}
                    key={dataPoint.label}
                />)}
        </div>
    );
}

export default Chart;