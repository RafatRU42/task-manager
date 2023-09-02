
const AddTaskModal = () => {
  return (
    <div>
        {/* Open the modal using ID.showModal() method */}
<button className="btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <form onSubmit={} method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
    <input type="submit" value='submit' />
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default AddTaskModal

