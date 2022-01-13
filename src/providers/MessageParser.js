// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("front end")) {
      this.actionProvider.handleFrontEnd();
    } else if (lowerCaseMessage.includes("back end")) {
      this.actionProvider.handleBackEnd();
    } else if (lowerCaseMessage.includes("database")) {
      this.actionProvider.handleDatabase();
    } else if (lowerCaseMessage.includes("deployment")) {
      this.actionProvider.handleDeployment();
    } else if (lowerCaseMessage.includes("continuous integration")) {
      this.actionProvider.handleContinuosIntegration();
    } else {
      this.actionProvider.unknown();
    }
  }
}

export default MessageParser;
