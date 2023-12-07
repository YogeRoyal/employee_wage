// uc3 adding employee type and their wages
console.log("Welcome to Employee Wage Computation");

employeDetails = [
    { Eid: 1001, name: "Murugan" },
    { Eid: 1001, name: "krishna" },
    { Eid: 1001, name: "Dhanush" },
]

let details = []
let arr = {}
function showDetails() {
    console.log(`+-------+--------------------+----------------+---------------+-----------------+`)
    console.log(`|   Id  |        Name        |  Attendence    | Employee_Type |   DailyWage($)  |`)
    console.log(`+-------+--------------------+----------------+---------------+-----------------+`);
    det = employeDetails.forEach(element => {
        const Eid = element.Eid;
        const name = element.name;
        let attendence = Math.round(Math.random());
        let workedHours = attendence * 8;
        let dailyWage = workedHours * 20;
        let arr = ["part time", "full time"]
        let index = Math.floor(Math.random() * arr.length)

        // console.log(arr[index]);
        let employee_type = (arr[index])
        arr = {
            Eid: Eid,
            name: name,
            attendence: attendence,
            dailyWage: dailyWage
        }
        console.log(`|  ${Eid} |        ${name}     |    ${attendence = (attendence === 0 ? "absent" : "present")}      |   ${employee_type}  |         ${dailyWage = (employee_type === "part time" ? dailyWage / 2 : dailyWage)}       |`);
    });
    console.log("+-------+--------------------+---------------+---------------+--------------+");
}

showDetails()
