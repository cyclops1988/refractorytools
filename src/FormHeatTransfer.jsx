import { useState } from "react";
import classes from "./FormHeatTransfer.module.css";

export default function FormHeatTransfer({ getFormData }) {
    const [inTemp, setInTemp] = useState("");
    const [exTemp, setExTemp] = useState("");
    const [thickness, setThickness] = useState("");
    const [temp1, setTemp1] = useState("");
    const [temp2, setTemp2] = useState("");
    const [temp3, setTemp3] = useState("");
    const [thermalConduc1, setThermalConduc1] = useState("");
    const [thermalConduc2, setThermalConduc2] = useState("");
    const [thermalConduc3, setThermalConduc3] = useState("");

    const inTempHandler = (e) => setInTemp(e.target.value);
    const exTempHandler = (e) => setExTemp(e.target.value);
    const thicknessHandler = (e) => setThickness(e.target.value);
    const temp1Handler = (e) => setTemp1(e.target.value);
    const temp2Handler = (e) => setTemp2(e.target.value);
    const temp3Handler = (e) => setTemp3(e.target.value);
    const thermalConduc1Handler = (e) => setThermalConduc1(e.target.value);
    const thermalConduc2Handler = (e) => setThermalConduc2(e.target.value);
    const thermalConduc3Handler = (e) => setThermalConduc3(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            inTemp,
            exTemp,
            thickness,
            temp1,
            temp2,
            temp3,
            thermalConduc1,
            thermalConduc2,
            thermalConduc3,
        };
        getFormData(formData);
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Heat Transfer Calculator</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.formGroup}>
                    <label className={classes.label} htmlFor="intemp">
                        Internal Temperature [&#176;C]
                    </label>
                    <input
                        className={classes.input}
                        type="number"
                        id="intemp"
                        name="intemp"
                        value={inTemp}
                        onChange={inTempHandler}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label} htmlFor="extemp">
                        External Temperature [&#176;C]
                    </label>
                    <input
                        className={classes.input}
                        type="number"
                        id="extemp"
                        name="extemp"
                        value={exTemp}
                        onChange={exTempHandler}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label} htmlFor="thickness">
                        Thickness [m]
                    </label>
                    <input
                        className={classes.input}
                        type="number"
                        id="thickness"
                        name="thickness"
                        value={thickness}
                        onChange={thicknessHandler}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label} htmlFor="temperature">
                        Temperature [&#176;C]
                    </label>
                    <div className={classes.inlineInputs}>
                        <input
                            className={classes.input}
                            type="number"
                            id="temperature1"
                            name="temperature1"
                            value={temp1}
                            onChange={temp1Handler}
                        />
                        <input
                            className={classes.input}
                            type="number"
                            id="temperature2"
                            name="temperature2"
                            value={temp2}
                            onChange={temp2Handler}
                        />
                        <input
                            className={classes.input}
                            type="number"
                            id="temperature3"
                            name="temperature3"
                            value={temp3}
                            onChange={temp3Handler}
                        />
                    </div>
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label} htmlFor="thermalconduc">
                        Thermal Conductivity [W/mK]
                    </label>
                    <div className={classes.inlineInputs}>
                        <input
                            className={classes.input}
                            type="number"
                            id="thermalconduc1"
                            name="thermalconduc1"
                            value={thermalConduc1}
                            onChange={thermalConduc1Handler}
                        />
                        <input
                            className={classes.input}
                            type="number"
                            id="thermalconduc2"
                            name="thermalconduc2"
                            value={thermalConduc2}
                            onChange={thermalConduc2Handler}
                        />
                        <input
                            className={classes.input}
                            type="number"
                            id="thermalconduc3"
                            name="thermalconduc3"
                            value={thermalConduc3}
                            onChange={thermalConduc3Handler}
                        />
                    </div>
                </div>
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}
