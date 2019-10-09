import React from "react";

import Contact from "./Contact";

const contacts = [
  {
    name: "Mickey",
    avatar: "https://www.new-discount.com/8292-large_default/coussin-mickey-disney-forme.jpg",
    online: "true"
  },

  {
    name: "Clark Kent",
    avatar: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/50623512_1499243853541956_1174998023055343616_n.jpg?_nc_cat=109&_nc_oc=AQmf1xpGNVV7we3QbWMq_tGSCefVZoGNDQeNE-lUZpoZfO1n_mLNsx4mxrdxJYkqmn4&_nc_ht=scontent-cdg2-1.xx&oh=4f12c3a229e35b9194969bf2b955b16a&oe=5E3054B8",
    online: "true"
  },

  {
    name: "Wonder Woman",
    avatar: "http://s1.lprs1.fr/images/2017/07/24/7153494_mv5bmme2m2i4mwytm2nioc00ogm0ltllnwqtzdhlmjnlnjg5nzuwxkeyxkfqcgdeqxvynjczmdc2ndq-v1-uy666-ux666-al_940x500.jpg",
    online: "false"
  },

  {
    name: "Zinedine Zidane",
    avatar: "https://cdn.vox-cdn.com/thumbor/mAiHNgAs25r48QTY36SEZR7G4vQ=/0x0:4000x2667/1200x800/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/65297070/1176416167.jpg.0.jpg",
    online: "false"
  },

  {
    name: "Anthony Joshua",
    avatar: "https://specials-images.forbesimg.com/imageserve/5cfe66fa4c687b0008592ec8/416x416.jpg?background=000000&cropX1=120&cropX2=2551&cropY1=255&cropY2=2687",
    online: "true"
  }
];

const ContactList = () => (
  <div>
    {contacts.map((contact, index) => {
      return (
        <Contact
          name={contact.name}
          avatar={contact.avatar}
          online={contact.online}
          key={index}
        />
      );
    })}
  </div>
);

export default ContactList;
