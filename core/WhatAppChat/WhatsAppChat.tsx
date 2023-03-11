import { Poppins } from "@next/font/google";
import React from "react";

// @ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { poppins } from "../../lib/app.interface";

const WhatsAppChat = () => {
  return (
    <WhatsAppWidget
      className={`${poppins.className}`}
      phoneNo={`${process.env.PHONENO}`}
      position="right"
      widgetWidth="20rem"
      widgetWidthMobile="16rem"
      autoOpen={false}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, I need help"
      iconSize="48"
      iconColor="#ffffff"
      iconBgColor="#266590"
      headerIcon=""
      headerIconColor="#266590"
      headerTxtColor="#ffffff"
      headerBgColor="#266590"
      headerTitle="Gripas Support"
      headerCaption="Online"
      bodyBgColor="#ffffff"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#d8d5d5"
      placeholder="Type a message.."
      btnBgColor="#266590"
      btnTxt="Start Chat"
      btnTxtColor="#ffffff"
    />
  );
};

export default WhatsAppChat;
