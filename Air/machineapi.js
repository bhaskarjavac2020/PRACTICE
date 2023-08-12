fetch('http://164.52.212.42:8085/as-admin/admin/getMachineMasterList').then((data) => {

    //console.log(data);


    return data.json();
}).then((completedata) => {
    //console.log(completedata[2].image);
    let data1 = "";
    completedata.map((values) => {
        `<html><thead>
        <table>
        <tbody>
        <tr>
           <th scope="col">Id</th>
           <th scope="col">Machine Id</th>
           <th scope="col">Machine Type</th>
           <th scope="col">Update</th>
           <th scope="col">Delete</th>
       </tr>
        </tbody>
        </table>
       
   </thead></html>`
        data1 += `<table class="table", style="width:100%">
       <colgroup>
        <col span="1" style="width:4%">
        <col span="1" style="width:30%;">
        <col span="1" style="width: 30%;">
        <col span="1" style="width: 25%;">
        

     </colgroup>
     
        <tbody>
            <div id="card">
                <tr>
                    <th scope="row">${values.id}</th>
                    <td style="padding-left:130px">${values.name}</td>
                    <td style="padding-left:130px">${values.description}</td>
                    <td style="padding-left:110px;"><button type="button" style="background-color:blue;padding:7px; color:white" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Update</button></td>
                    <td><button onclick="myFunction()" id="demo">Delete</button></td>
                </tr>
            </div>
        </tbody>
    </table>`
    });
    document.getElementById("card").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})