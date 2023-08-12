fetch('http://164.52.212.42:8085/as-admin/admin/getAllUserRole').then((data) => {

    //console.log(data);


    return data.json();
}).then((completedata) => {
    //console.log(completedata[2].image);
    let data1 = "";
    completedata.map((values) => {
        `<html>
        <thead>
       <tr>
           <th scope="col">Id</th>
           <th scope="col">Name</th>
           <th scope="col">Description</th>
           <th scope="col">Update</th>
           <th scope="col">Delete</th>
       </tr>
   </thead></html>`
        data1 += `<table class="table">
        <colgroup>
       <col span="1" style="width: 10%;">
       <col span="1" style="width: 20%;">
       <col span="1" style="width: 29%;">
    
    </colgroup>
    <script>
    $(document).ready(function() {
        $('.table .eBtn').on('click', function(event) {
            event.preventDefault();
            var href = $(this).attr('href');
    
            $.get(href, function(values) {
                $('.myForm #id').val(values.id);
                $('.myForm #name').val(values.name);
                $('.myForm #image').val(values.image);
            });
            $('.myForm #exampleModal2').modal();
        });
    });
    </script>
        <tbody>
            <div id="card">
                <tr>
                    <th scope="row" id="uid">${values.id}</th>
                    <td>${values.name}</td>
                    <td>${values.image}</td>
                    <td><a href="http://164.52.212.42:8085/as-admin/admin/getSingleUserRole?id=${values.id}" class="btn btn-primary eBtn" data-toggle="modal" data-target="#exampleModal2" onclick="function()">Update</a></td>
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