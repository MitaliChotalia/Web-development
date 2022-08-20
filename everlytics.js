let url = "https://api.jsonbin.io/v3/b/62fe4a025c146d63ca74a8c3";
fetch(url,{
    method : "GET",
    withCredentials : true,
    headers : {
        "X-MASTER-KEY" : "$2b$10$jqXlkJN.sHBfU9fU/jh4leaUu56AU50Y9zDY0LeoPVgVfmWedr6KG"
    }
})
.then(function(response){
    console.log(response.status);
    return response.json();
})
.then(function(data){
    console.log(data);
    let machines = data.record;
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let machine of machines){
        out += `
            <tr>
                <td>${machine.Machine_name}</td>
                <td id = "style6">${machine.Machine_id}</td>
                <td>${machine['Energy_Consumed(kWh)']['Today']}</td>
                <td>${machine['Energy_Consumed(kWh)']['MTD']}</td>
                <td>${machine['Energy_Consumed(kWh)']['YTD']}</td>
                <td id = "style7">${machine['Active_power(MW)']}</td>
                <td>${machine['Apparent_power(MVA)']}</td>
                <td id = "style8">${machine['Reactive_power(MVAr)']}</td>
                <td>${machine['Current(Amps)']}</td>
                <td id = "style9">${machine['Voltage(Volts)']}</td>
                <td>${machine.Power_factor}</td>
                <td id = "style10">${machine['Idle_Time']['Today']}</td>
                <td id = "style11">${machine['Idle_Time']['MTD']}</td>
                <td id = "style12">${machine['Idle_Time']['YTD']}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
})
.catch(function(err){
    console.log('Error',err);
});

// async function getUsers(){
//     let url = "https://drive.google.com/file/d/1HoYIGyTzrq7mKMTR94EpSA3mibFQ6GcW/view?usp=sharing";
//     try{
//         let res = await fetch(url);
//         return await res.json();
//     }catch(error){
//         console.log(error);
//     }
// }

// async function renderUsers(){
//     let example = await getUsers();
//     let html = '';
//     example.forEach(user => {
//         let htmlSegment = `
//             <tr>
//                 <td>${user.Machine_name}</td>
//             </tr>
//         `;
//         html += htmlSegment;
//     });
//     let container = document.querySelector('#container');
//     container.innerHTML = html ;
// }

// renderUsers();