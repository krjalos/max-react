class MeetupModel {
  id: string;
  title: string;
  image: string;
  address: string;
  description:  string;
  favorite: boolean;

  constructor(meetup : {
    id: string;
    title: string;
    image: string;
    address: string;
    description:  string;
    favorite: boolean;
  }) {
    this.id = meetup.id;
    this.title = meetup.title;
    this.image = meetup.image;
    this.address = meetup.address;
    this.description = meetup.description;
    this.favorite = meetup.favorite;
  }
}

export default MeetupModel;