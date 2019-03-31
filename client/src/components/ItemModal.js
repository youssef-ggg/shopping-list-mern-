import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal:false,
        name:''
    };

    toggle = ()=>{
        this.setState({
            modal:!this.state.modal
        });
    }
    onChange = (event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit = (event)=>{
        event.preventDefault();

        const newItem = {
            name:this.state.name
        }

        //add item via add item action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    };

  render() {
    return (
      <div>
        <Button color="dark"
            style={{marginBottom:'2rem'}}
            onClick={this.toggle}>Add Item</Button>
        <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add to shopping list</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="item">Item</Label>
                        <br/>
                        <Input 
                            type="text" 
                            name="name"
                            placeholder="add Item"
                            onChange={this.onChange}/>
                    <Button
                        color="dark"
                        style={{marginTop:'2rem'}}
                        block>Add item</Button>
                    </FormGroup>   
                </Form>
            </ModalBody>

        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state =>({
    item:state.addItem
});

export default connect(mapStateToProps,{addItem})(ItemModal);