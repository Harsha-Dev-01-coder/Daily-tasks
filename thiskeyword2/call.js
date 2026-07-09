function showPlayer() {
    console.log(this.username);
}

const player = {
    username: "Shadow"
};

showPlayer.call(player);