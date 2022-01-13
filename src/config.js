import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import WidgetOptions from "./components/WidgetOptions/WidgetOptions";
import OptionList from "./components/OptionList/OptionList";

const botName = "Maria";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm ${botName} from Application Support Team. What do you want to know?`,
      {
        widget: "applicationTypes",
      }
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "applicationTypes",
      widgetFunc: (props) => <WidgetOptions {...props} />,
    },
    {
      widgetName: "frontend",
      widgetFunc: (props) => <OptionList {...props} />,
      props: {
        options: [
          {
            text: "React JS",
            url: "https://reactjs.org/",
            id: 1,
          },
          {
            text: "Angular JS",
            url: "https://angular.io/",
            id: 2,
          },
          {
            text: "Material UI",
            url: "https://mui.com/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "backend",
      widgetFunc: (props) => <OptionList {...props} />,
      props: {
        options: [
          {
            text: "Java SpringBoot",
            url: "https://spring.io/projects/spring-boot",
            id: 1,
          },
          {
            text: "ASP.Net Core",
            url: "https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet-core",
            id: 2,
          },
          {
            text: "Go",
            url: "https://go.dev/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "database",
      widgetFunc: (props) => <OptionList {...props} />,
      props: {
        options: [
          {
            text: "MySql",
            url: "https://www.mysql.com/",
            id: 1,
          },
          {
            text: "MariaDB",
            url: "https://mariadb.org/",
            id: 2,
          },
          {
            text: "SQL Server 2019",
            url: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "deployment",
      widgetFunc: (props) => <OptionList {...props} />,
      props: {
        options: [
          {
            text: "Ansible",
            url: "https://www.ansible.com/",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "ci",
      widgetFunc: (props) => <OptionList {...props} />,
      props: {
        options: [
          {
            text: "Jenkins",
            url: "https://www.jenkins.io/",
            id: 1,
          },
          {
            text: "TeamCity",
            url: "https://www.jetbrains.com/teamcity/",
            id: 2,
          },
          {
            text: "GoCD",
            url: "https://www.gocd.org/",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
