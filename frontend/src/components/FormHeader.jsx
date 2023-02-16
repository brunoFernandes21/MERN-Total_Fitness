
const FormHeader = ({ onAdd, showForm}) => {
  return (
    <div className='flex justify-between items-center bg-transparent'>
        <h3 className="mt-0 mb-8">Add New Workout</h3>
        <button className={`text-sm mt-0 mb-8 cursor-pointer block py-2 px-3 rounded border-0 ${showForm ? 'bg-red-600 text-white' : 'bg-black text-white'}` } onClick={onAdd}>{showForm ? "Close" : "Add"}</button>
    </div>
  )
}

export default FormHeader