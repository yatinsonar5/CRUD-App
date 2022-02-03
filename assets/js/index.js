
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    let unindexed_array = $(this).serializeArray();
    const data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    let request = {
        // "url" : `http://localhost:3000/api/users/${data.id}`,
        "url" : `https://yatin-crud-app.herokuapp.com/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        let id = $(this).attr("data-id")

        let request = {
            // "url" : `http://localhost:3000/api/users/${id}`,
            "url": `https://yatin-crud-app.herokuapp.com/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}