const account = {
    owner: "LUZY"
};

function showOwner() {
    console.log(this.owner);
}

const handler = showOwner.bind(account);

handler();