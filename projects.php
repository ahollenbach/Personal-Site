<?php 
	$title = "Projects";
    include("header.php"); 
?>
<script src="js/projects.js"></script>

<h1><span class="highlight">Projects</span></h1>

<div id="projects-table">
<?php
    $projects_info = json_decode(file_get_contents("data/projects.json"), true);

    $projects = $projects_info["projects"];
    $statuses = $projects_info["status"];

    foreach($projects as $project) {
    	echo 
    	"<div class='project'>
    		<h3>{$project['name']}</h3>
    		<h5 class='short-descr'>{$project['shortDescription']}</h5>
            <div class='project-descr project-section'>
                <h4>Description</h4>
                <p>{$project['description']}</p>
            </div>

            <div class='project-activity project-section'>
                <h4>Recent Activity</h4>";
                foreach($project['activity'] as $activity_event) {
                    echo "<p>{$activity_event}</p>";
                }
        echo "</div>

            <div class='project-info'>
                <div class='code-link' title='Link to code'>
                <a href='{$project['linkToCode']}'>
                    <p class='info-label'>Code</p>
                    <img src='img/project-icons/code.png' />
                </a>
                </div><div class='live-link' title='Link to live site'>
                <a href='{$project['linkToLive']}'>
                    <p class='info-label'>Live</p>
                    <img src='img/project-icons/live.png' />
                </a>
                </div><div class='progress' title='Progress'>
                    <p class='info-label'>Progress</p>
                    <img src='img/project-icons/code.png' />
                </div><div class='status' title='Project status'>
                    <p class='info-label'>Status</p>
                    <img src='img/project-icons/code.png' />
                </div>
            </div>
	    </div>";
    }
?>
</div>

<?php include("footer.php"); ?>