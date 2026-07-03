function runTask(callback) {
    callback();
}

function finishTask() {
    console.log("Task Finished");
}

runTask(finishTask);