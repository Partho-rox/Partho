import React, {useState} from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Card from '@material-ui/core/Card';
import ReactDOM from 'react-dom';

function DisplayBox()
{
  const [data, setData] = useState([]);
  const [query,setQuery]=useState();
 const fetchdata=()=>{
   //useEffect(() => {
    
    fetch(query) 
    .then(response => response.json())
      .then(data => setData(data));
 };
 function Query(e)
{
  const value=e.target.value
  setQuery(value)

}
  return(
    <div className="site-card-border-less-wrapper">
      
    
      <Card size="small"   style={{ width: 250 ,height:100,border:90,display:"flex",marginLeft:50,marginTop:-90, backgroundColor:"transparent"}}>
      <div style={{marginLeft: 65,marginTop:10,color:"thistle"}}> <b> Followers </b>
      {[data].map(loc => (
          <p key={loc.id}><b>{loc.followers}</b></p>
        ))} 
        </div>
    </Card>
    <Card size="small"   style={{ width: 250 ,height:100,border:90,display:"flex",marginLeft:350,marginTop:-90, backgroundColor:"transparent"}}>
      <div style={{marginLeft:60,marginTop:10,color:"#e65100"}}> <b>Following </b>
    {[data].map(loc => (
          <p key={loc.id}><b>{loc.following}</b></p>
        ))}
        </div>
    </Card>
    <Card size="small"   style={{ width: 250 ,height:100,border:90,display:"flex",marginLeft:650,marginTop:-102, backgroundColor:"transparent"}}>
    <div style={{marginLeft:50,marginTop:10,color:"#ad1457"}}> <b>Public Repos </b>
    {[data].map(loc => (
          <p key={loc.id}><b>{loc.public_repos}</b></p>
        ))}
        </div>
    </Card>
    <Card size="small"   style={{ width: 250 ,height:100,border:190,display:"flex",marginLeft:950,marginTop:-105, backgroundColor:"transparent"}}>
    <div style={{marginLeft:50,marginTop:10,color:"#29b6f6"}}> <b> Public Gists </b>
    {[data].map(loc=> (
          <p key={loc.login}><b>{loc.public_gists}</b></p>
        ))}
        </div>
    </Card>
   
     <div className="text">
       <Input size="large" style={{width:"60%",height:"40px",borderRadius:40,border:90,marginTop:200, fontSize:"1.35rem"}} placeholder="Enter the url" onChange={Query} />
       </div>
       
    <div className="text">
      <Button type="primary" style={{width:"18%",height:"79px",marginTop:"40px", backgroundColor:"teal"}} onClick={()=>fetchdata()}>
      <h2> Compare </h2>
    </Button>
  </div>
  
  </div>
    );
}
export default DisplayBox;