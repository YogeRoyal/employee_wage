// uc5 monthly income of employee 
console.log("Welcome to Employee Wage Computation");

employeDetails = [
    { Eid: 1001, name: "Murugan" },
    { Eid: 1001, name: "krishna" },
    { Eid: 1001, name: "Dhanush" },
]

let arr = {}
function showDetails() {
    console.log(`+-------+--------------------+----------------+---------------+-----------------+----------------+`)
    console.log(`|   Id  |        Name        |  Attendence    | Employee_Type |   DailyWage($)  |   Monthly Wage |`)
    console.log(`+-------+--------------------+----------------+---------------+-----------------+----------------+`);
    details = employeDetails.forEach(element => {
        const Eid = element.Eid;
        const name = element.name;
        let attendence = Math.round(Math.random());
        let workedHours = attendence * 8;
        let dailyWage = workedHours * 20;
        let arr = ["part time", "full time"]
        let index = Math.floor(Math.random() * arr.length);
        let employee_type = (arr[index]);
        let monthlyWage = monthly_Wage(attendence, dailyWage);
        function monthly_Wage(attendence, dailyWage) {
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
            // dailyWage = (employee_type === "part time" ? dailyWage / 2 : dailyWage)
            return count * dailyWage
        }
        arr = {
            Eid: Eid,
            name: name,
            attendence: attendence,
            dailyWage: dailyWage,
            monthlyWage: monthlyWage,

        }
        console.log(`|  ${Eid} |        ${name}     |    ${padString(attendence = (attendence === 0 ? "absent" : "present"), 6)}      |   ${employee_type}  |         ${padNum(dailyWage = (employee_type === "part time" ? dailyWage / 2 : dailyWage), 3)}       |  ${padNum(monthlyWage, 8)}    |`);
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
