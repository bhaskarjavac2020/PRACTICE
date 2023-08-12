const postsList=document.querySelector('.posts-list');
const saveUserRole=document.querySelector('.add-post-form')
const roleName=document.getElementById('name');
const roleImage=document.getElementById('image');
const btnSubmit=document.querySelector('.btn'); 
const updateUserRole='http://164.52.212.42:8085/as-admin/admin/updateUserRole';
const deleteUrl='http://164.52.212.42:8085/as-admin/admin/deleteUserRole';
let output='';
const renderPosts=(posts)=>{
    posts.forEach(post => {
        output +=`
        <table class="table mt-4 col-md-6 bg-light">
                   <td class="table-id" >${post.id}</td>
                   <td class="table-name">${post.name}</td>
                   <td class="table-image">${post.image}</td>
                   <td href="#" class="btn btn-warning" id="edit-user-role" data-toggle="modal" data-target="#exampleModal">Edit<td>
                   <td href="#" class="table-link" id="delete-user-role">Delete</td>
               </table>
        `;
    });
    postsList.innerHTML = output;
}

const url='http://164.52.212.42:8085/as-admin/admin';
//Get all data
fetch(url+"/getAllUserRole")
   .then(res => res.json())
   .then(data=> renderPosts(data))

postsList.addEventListener('click',(e)=>{
    e.preventDefault();
    let delButtonIsPressed=e.target.id=='delete-user-role';
    let editButtonIsPressed=e.target.id=='edit-user-role';
    let id=e.target.parentElement.dataset.id;
    if(delButtonIsPressed){
        fetch(`${deleteUrl}/${id}`,{
            method:'DELETE',
        })
        .then(res=> res.json())
        .then(()=> location.reload())
    }
    if(editButtonIsPressed){
        const parent=e.target.parentElement;
        let userRoleId=parent.querySelector('.table-id').textContent;
        let userRoleName=parent.querySelector('.table-name').textContent;
        let userRoleImage=parent.querySelector('.table-image').textContent;
        document.getElementById('id').value=userRoleId;
        document.getElementById('name').value=userRoleName;
        document.getElementById('image').value=userRoleImage;
         //roleName.value=userRoleName;
        //roleImage.value=userRoleImage;
    }
    btnSubmit.addEventListener('click',(e) =>{
        e.preventDefault();
        fetch(`${updateUserRole}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:id,
                name:roleName.value,
                image:roleImage.value,
            })
        })
        .then(res => res.json)
        .then(()=> location.reload())
    })
})
//save data
saveUserRole.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url+"/saveUserRole",{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            id:userRoleId.value,
            name:roleName.value,
            image:roleImage.value
        })
    })
    .then(res => res.json())
    .then(data => {
        const dataArr=[];
        dataArr.push(data);
        renderPosts(dataArr);
    })
})