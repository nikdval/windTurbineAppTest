export default class Turbine {
    constructor(model,ratePower,windClass,rDiameter){
        super();
        this.model = model;
        this.ratePower = ratePower;
        this.windClass = windClass;
        this.rDiameter = rDiameter;
        this.alarms = [];
    }

    getTurbineDetails() {
        return {
            model: this.model,
            ratePower: this.ratePower,
            windClass: this.windClass,
            rDiameter: this.rDiameter
        }
    }
    
    /**
     * Random number from 1 to 100, 
     * for multiples of three add alarm “Coating Damage” 
     * and for the multiples of five add alarm “Lightning Strike” instead of the number
     * @returns {array}
     */
    getTurbineAlarms(){
        this.alarms = [];
        const tempNum = Math.floor(Math.random() * 100) + 1;

        if(tempNum % 3 === 0) this.alarms.push("Coating Damage");
        if(tempNum % 5 === 0) this.alarms.push("Lightning Strike");

        return this.alarms;
    }
}