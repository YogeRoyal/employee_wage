// uc2 daily wage of employee
console.log("Welcome to Employee Wage Computation");

employeDetails = [
    { Eid: 1001, name: "Murugan" },
    { Eid: 1001, name: "krishna" },
    { Eid: 1001, name: "Dhanush" },
]

let details = []
let arr = {}
function showDetails() {
    console.log(`+-------+-------------------------+-----------+-------------+
|   Id  |        Name        |  Attendence   | DailyWage($)  |
+-------+--------------------+----------------+------------+`);
    det = employeDetails.forEach(element => {
        const Eid = element.Eid;
        const name = element.name;
        let attendence = Math.round(Math.random());
        let workedHours = attendence * 8;
        let dailyWage=workedHours*20;
        arr = {
            Eid: Eid,
            name: name,
            attendence: attendence,
            dailyWage:dailyWage
        }
        console.log(`|  ${Eid} |        ${name}     |    ${attendence=(attendence===0?"absent":"present")}    |     ${dailyWage}     |`);
    });
    console.log("+-------+---------------------+------------+--------------+");
}

showDetails();
