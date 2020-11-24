import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, Container,DropdownMenu, DropdownItem, Alert } from 'reactstrap';
import axios from 'axios';

class AdminFormAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      title: 'Product title',
      color: ["blue", "red","black"],
      size: 'XS, L',
      tags: 'Polos',
      images: 'https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg',
      description: '',
      price: 0,
      success: false
    };
    
  }

  toggle = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }
  

  onSubmit = (title, price, color, size, tags, images, description) => {
    axios.post('/api/add/item', {
      title,
      price,
      color: (color.slice(0)+'').replace(/\s/g,'').split(','),
      size: (size.slice(0)+'').replace(/\s/g,'').split(','),
      tags: (tags.slice(0)+'').replace(/\s/g,'').split(','),
      images: (images.slice(0)+'').replace(/\s/g,'').split(','),
      description
    })
    .then(() => {
      window.location.reload(false)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onChangeTitle = (e) => this.setState({title: e.target.value})
  onChangePrice = (e) => this.setState({price: e.target.value})
  onChangeColor = (e) => this.setState({color: [e.target.value]})
  onChangesize = (e) => this.setState({size: e.target.value})
  onChangeTags = (e) => this.setState({tags: [e.target.value]})
  onChangeImages = (e) => this.setState({images: [e.target.value]})
  onChangeDescription = (e) => this.setState({ description: e.target.value })


  render() {
    const { title, price, color, size, tags, images, description } = this.state
    return (
      <Container style={{paddingTop: '50px', paddingBottom:'50px'}}>
      <h1>Add new item</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Item's name</Label>
          <Input placeholder='example: cool polo' value={this.state.title} onChange={this.onChangeTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input placeholder='example: 43' value={this.state.price} onChange={this.onChangePrice} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">color available</Label>
          <Input type="select" name="select" placeholder='example: color1, color2, color3' value={this.state.color} onChange={this.onChangeColor} id="">
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="blue">blue</option>
            <option value="red, blue">red, blue</option>
            <option value="red, black">red, black</option>
            <option value="blue, black">blue, black</option>
            <option value="red, blue, black">red, blue, black</option>
          </Input> 
          </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">size available</Label>
          <Input type="select" name="select" placeholder='example: XS, L, XL' value={this.state.size} onChange={this.onChangesize} id="">
            <option value="XS">XS</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XS, L">XS, L</option>
            <option value="XS, XL">XS, XL</option>
            <option value="L, XL">L, XL</option>
            <option value="XS, L, XL">XS, L, XL</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Category</Label>
          <Input type="select" name="select" placeholder='example: Polo' value={this.state.tags} onChange={this.onChangeTags} id="" >
          <option value="Polos">Polos</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
          <option value="Jackets">Jackets</option>
          <option value="Dresses">Dresses</option>
          <option value="Cardigans">Cardigans</option>
          <option value="Tops">Tops</option>
          <option value="Trench, Coats">Trench, Coats</option>
        </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Images</Label>
          <Input placeholder='example: http://link1.jpg, http://link2.jpg' value={this.state.images} onChange={this.onChangeImages} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input type="textarea" value={this.state.description} onChange={this.onChangeDescription} />
        </FormGroup>
      </Form>
      <Button onClick={()=>this.onSubmit(
        title, 
        price, 
        color, 
        size, 
        tags,
        images,
        description
        )}>Submit</Button>
      </Container>
    );
  }
}

export default AdminFormAddItem;