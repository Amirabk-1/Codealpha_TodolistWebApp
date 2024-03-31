<?php
include 'connect.php'; 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List App</title>
    <link rel="stylesheet" href="styles.css">
    <link href='https://cdn.jsdelivr.net/npm/fullcalendar@5.11.0/main.min.css' rel='stylesheet' />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <!--<script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.11.0/main.min.js'></script> -->
</head>
<body>
    <div class="outer-container">
        <div class="container">
            <!-- Sidebar -->
            <div class="sidebar">
                <div class="current-date" id="currentDate"></div>
                <ul>
                    <li> <img src="img/dashboard.png" alt=""><a href="#">Dashboard</a></li>
                    <li> <img src="img/task.png" alt=""><a href="#">My Tasks</a></li>
                    <li> <img src="img/calendar.png" alt=""><a href="#">Calendar</a></li>
                    <li> <img src="img/settings.png" alt=""><a href="#">Settings</a></li>
                </ul>
            </div>

            <!-- Main Content -->
            <div class="main-content">
                <!-- Search Bar -->
                <div class="search-bar">
                    <div class="search-container">
                        <input type="text" placeholder="Search...">
                        <button class="search-button"> <img src="img/search.png" alt=""></i></button>
                    </div>
                    <img class="notification" src="img/notification.png" alt="">
                    <img class="user" src="img/user1.png" alt="">
                </div>
                <!-- Main content-1 -->
                <div class="main-content-1">
                    <!-- Tasks List -->
                    <div class="tasks-list">
                        <h2 class="my-tasks">My Tasks</h2>
                        <div class="task">
                            <input type="checkbox" id="task1">
                            <label for="task1">Task 1</label>
                        </div>
                        <button id="addTaskButton">+</button>

                    </div>

                    <!-- Adding new task -->
                    <div class="modal" id="taskModal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <h2 class="new-task-h2">Add New Task</h2>
                            <!--<form id="taskForm" name="taskForm" action="insertion.php" method="post"> -->
                            <input type="text" id="taskNameInput" name="taskNameInput" placeholder="Enter task name..." >
                            <button type="submit" id="confirmAddTask" name="confirmAddTask"> ADD </button>
                            <!--</form>-->
                        </div>
                    </div>

                    <!--- Notes -->
                    <div class="notes">
                        <h2 class="my-notes">My Notes</h2>
                        <button id="addNoteButton">+</button>
                        <div class="notes-container">
                            <div class="note">
                                <h1>Shopping list</h1>
                                <p>Milk</p>
                                <p>Bread</p>
                                <p>Eggs</p>
                            </div>
                        </div>
                    </div>


                    <!-- Calendar -->
                    <div class="calendar" id="calendar">
                        <header class="calendar-header">
                            <p class="calendar-current-date"></p>
                            <div class="calendar-navigation">
                                <span id="calendar-prev"
                                    class="material-symbols-rounded">
                                        <img class="chevron" src="img/left-chevron.png" alt="">
                                </span>
                                <span id="calendar-next"
                                    class="material-symbols-rounded">
                                        <img class="chevron" src="img/chevron.png" alt="">
                                </span>
                            </div>
                        </header>
                
                        <div class="calendar-body">
                            <ul class="calendar-weekdays">
                                <li>Sun</li>
                                <li>Mon</li>
                                <li>Tue</li>
                                <li>Wed</li>
                                <li>Thu</li>
                                <li>Fri</li>
                                <li>Sat</li>
                            </ul>
                            <ul class="calendar-dates"></ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
