import React, { Component } from 'react';
import Jumbtron from '../../components/Jumbotron';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { ListItem, List } from '../../components/List';
import API from '../../utils/API';

class Submit extends Component {
  state = {
    contents: [],
    template: "",
    salonName: "",
    salonAddress: "",
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent = () => {
    API.getAllContents()
      .then(res =>
        this.setState({
          contents: res.data, template: "", salonName: "", salonAddress: "",
        }))
      .catch(err => console.log(err));
  };

  deleteContent = id => {
    API.deleteContent(id)
      .then(res => this.loadContent())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbtron />
          <Row>
            <Col size='md-6 sm-12'>
              {this.state.contents.length ? (
                <List>
                  {this.state.contents.map(content => (
                    <ListItem key={content._id}>
                      <Link to={"/contents/" + content._id}>
                        <strong>
                          {content.salonName}  || {content.template}  || {content.salonAddress}
                        </strong>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No New Content Submitted</h3>
              )}

            </Col>
            <Col size='md-6 sm-12'>

            </Col>
          </Row>
        </Container >
      </div>

    )
  }
}

export default Submit;