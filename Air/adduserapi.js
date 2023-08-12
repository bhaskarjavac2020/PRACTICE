fetch('http://164.52.212.42:8085/as-admin/admin/getAllUserRole').then((data) => {

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
           <th scope="col">User Role Id</th>
           <th scope="col">User Name</th>
           <th scope="col">User Mobile No.</th>
           <th scope="col">User Role</th>
           <th scope="col">Update</th>
           <th scope="col">Delete</th>
       </tr>
        </tbody>
        </table>
       
   </thead></html>`
        data1 += `<table class="table" style="width: 100%">
    
        <tbody>
    
                <tr>
                    <th scope="row">${values.id}</th>
                    <td stylr="width:100%">${values.name}</td>
                    <td>${values.image}</td>
                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Update</button></td>
                    <td><button onclick="myFunction()" id="demo">Delete</button></td>
                </tr>
        
        </tbody>
    </table>`
    });
    document.getElementById("card").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})