import classes from "./Results.module.css";

export default function Results({ qvalue }) {
    return (
        <div className={classes.resultsContainer}>
            <p className={classes.resultText}>{`Q [W/m2]: ${qvalue.totalHeatTransfer}`}</p>
        </div>
    );
}
