class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hi, How can i help you?"
    );
    this.updateChatbotState(greetingMessage);
  }

  unknown() {
    const greetingMessage = this.createChatBotMessage(
      "Hi, I didn't understand your question. Please check the available options",
      {
        widget: "applicationTypes",
      }
    );
    this.updateChatbotState(greetingMessage);
  }

  handleFrontEnd = () => {
    const message = this.createChatBotMessage(
      "Great, These are the famous front end frameworks that I support:",
      {
        widget: "frontend",
      }
    );

    this.updateChatbotState(message);
  };

  handleBackEnd = () => {
    const message = this.createChatBotMessage(
      "Great, These are the famous front end frameworks that I support:",
      {
        widget: "backend",
      }
    );

    this.updateChatbotState(message);
  };

  handleDatabase = () => {
    const message = this.createChatBotMessage(
      "Great, These are the famous databases that I support:",
      {
        widget: "database",
      }
    );

    this.updateChatbotState(message);
  };

  handleDeployment = () => {
    const message = this.createChatBotMessage(
      "Great, These are the famous deployment tools that I support:",
      {
        widget: "deployment",
      }
    );

    this.updateChatbotState(message);
  };

  handleContinuosIntegration = () => {
    const message = this.createChatBotMessage(
      "Great, These are the famous CI-CD tools that I support:",
      {
        widget: "ci",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
