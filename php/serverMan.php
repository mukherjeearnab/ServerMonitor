<?php
    if(isset($_GET['action']) && isset($_GET['pass'])) {
        if($_GET['pass'] == 'PASSWORD') {
            if($_GET['action'] == "reboot") {
                exec("sudo reboot");
                echo "The Server is Rebooting . . . .";
            }
            elseif($_GET['action'] == "shutdown") {
                exec("sudo shutdown");
                echo "The Server will shutdown in 60 seconds.";
            }
        }
    }
?>