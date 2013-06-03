<?php 
    echo '<script type="text/javascript" src="show_hide.js"></script>';
    if (isset($_GET['p'])) 
    { 
        $page = $_GET['p'];

        if ($page == 'home' || $page == 'Home')
        {
            echo "<script type='text/javascript'>";
            echo "show('Home','Media','Code', 'Resume','Contact');";
            echo "</script>";
        }

        else if ($page == 'code' || $page == 'Code')
        {
            echo "<script type='text/javascript'>";
            echo "show('Code','Media','Home', 'Resume','Contact');";
            echo "</script>";
        }

        else if ($page == 'resume' || $page == 'Resume')
        {
            echo "<script type='text/javascript'>";
            echo "show('Resume','Media','Home', 'Code','Contact');";
            echo "</script>";
        }

        else if ($page == 'contact' || $page == 'Contact')
        {
            echo "<script type='text/javascript'>";
            echo "show('Contact','Media','Home', 'Resume','Code');";
            echo "</script>";
        }
    } 
?>