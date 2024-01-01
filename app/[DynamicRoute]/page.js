import React from 'react'
export const dynamicParams=false;
function page ({params}) {
  return (
    <div>{params.DynamicRoute}</div>
  )
}
export async function generateStaticParams(){
       let DataBase=["About","blogs","contact","product"]
       return DataBase.map((item)=>({DynamicRoute:item}))
}

export default page