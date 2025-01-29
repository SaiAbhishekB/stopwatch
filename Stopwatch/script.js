let startTime, updatedTime, difference;
        let running = false;
        let interval;
        let lapCounter = 1;

        function startStopwatch() {
            if (!running) {
                startTime = new Date().getTime() - (difference || 0);
                interval = setInterval(updateTime, 10);
                running = true;
            }
        }

        function stopStopwatch() {
            if (running) {
                clearInterval(interval);
                running = false;
            }
        }

        function resetStopwatch() {
            clearInterval(interval);
            running = false;
            difference = 0;
            lapCounter = 1;
            document.getElementById("time").innerText = "00:00:00.000";
            document.getElementById("lapTimes").innerHTML = "";
        }

        function updateTime() {
            updatedTime = new Date().getTime();
            difference = updatedTime - startTime;
            let hours = Math.floor(difference / 3600000);
            let minutes = Math.floor((difference % 3600000) / 60000);
            let seconds = Math.floor((difference % 60000) / 1000);
            let milliseconds = difference % 1000;
            
            document.getElementById("time").innerText = 
                `${String(hours).padStart(2, '0')}:` +
                `${String(minutes).padStart(2, '0')}:` +
                `${String(seconds).padStart(2, '0')}.` +
                `${String(milliseconds).padStart(3, '0')}`;
        }

        function recordLap() {
            if (running) {
                let lapTime = document.getElementById("time").innerText;
                let lapRecord = document.createElement("div");
                lapRecord.innerText = `Lap ${lapCounter}: ${lapTime}`;
                document.getElementById("lapTimes").appendChild(lapRecord);
                lapCounter++;
            }
        }