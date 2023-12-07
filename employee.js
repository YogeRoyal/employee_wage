
console.log("Welcome to Employee Wage Computation");

employeDetails = [
    { Eid: 1001, name: "Adarsh" },
    { Eid: 1001, name: "krishna" },
    { Eid: 1001, name: "Dhanush" },
]

let details = []
let arr = {}
function showDetails() {
    console.log(
        `+-------+--------------------+-----------+
|   Id  |        Name        | Attendence |
+-------+--------------------+------------+`);
    det = employeDetails.forEach(element => {
        const Eid = element.Eid;
        const name = element.name;
        let attendence = Math.round(Math.random());
        arr = {
            Eid: Eid,
            name: name,
            attendence: attendence,
        }
        console.log(`|  ${Eid} |        ${name}       |  ${attendence}  |`);
    });
    console.log("+------+-------------+---------+");
}
showDetails();
