<?php
include("config.php");

$outputmode = $_POST["outputmode"];
if($outputmode == 2) {$auto = 0; $manual = 0;}
elseif($outputmode == 1) {$auto = 0; $manual = 1;}
elseif($outputmode == 0) {$auto = 1; $manual = 0;}

$trangthaiden1 = $_POST["trangthaiden1"];
$trangthaiden2 = $_POST["trangthaiden2"];
$trangthaiden3 = $_POST["trangthaiden3"];

$list=array('R' => 0, 'G' => 1, 'Y' => 2);
$den1 = array_search($trangthaiden1,$list);
$den2 = array_search($trangthaiden2,$list);
$den3 = array_search($trangthaiden3,$list);

if ($_POST["timeleft1"] == -1){
    $timeleft1 = "NULL";
    $timeleft2 = "NULL";
    $timeleft3 = "NULL";

    $r1 = "NULL";
    $r2 = "NULL";
    $r3 = "NULL";
    $y1 = "NULL";
    $y2 = "NULL";
    $y3 = "NULL";
    $g1 = "NULL";
    $g2 = "NULL";
    $g3 = "NULL";
}
else {
    $timeleft1 = $_POST["timeleft1"];
    $timeleft2 = $_POST["timeleft2"];
    $timeleft3 = $_POST["timeleft3"];
    
    $r1 = $_POST["stt1r"];
    $r2 = $_POST["stt2r"];
    $r3 = $_POST["stt3r"];
    $y1 = $_POST["stt1y"];
    $y2 = $_POST["stt2y"];
    $y3 = $_POST["stt3y"];
    $g1 = $_POST["stt1g"];
    $g2 = $_POST["stt2g"];
    $g3 = $_POST["stt3g"];
}

//send data to database

$sql1 = "update Mode set Auto = $auto, Manual =$manual;";
$sql2 = "update Table1_Auto set 
Red = (case when STT = 1 then $r1 when STT = 2 then $r2 when STT = 3 then $r3 end),
Yellow = (case when STT = 1 then $y1 when STT = 2 then $y2 when STT = 3 then $y3 end),
Green = (case when STT = 1 then $g1 when STT = 2 then $g2 when STT = 3 then $g3 end)
where STT in (1, 2, 3);";
$sql3 = "update Table2_Realtime set 
Color = (case when STT = 1 then '$den1' when STT = 2 then '$den2' when STT = 3 then '$den3' end),
Time = (case when STT = 1 then $timeleft1 when STT = 2 then $timeleft2 when STT = 3 then $timeleft3 end)
where STT in (1, 2, 3); ";

mysqli_query($conn, $sql1);
mysqli_query($conn, $sql2);
mysqli_query($conn, $sql3);

mysqli_close($conn);

?>
