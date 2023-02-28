import { Component } from "react";
import Card from 'react-bootstrap/Card';

class Profile extends Component {


  render() {
    let names = ['Ethan Storm', 'Sheldon Pierce', 'Darran Holmes']
    /* TODO: render information about the developers */
    return (names.map(item => {

      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              {item}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      )
      }))
  }
};
export default Profile;
