// uc5 monthly income of employee 
console.log("Welcome to Employee Wage Computation");

employeDetails = [
    { Eid: 1001, name: "Murugan" },
    { Eid: 1001, name: "krishna" },
    { Eid: 1001, name: "Dhanush" },
]

let arr = {}
function showDetails() {
    console.log(`+----+----------+-----------+---------------+---------------+--------------------+---------------+`)
    console.log(`| Id |   Name   | Attendence| Employee_Type | DailyWage($)  | No.Of working Days |  Monthly Wage |`)
    console.log(`+----+----------+-----------+---------------+---------------+--------------------+---------------+`);
    details = employeDetails.forEach(element => {
        const Eid = element.Eid;
        const name = element.name;
        let attendence = Math.round(Math.random());
        let workedHours = attendence * 8;
        let dailyWage = workedHours * 20;
        // let arr = ["part time", "full time"]
        // let index = Math.floor(Math.random() * arr.length);
        let employee_type = Math.round(Math.random());
        let {count,wage} = monthly_Wage(attendence, dailyWage);
        // console.log(count);
        function monthly_Wage(attendence, dailyWage,employee_type) {
            let count = 0
            if (attendence === 1) {
                for (let i = 1; i <= 30; i++) {
                    let attended = Math.round(Math.random())
                    if (attended === 1) {
                        count++
                    }
                }
            }
            if (count <= 20) {
                count = count
            }
            if (count > 20) {
                count = 20
            }
            return {count:count,wage:count*dailyWage}
            // dailyWage = (employee_type === "part time" ? dailyWage / 2 : dailyWage)
            // return count * dailyWage
        }
        arr = {
            Eid: Eid,
            name: name,
            attendence: attendence,
            dailyWage: dailyWage,
            employee_type:employee_type,

        }
        console.log(`|${padNum(Eid,3)}| ${padString(name,8)} |  ${padString(attendence = (attendence === 0 ? "absent" : "present"), 6)}  |   ${employee_type=(employee_type===0?"part time":"full time")}   |      ${padNum(dailyWage = (employee_type === "part time" ? dailyWage / 2 : dailyWage), 3)}       |        ${padNum(count, 8)}    |       ${wage=(employee_type==="full time"?wage:wage/2)}     |`);
    });
    console.log("+-------+--------------------+---------------+---------------+----------------+------------------+");

}
function padString(str, length) {
    return str.padEnd(length);
}
function padNum(value, length) {
    // Convert the value to a string before padding
    const str = String(value);
    return str.padEnd(length);
}

showDetails()
