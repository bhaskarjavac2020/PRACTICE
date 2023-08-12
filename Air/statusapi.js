fetch('http://164.52.212.42:8085/as-admin/admin/getAllSpecialInstructionMasterList').then((data) => {

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
           <th scope="col">Table Id</th>
           <th scope="col">Description</th>
           <th scope="col">Update</th>
           <th scope="col">Delete</th>
       </tr>
        </tbody>
        </table>
       
   </thead></html>`
        data1 += `<table class="table", style="width:100%">
       <colgroup>
        <col span="1" style="width: 5%">
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 29%;">
        <col span="1" style="width: 29%;">
        

     </colgroup>
     
        <tbody>
            <div id="card">
                <tr>
                    <th scope="row">${values.id}</th>
                    <td style="padding-left:90px">${values.name}</td>
                    <td style="padding-left:100px">${values.description}</td>
                    <td style="padding-left:100px;"><button type="button" style="background-color:blue;padding:7px; color:white" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Update</button></td>
                    <td><button onclick="myFunction()" id="demo" style="background-color:red;padding:7px; color:white">Delete</button></td>
                </tr>
            </div>
        </tbody>
    </table>`
    });
    document.getElementById("card").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})