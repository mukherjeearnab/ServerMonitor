<?php
    if(isset($_GET['action']) && $_GET['action'] != NULL) {
        if($_GET['action'] == 'cpuTemp')
            echo getCPUTemp();
        if($_GET['action'] == 'cpuUsage')
            echo getCPUUsage();
        if($_GET['action'] == 'ramUsage')
            echo getRAMUsage();
            if($_GET['action'] == 'ramUsageP')
            echo getRAMUsageP();
        if($_GET['action'] == 'ramTotal')
            echo getTotalRAM();
        if($_GET['action'] == 'ramAvail')
            echo getRAMAvail();
        if($_GET['action'] == 'diskAvail')
            echo getDiskAvail();
        if($_GET['action'] == 'diskUsage')
            echo getDiskUsage();
        if($_GET['action'] == 'diskUsageP')
            echo getDiskUsageP();
        if($_GET['action'] == 'diskTotal')
            echo getDiskTotal();
        if($_GET['action'] == 'checkLine')
            echo checkLine();
    }


    function getCPUTemp() {
        $output = shell_exec('cat /sys/class/thermal/thermal_zone0/temp');
        return strval(number_format($output/1000, 1, '.', ''))." &deg;C";
    }
    
    function getRAMUsage() {
        $free = shell_exec('free');
        $free = (string)trim($free);
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        $memory_usage = intval($mem[2]/1024);
        return strval($memory_usage)." MB";
    }

    function getRAMUsageP() {
        $free = shell_exec('free');
        $free = (string)trim($free);
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        $memory_usage = $mem[2]/$mem[1]*100;
        return strval(intval($memory_usage)). " %";
    }

    function getRAMAvail() {
        $free = shell_exec('free');
        $free = (string)trim($free);
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        $memory_avail = intval(($mem[1]-$mem[2])/1024);
        return strval($memory_avail)." MB";
    }

    function getTotalRAM() {
        $free = shell_exec('free');
        $free = (string)trim($free);
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        return strval(intval($mem[1]/1024))." MB";
    }

    function getCPUUsage() {
        $load = sys_getloadavg();
        return strval($load[0])." %";
    }

    function getDiskTotal() {
        echo strval(number_format(disk_total_space("/")/(1024*1024*1024), 2, '.', ''))." GB";
    }

    function getDiskAvail() {
        echo strval(number_format(disk_free_space("/")/(1024*1024*1024), 2, '.', ''))." GB";
    }

    function getDiskUsage() {
        $used = (disk_total_space("/") - disk_free_space("/"))/(1024*1024*1024);
        echo strval(number_format($used, 2, '.', ''))." GB";
    }

    function getDiskUsageP() {
        $used = disk_total_space("/") - disk_free_space("/");
        echo strval(number_format($used/disk_total_space("/")*100, 2, '.', ''))." %";
    }

    function checkLine() {
        echo "online";
    }
?>