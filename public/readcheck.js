// read data
getData.addEventListener('click',(e) => {

    $('#dataTbl td').remove();
    var rowNum = 0; 
    const dbRef = ref(database, 'users/');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      // ...
      rowNum += 1; 
      var row = "<tr><td>" + rowNum + "</td><td>" + childData.firstName + "</td><td>" + childData.lastName + "</td><td>" + childData.email + "</td></tr>"

      $(row).appendTo('#dataTbl');
      
      });
    }, {
       onlyOnce: true
    });
  });
/*-----------------------------------------------------------------------------------------*/

//write

  // write data
  submit.addEventListener('click',(e) => {
    var firstName = document.getElementById('first-name').value;  
    var lastName = document.getElementById('last-name').value;  
    var email = document.getElementById('email').value;  

    const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'users/' + userId), {
    firstName: firstName,
    lastName: lastName,
    email : email
   });
   alert('saved');
  });


/*------------------------*/
//ref

/*<html>
<head>
<title>firebase editable table </title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</head>

<body>

<div class="col-md-6">
  <form>
    <div class="form-group">
    <label>First name</label>
    <input type="text" class="form-control" id="first-name" placeholder="first name">
  </div>
  <div class="form-group">
    <label>Last name</label>
    <input type="text" class="form-control" id="last-name"placeholder="last name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email">
  </div>
  <button type="submit" id="submit" class="btn btn-primary">Submit</button>
</form>
</div>

  <button type="submit" id="getData" class="btn btn-primary">Search data</button>

<div class="col-md-6">
<table class="table table-striped" id='dataTbl'>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>


</body>
</html>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getDatabase, set, ref ,push, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    // Your configaration code here
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = getDatabase(app);

  // write data
  submit.addEventListener('click',(e) => {
    var firstName = document.getElementById('first-name').value;  
    var lastName = document.getElementById('last-name').value;  
    var email = document.getElementById('email').value;  

    const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'users/' + userId), {
    firstName: firstName,
    lastName: lastName,
    email : email
   });
   alert('saved');
  });

  // read data
  getData.addEventListener('click',(e) => {

    $('#dataTbl td').remove();
    var rowNum = 0; 
    const dbRef = ref(database, 'users/');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      // ...
      rowNum += 1; 
      var row = "<tr><td>" + rowNum + "</td><td>" + childData.firstName + "</td><td>" + childData.lastName + "</td><td>" + childData.email + "</td></tr>"

      $(row).appendTo('#dataTbl');
      
      });
    }, {
       onlyOnce: true
    });


  });
</script>

*/