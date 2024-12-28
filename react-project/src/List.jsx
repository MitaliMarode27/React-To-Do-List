import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const List = (props) => { 
return(
       <>
      <li className="list mt-3" style={{backgroundColor:"rgba(215, 252, 215, 0.686)"}}>{props.value} <Button onClick={() => {props.onSelect(props.id)}} className="btn2 btn "><Delete className="deleteIcon"/></Button></li>      
   </>
       )
    }
 
    export default List;