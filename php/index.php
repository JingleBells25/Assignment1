
<?php

$username = $_GET['username'];
$password = $_GET['password'];

if ($username === 'bryan') {
    

?>


<!DOCTYPE html>
<html lang = "en-us">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width-device-width, initial scale = 1.0">
        <title>Gym Management System</title>
        <link rel="stylesheet" href="../css/member_console.css" type="text/css">
        <script src="scripts/scripts.js" type="text/javascript"></script>
        <script src="scripts/vrlms_load_data.js" type="text/javascript"></script>
    </head>
    <body>
    <main id="mainfield">
       
                                  <!-- Hamburger Menu-->
                                  <div class="col-1">
                                    <div class="nav"> 
                                        <label class="dropdown-label">&#9776;</label>
                                        <div class = "menu-items">
                                            <a href="#">Sign Out</a>
                                        </div>
                                  </div>
                           </div>
        <!-- Grid VIEW-->
            <header class="row">

                <div>
                    <img src="logo.png" alt="">
                </div>
                <!-- Console Title-->
                    <div class="col-10 title">
                        <h1>The Fitness Universe</h1>    
                        <h3>Live your Best Life</h3>
                    </div>
                    
                    <div class="col-4">
                        <h5>Name: <?php echo $username ?></h5> 
                    </div>

                    <div class="col-10 member">
                        <h5>Membership #: 90021</h5>
                    </div>
            </header>
            
            <section>
                <!--Flexbox-->
                <div class="flex-container">
                    <div class="flex-item"><a href="members.html">My Account</a></div>
                    <div class="flex-item"><a href="members.html">Book a Training Session</a></div>
                </div>

                <div class="flex-container">
                    <div class="flex-item"><a href="trainers.html">Register for a Class</a></div>
                    <div class="flex-item"><a href="trainers.html">Book a Court</a></div>
                </div>
            </section>
        </main>    
 </body>
</html>
<?php
}
else {
    echo "Invalid login";
}
?>