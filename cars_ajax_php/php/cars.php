<?php
    require_once("./db_conn.php");
    $todo   = $_GET['todo'];

    $returnObj = array();
    if($todo == 'getCars') {
        
        
        $selectQry = $conn->query("SELECT * FROM cars_collection");
        $resultCnt = $selectQry->num_rows;

        $myData = array();
        if($resultCnt > 0) {
            while ($results = $selectQry->fetch_assoc()){
                $myData[] = $results;
            }
        }  

        $returnObj = array('data' => $myData);
        $returnObj["success"] = true;


    } else {
        $returnObj["success"] = false;
        $returnObj["message"] = "Invalid request";
    }
    echo json_encode($returnObj);
?>