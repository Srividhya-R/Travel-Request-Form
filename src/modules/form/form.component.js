import React, { Component } from 'react';
import { Field } from 'redux-form';
import { render } from 'react-dom';
import Tables from './Table';
//import Text from '../components/text';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

class Travel extends Component {
  constructor() {
    super();

	this.state = {
      loc1 : 'From',
	  loc2 : 'To',
	  eid  : '',
	  ename:'',
	  mail:'',
	  startDate:'01/01/2020',
	  endDate:'01/01/2020',
	  items:[]
    };
    this.handleFrom = this.handleFrom.bind(this); 
	this.handleTo = this.handleTo.bind(this); 
	this.handleStartDateChange=this.handleStartDateChange.bind(this);
	this.handleEndDateChange=this.handleEndDateChange.bind(this);
	this.handleEidChange = this.handleEidChange.bind(this); 
	this.handleEnameChange = this.handleEnameChange.bind(this); 
	this.handleMailChange = this.handleMailChange.bind(this); 
  }

  handleFrom(event, index, value) {
    //set selection to the value selected
    this.setState({ loc1 : value });
  }
  handleTo(event, index, value) {
    //set selection to the value selected
    this.setState({ loc2 : value });
  }
  handleStartDateChange(date){
	 this.setState({ startDate : date }); 
  }
  handleEndDateChange(date){
	 this.setState({ endDate : date }); 
  }
  handleEidChange = event => {
		this.setState({
			eid:event.target.value
		})
	}
	handleEnameChange = event => {
		this.setState({
			ename:event.target.value
		})
	}
	handleMailChange = event => {
		this.setState({
			mail:event.target.value
		})
	}
	handleClick = event => {
		alert(`Employee ID: ${this.state.eid}\n Employee Name: ${this.state.ename}\n Mail: ${this.state.mail} \n Travelling from: ${this.state.loc1} \n Travelling to :${this.state.loc2}\nJourney start date:${this.state.startDate}\nJourney end date:${this.state.endDate}`);
		event.preventDefault();
		let items=[...this.state.items];
		items.push({eid:this.state.eid,ename: this.state.ename, mail: this.state.mail,loc1:this.state.loc1,loc2:this.state.loc2});
		this.setState({
			items,
			eid:'',
			ename: '',
			mail: '',
			loc1:'',
			loc2:''
    });
    
	}
  
	render(){
  return (
  
    <div className="flex flex-column justify-center items-center" style={{
        backgroundColor: 'rgb(220,220,220)'
      }}>
      <form>
	  <Card>
      <CardContent>
	  <div>
        <MuiThemeProvider key={"theme"}>
		<div>
		<AppBar
             title="Mr.Cooper-Travel Request Form"
			 showMenuIconButton={false}
     />
	
        <div>
		<TextField
           hintText="Employee ID"
           floatingLabelText="E-ID"
		   value={this.state.eid}
		   onChange={this.handleEidChange}
           />
         <br/>
         <TextField
           hintText="Name"
           floatingLabelText="Employee Name"
           value={this.state.ename}
		   onChange={this.handleEnameChange}
           />
         <br/>
		   <TextField
             type="email"
             hintText="E-Mail"
             floatingLabelText="Mail ID"
             value={this.state.mail}
			 onChange={this.handleMailChange}
             />
           <br/>
		   <br/>
		   <br/>
		   <div>
		   <InputLabel>Travelling From</InputLabel>
			<DropDownMenu 
			value={this.state.loc1} 
          onChange={this.handleFrom}
         >
		 <MenuItem value={"From"} primaryText="From"  />
          <MenuItem value={"Chennai"} primaryText="Chennai"  />
          <MenuItem value={"Bangalore"} primaryText="Bangalore" />
          <MenuItem value={"Dallas"} primaryText="Dallas" />

        </DropDownMenu>
		<InputLabel>Travelling To</InputLabel>
		<DropDownMenu 
			value={this.state.loc2} 
          onChange={this.handleTo}
         >
		 <MenuItem value={"To"} primaryText="To"  />
          <MenuItem value={"Chennai"} primaryText="Chennai"  />
          <MenuItem value={"Bangalore"} primaryText="Bangalore" />
          <MenuItem value={"Dallas"} primaryText="Dallas" />

        </DropDownMenu>
		</div>
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
		  margin="normal"
          id="date-picker-dialog"
          label="Start Date"
          format="dd/MM/yyyy"
          value={this.state.startDate}
          onChange={this.handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="End Date"
          format="dd/MM/yyyy"
          value={this.state.endDate}
          onChange={this.handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
		   <br/>
		   <br/>
		   <div>
			<RaisedButton label="Submit" primary={true} onClick={this.handleClick} />
		</div>
       </div>
	   </div>
       </MuiThemeProvider>
	   </div>
	   </CardContent>
    </Card>
      </form>
	  <br/>
	  <br/>
	  <br/>
	<Tables items={ this.state.items }/>
	 </div>
  );

}
}


export default Travel;