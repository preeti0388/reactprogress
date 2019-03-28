import React, { Component, PropTypes } from 'react';
import { Progress } from '../src';
//import './style.scss';

export default class ProgressTemplate extends Component {

  constructor(props) {
    super(props);

  this.onNutClick = this.onNutClick.bind(this);
    this.state = {
      percent: props.percent || 0,
      entries: [],
      bar:[],
      button:[],
      limit:100,
    }


  }
  componentDidMount() {
    this.fetchApiToEntries('http://pb-api.herokuapp.com/bars');
  }

  onNutClick(e){
          console.log(e);
      }



  fetchApiToEntries = (apiToFetch) => {
    fetch(apiToFetch)
    .then(result => result.json())
               // console.log("preeti"+result)
               .then((entries) => {

                console.log("preeti===="+entries.limit)
                this.setState({
                  ...this.state,
                  entries
                })


                this.setState({
                  bar:entries.bars
                })
                this.setState({
                  button:entries.buttons,
                  limit:entries.limit,
                   percent:this.state.bar[0],
                })


                console.log(Object.values(this.state.entries));
               // window.setBar1=this.state.bar[0] ;
              })
               .catch((error) => console.log(error));
             }

             onDecClick = () => {
              console.log("limit"+this.state.limit);
              this.setState({ percent: this.state.percent - this.state.button[0] > 0 ? this.state.percent - this.state.button[0] : 0 });
            }

            onIncClick = () => {
             console.log("limit"+this.state.limit);
             this.setState({ percent: this.state.percent + this.state.button[0] < this.state.limit ? this.state.percent + this.state.button[0] : this.state.limit });
           }

        


 onItemClick(event) {
  console.log("limit====="+event);
      if(event>0)
      {  console.log("limit===plus us clled=="+event);
       this.setState({ percent: this.state.percent + event < this.state.limit ? this.state.percent + event : this.state.limit });
      
      }else{
        console.log("limit===minur us clled=="+event);
      this.setState({ percent: this.state.percent + event > 0 ? this.state.percent + event : 0 });
        
      }
            //event.currentTarget.style.backgroundColor = '#ccc';
              

          }
       
           render() {

            const {entries} = this.state;
             var first=this.state.button[1];


            return (

              <div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 20px 0' }}>
              




              <Progress
              percent={this.state.percent}
              status={this.props.status}
              theme={this.props.theme}
              type={this.props.type}
              width={this.props.width}
              strokeWidth={this.props.strokeWidth}
              style={{ margin: '0 0 0 10px' }}
              />

              </div>

              <div style={{display:'flex', flexDirection:'row'}}>
            
             <button onClick={this.onItemClick.bind(this, this.state.button[0])}>
               {this.state.button[0]}
              </button>

              <button onClick={this.onItemClick.bind(this, this.state.button[1])}>
               {this.state.button[1]}
              </button>

               <button onClick={this.onItemClick.bind(this, this.state.button[2])}>
               {this.state.button[2]}
              </button>

               <button onClick={this.onItemClick.bind(this, this.state.button[3])}>
               {this.state.button[3]}
              </button>

             

              </div>



              </div>
              )
            }
          }
