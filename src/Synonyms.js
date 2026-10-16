import React from "react";

export default fuction Synonyms(props){
    if(props.synonyms){
    return(
    <ul className="synonyms">
      {props.synonyms.map(function (synonyms, index){
        return<li key={index}>{synonym},</li>
      })}
    </ul>
    
    );
}else{
    return null;
}
}