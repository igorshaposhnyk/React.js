import React from 'react';
import "./Text.scss"

const Text = (props) => {

  const {text,tanya,count,arr} = props

  console.log(arr)

  // const text = "Доброе Утро!!!"

  const list = arr?.map((el,i)=>{
    return <p>{i} - {el}</p>
  })

  // console.log(list)

  return (
    <p>

      {list}


      sdf
      {/*<p className={"text"}> {list}</p>*/}
      <div>

        {/*<p>{tanya}</p>*/}
        {/*<p>{arr}</p>*/}
      </div>
    </p>
  );
};

export default Text;