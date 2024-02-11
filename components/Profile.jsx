import PromptCard from "./PromptCard"


const Profile = ({name,desc,data,handleEdit,handleDelete}) => {
  // console.log("data inside profile component", data)
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        {name==='My'? <span className="blue_gradient">{name} Profile</span>: <span className="blue_gradient">{name}'s Profile</span>}
        {/* <span className="blue_gradient">{name} Profile</span>
        <span className="blue_gradient">{}</span>
         */}
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className='mt-10 prompt_layout'>
      
      {/* {console.log(data)} */}
      {data.map((post)=>(
        <PromptCard 
          key={post._id}
          post={post}
          handleEdit = {handleEdit ? () => handleEdit(post): undefined}
          handleDelete = {handleDelete ? ()=>handleDelete(post): undefined}
        />
        
      ))}
    </div> 
    </section>
  )
}

export default Profile