import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
})
export class Page4Page {

  data={"required":["Load_Type","Company Name"],
  "properties":{
    "Load_Type":{"lable":"Load Type",
                  "type":"text",
                  "class":"secondry-content",
                  "values":["10","20"]
                },

    "Email_Type":{"lable":"Email Type",
                "type":"text",
                "class":"secondry-content",
                "values":["Yahoo.com","gmail.com","rediffmail.com","Outlook.com"]
              },
            }
        }

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/speed.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/images.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/logo.png",
    }
  ];
}
