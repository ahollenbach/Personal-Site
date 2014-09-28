<?php 
	$title = "Projects";
    include("header.php"); 
?>
<script src="js/projects.js"></script>

<div id="projects-table">
<?php
    $projects_info = json_decode(file_get_contents("data/projects.json"), true);

    // GitHub requires a User Agent
    $gitHubOptions = array(
      'http'=>array(
        'method'=>"GET",
        'header'=>"Accept-language: en\r\n" .
                  "Cookie: foo=bar\r\n" .  // check function.stream-context-create on php.net
                  "User-Agent: AndrewHollenbach.com\r\n"
      )
    );
    //$gitHubcontext = stream_context_create($gitHubOptions);
    // /Github

    //$repos = json_decode(file_get_contents("https://api.github.com/users/ahollenbach/repos", false, $gitHubcontext));
    //$commits = json_decode("https://api.github.com/repos/ahollenbach/Personal-Site/commits");

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
        echo "</div>";
        echo "<div class='project-info'>";

        // Add any additional information/links
        if(array_key_exists("linkToCode", $project)) {
            echo    "<div class='code-link' title='Link to code'>
                        <a href='{$project['linkToCode']}' target='_blank'>
                            <p class='info-label'>Code</p>
                            <img src='img/project-icons/code.png' />
                        </a>
                    </div>";
        }
        if(array_key_exists("linkToLive", $project)) {
            echo    "<div class='live-link' title='Link to live site'>
                        <a href='{$project['linkToLive']}' target='_blank'>
                            <p class='info-label'>Live</p>
                            <img src='img/project-icons/live.png' />
                        </a>
                    </div>";
        }

        echo "</div>
            <span class='more'>more...</span>
	    </div>";
    }
?>
        <div class="project">
            <p class="sidenote">View more open source projects on <a href="http://www.github.com/ahollenbach" target='_blank'>GitHub</a>.</p>
        </div>
</div>

<?php include("footer.php"); ?>