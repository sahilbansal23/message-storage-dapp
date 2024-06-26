pragma solidity ^0.8.0;

contract MessageStorage {
    string private message;
    address private admin;

    constructor(string memory initialMessage) {
        message = initialMessage;
        admin = msg.sender;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        require(msg.sender == admin, "Only admin can set the message");
        message = newMessage;
    }
}
