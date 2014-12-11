<!DOCTYPE html>
<html>
    <head>
        <title> CATCHING UP WITH THE HYPES </title>
        <link rel="stylesheet" href="instagram.css">
        <link href='http://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
    </head>
    
    <body>
      <?php
            // define variables and set to empty values
            $firstnameErr = $emailErr = "";
            $firstname = $email = "";

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
               if (empty($_POST["firstname"])) {
                 $firstnameErr = "Name is required";
               } else {
                 $name = test_input($_POST["firstname"]);
                 // check if name only contains letters and whitespace
                 if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
                   $firstnameErr = "Only letters and white space allowed"; 
                 }
               }
               

               if (empty($_POST["email"])) {
                 $emailErr = "Email is required";
               } else {
                 $email = test_input($_POST["email"]);
                 // check if e-mail address is well-formed
                 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                   $emailErr = "Invalid email format"; 
                 }
               }                         
             echo"OPK!@!!!!";
               
            }

            function test_input($data) {
               $data = trim($data);
               $data = stripslashes($data);
               $data = htmlspecialchars($data);
               return $data;
            }
            ?>

 <div id="logo">
          <a href="index.php">
            <img src="img/logo.jpg" width="80" height="80">
          </a>
        </div>

        <div class = "box_line">
            <div id="txt">
                Register your Name and E-mail,<br> and check out Instagram images from Korea!<br>
                <div class = "instagram">
                    <form action="/insta/home.html" method="post" name="myform" onsubmit="return loginForm_submit(this);">
                        
                            <p><b>Name</b></p>
                            <span class="error">* </span><br>
                            <input type="text" class="box" name="firstname"><br>
                            
                            <p><b>Email</b></p> 
                            <span class="error">* </span><br>
                            <input type="text" class="box" name="email"><br>

                            <p><span class="error">* required field.</span></p><br>
                            <div id="inside">
                                <input type="submit" class="submitBt" value='Submit'><br>
                            </div>
                    </form>

                </div> 
            </div>
        </div>

 <script>
 function loginForm_submit(f)
 {
        if (f.firstname.value=="") {
            alert("Name is required");
            return false;
        }
        if (f.email.value=="") {
            alert("Email is required");
            return false;
        }
        
        var userEmail = f.email.value;

        if (userEmail.indexOf("@") < 0 ) {
        alert("Invalid email format");
        return false;
        }
        if (userEmail.indexOf(".") < 0 ) {
        alert("Invalid email format");
        return false;
        }
        
 }
 </script>
        
     </body>
</html> 
