function getdata(){
    console.log("button clicked");

    // step1 :create an XHR object
    var xhr = new XMLHttpRequest();
    console.log("unsent",xhr.readyState);

    // step2 :request specification
    //xhr.open("GET","input.txt",true);
    // xhr.open("GET","data.json",true);
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
    console.log("open",xhr.readyState);
    
    // step3 :sending the request
    xhr.send();
    console.log("send",xhr.readyState);

    // step4 :create an event listener
    xhr.onreadystatechange = function(){
        console.log("done",xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            // var data = this.responseText;
            var data = JSON.parse(this.responseText);
            console.log(data);
            var output=`<tr><th>Name</td><th>Email</td><tr>`;
            for (let i = 0; i < data.length; i++) {
                // output +=`<ul><li>${data[i].name}</li></ul>`     
                output +=`<tr><td>${data[i].name} </td><td>${data[i].email} </td></tr>`   
            }
            document.getElementById("t").innerHTML=output;
        }
    }  
}
  