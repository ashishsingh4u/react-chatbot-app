// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("frontend")) {
      this.actionProvider.handleFrontEnd();
    } else if (lowerCaseMessage.includes("backend")) {
      this.actionProvider.handleBackEnd();
    } else if (lowerCaseMessage.includes("database")) {
      this.actionProvider.handleDatabase();
    } else if (lowerCaseMessage.includes("deployment")) {
      this.actionProvider.handleDeployment();
    } else if (
      lowerCaseMessage.includes("continuous integration") ||
      lowerCaseMessage.includes("ci") ||
      lowerCaseMessage.includes("cd")
    ) {
      this.actionProvider.handleContinuosIntegration();
    } else {
      this.actionProvider.unknown();
    }
  }
}

export default MessageParser;
