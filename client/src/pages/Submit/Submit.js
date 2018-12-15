import React, { Component } from 'react';
import Jumbtron from '../../components/Jumbotron';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { Input, TextArea, FormBtn, Label } from '../../components/Form';
import API from '../../utils/API';
import { Card, CardHeader } from '../../components/Card';
import { Select } from '../../components/Form/Select';

class Submit extends Component {
  state = {
    template: [],
    salonName: "",
    salonAddress: "",
    busPhone: "",
    OpenningHrs: "",
    quote: "",
    intro: "",
    weOffer: "",
    signature: ""
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent = () => {
    API.getContent()
      .then(res =>
        this.setState({
          content: res.data,
          template: "",
          salonName: "",
          salonAddress: "",
          busPhone: "",
          OpenningHrs: "",
          quote: "",
          intro: "",
          weOffer: "",
          signature: ""
        }))
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.salonName && this.state.quote) {
      API.saveContent({
        template: this.state.template,
        salonName: this.state.salonName,
        salonAddress: this.state.salonAddress,
        busPhone: this.state.busPhone,
        OpenningHrs: this.state.OpenningHrs,
        quote: this.state.quote,
        intro: this.state.intro,
        weOffer: this.state.weOffer,
        signature: this.state.signature
      })
        .then(res => this.loadContent())
        .cath(err => console.log(err))
    }
  };

  render() {
    return (
      <Container>
        <Jumbtron>
          <h1 className="display-4 text-center text-light">Puha Website Content Provider</h1>
        </Jumbtron>
        <form class='mb-5'>
          <Card>
            <CardHeader>Select Website Template</CardHeader>
            <Select />
          </Card>

          <Card>
            <CardHeader>Salon Information</CardHeader>
            <div class="form-group mx-3">
              <Label
                for='salon-name'
              >
                Salon Name
              </Label>
              <Input
                id='salon-name'
                aria-describedby="salonName"
              />
            </div>

            <div class="form-group mx-3">
              <Label
                for='salon-address'
              >
                Salon Address
              </Label>
              <Input
                id='salon-address'
                aria-describedby="salonAddress"
              />
            </div>
            <div class="form-group mx-3">
              <Label
                for='salon-number'
              >
                Salon Phone Number
              </Label>
              <Input
                id='salon-number'
                aria-describedby="salonNum"
              />
            </div>
            <div class="form-group mx-3">
              <Label
                for='openning-hrs'
              >
                Openning Hours
              </Label>
              <TextArea
                id='open-hrs'
                aria-describedby='openningHrs'
              />
            </div>
          </Card>

          <Card>
            <CardHeader>Add Introduction</CardHeader>
            <div class="form-group mx-3">
              <label for="bus-quote">Business Quote</label>
              <Label
              >
                Salon Quote
              </Label>
              <a class="float-right" href='/quote-samples'>View Quote Sample</a>
              <TextArea
                id='quote'
                aria-describedby='openningHrs'
                aria-describedby="quote"
                rows='2'
              />
            </div>
            <div class="form-group mx-3">
              <Label
                for='about-us'
              >
                About Us
              </Label>
              <a class="float-right" href='/about-us-sample'>View About US Sample</a>
              <TextArea
                id='about-us'
                aria-describedby='about-us'
                aria-describedby="quote"
                rows='5'
              />
            </div>
            <div class="form-group mx-3">
              <label for="we-offer">We Offer</label>
              <Label
                for='we-offer'
              >
                We Offer
              </Label>
              <TextArea
                id='we-offer'
                aria-describedby='weOffer'
                rows='2'
              />
              <p class='mt-3'>Please email a photo of your service list/catalogue to phung@puha.biz
                <a class='btn btn-outline-warning mx-3' href="mailto:phung@puha.biz">Email Your Pictures</a>
              </p>

            </div>
          </Card>

          <Card>
            <CardHeader>Add Signature/Special Services (Optional)</CardHeader>
            <div class="form-group mx-3">
              <TextArea
                id='signature-services'
                aria-describedby='signatureServices'
                rows='5'
                placeholder='Provide contents of all Signature Services'
              />
            </div>
          </Card>

          <Card>
            <CardHeader>Salon/Gallery Photos</CardHeader>
            <div class="mx-3">
              <p class='mt-2'>Please email as much as possible photos of your service/products gallery, and your indoor/outdoor salon to phung@puha.biz
                    <a class='btn btn-outline-warning mx-3' href="mailto:phung@puha.biz">Email Your Photos</a>
              </p>
            </div>

          </Card>
          <FormBtn
            type='submit'
            id='submit-content'
          >
            Submit
          </FormBtn>
        </form >
      </Container >
    )

  }
}

export default Submit;